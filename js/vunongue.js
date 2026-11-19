/* VUNONGUE IA — motor local, sem dependências externas.
 * Não usa eval(), não chama serviços remotos e não afirma consultar manuais não instalados.
 */
(() => {
"use strict";
const $ = (id) => document.getElementById(id);
const messages = $("messages"), form = $("questionForm"), input = $("question"), send = $("send");
const normalize = (s) => String(s || "").toLocaleLowerCase("pt-AO").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9+*/().,\-\s]/g, " ").replace(/\s+/g, " ").trim();
const escapeText = (s) => String(s).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
function addMessage(text, role, source) {
 const wrap=document.createElement("div"); wrap.className="msg "+role;
 const bubble=document.createElement("div"); bubble.className="bubble"; bubble.textContent=text; wrap.appendChild(bubble);
 if(source){const tag=document.createElement("div");tag.className="source";tag.textContent=source;wrap.appendChild(tag);}
 messages.appendChild(wrap);messages.scrollTop=messages.scrollHeight;
}
function tokenizeMath(raw) {
 const s=raw.replace(/,/g,".").replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-").replace(/:/g,"/");
 const tokens=s.match(/\d+(?:\.\d+)?|[()+*/-]/g);
 if(!tokens || tokens.join("").length!==s.replace(/\s/g,"").length) return null;
 return tokens;
}
function calculate(raw) {
 const tokens=tokenizeMath(raw); if(!tokens) return null; let i=0;
 function factor(){
  const t=tokens[i++];
  if(t==="+") return factor();
  if(t==="-") return -factor();
  if(t==="("){const v=expr();if(tokens[i++]!==")")throw Error("Falta fechar parênteses.");return v;}
  if(t===undefined || !/^\d+(\.\d+)?$/.test(t))throw Error("Operação incompleta.");
  const n=Number(t);if(!Number.isFinite(n))throw Error("Número inválido.");return n;
 }
 function term(){let v=factor();while(tokens[i]==="*"||tokens[i]==="/"){const op=tokens[i++],r=factor();if(op==="/"&&r===0)throw Error("Não é possível dividir por zero.");v=op==="*"?v*r:v/r;}return v;}
 function expr(){let v=term();while(tokens[i]==="+"||tokens[i]==="-"){const op=tokens[i++],r=term();v=op==="+"?v+r:v-r;}return v;}
 try{const result=expr();if(i!==tokens.length||!Number.isFinite(result))return null;return {result,steps:makeSteps(tokens,result)};}catch(e){return {error:e.message};}
}
function makeSteps(tokens,result){
 const readable=tokens.join(" ");
 return "Vamos resolver por etapas.\n1. Primeiro, resolvemos as multiplicações e divisões, respeitando os parênteses.\n2. Depois, resolvemos as adições e subtracções, da esquerda para a direita.\n3. Resultado: "+Number(result.toFixed(8))+".\n\nOperação: "+readable;
}
function mathAnswer(q){
 const n=normalize(q);
 const hasMath=/\d/.test(n)&&(/[+*/()]|\s-\s|\bmais\b|\bmenos\b|\bvezes\b|\bdividido\b|\bdividir\b/.test(n));
 if(!hasMath)return null;
 let expr=n.replace(/^(quanto e|calcula|calcule|resolve|resolva|qual e o resultado de)\s+/,"")
 .replace(/\bmais\b/g,"+").replace(/\bmenos\b/g,"-").replace(/\bvezes\b/g,"*").replace(/\b(multiplicado por)\b/g,"*").replace(/\b(dividido por|dividir por)\b/g,"/");
 expr=expr.replace(/[^0-9+*/().,\-\s]/g," ").trim();
 const result=calculate(expr);if(!result)return null;
 if(result.error)return result.error;
 return result.steps;
}
function knowledgeAnswer(q){
 const base=window.BaseConhecimentoIA;
 if(!base||typeof base!=="object")return null;
 const query=normalize(q);const queryTerms=[...new Set(query.split(" ").filter(w=>w.length>2))];
 let best=null,bestScore=0;
 for(const [key,item] of Object.entries(base)){
  if(!item||typeof item.resumo!=="string"||!Array.isArray(item.palavras_chave))continue;
  const keywords=item.palavras_chave.map(normalize);
  let score=0;
  for(const kw of keywords){if(!kw)continue;if(query.includes(kw))score+=kw.includes(" ")?5:3;}
  for(const term of queryTerms){if(normalize(key).includes(term))score+=2;}
  if(score>bestScore){bestScore=score;best={key,item};}
 }
 if(!best||bestScore<3)return null;
 return {text:best.item.resumo+"\n\nQueres que eu explique alguma parte desta matéria com um exemplo?",source:"Base de conhecimento local · "+best.key.replace(/_/g," ")};
}
function answer(q){
 const math=mathAnswer(q);if(math)return {text:math,source:"Motor matemático local · cálculo no dispositivo"};
 const found=knowledgeAnswer(q);if(found)return found;
 return {text:"Ainda não encontrei informação suficiente para responder com segurança. Experimenta reformular a pergunta ou indicar a classe e a disciplina.\n\nNeste momento, tenho acesso à base de conhecimento local instalada, mas não vou inventar uma resposta nem afirmar que consultei manuais que ainda não estão disponíveis neste dispositivo.",source:"Sem fonte local suficiente"};
}
form.addEventListener("submit",(event)=>{
 event.preventDefault();const q=input.value.trim();if(!q)return;
 addMessage(q,"user");input.value="";send.disabled=true;
 $("mode").textContent="A pesquisar no dispositivo…";
 try{const result=answer(q);addMessage(result.text,"bot",result.source);$("mode").textContent=navigator.onLine?"Motor local pronto · também podes continuar offline":"Modo sem Internet · motor local activo";}
 catch(err){addMessage("Ocorreu um erro ao processar a pergunta. Tenta novamente.","bot","Motor local");$("mode").textContent="Motor local pronto";}
 finally{send.disabled=false;input.focus();}
});
document.querySelectorAll("[data-q]").forEach(btn=>btn.addEventListener("click",()=>{input.value=btn.dataset.q;form.requestSubmit();}));
window.addEventListener("offline",()=>{$("mode").textContent="Modo sem Internet · motor local activo";$("modeDetail").textContent="Não é necessária ligação para usar as funções locais disponíveis.";});
window.addEventListener("online",()=>{$("mode").textContent="Ligação disponível · motor local activo";});
if(!window.BaseConhecimentoIA){$("mode").textContent="Base de conhecimento não carregada";$("modeDetail").textContent="Verifica o ficheiro dados/BaseConhecimentoIA.js.";}
if("serviceWorker" in navigator && location.protocol!=="file:"){navigator.serviceWorker.register("./service-worker.js").catch(()=>{});}
})();
