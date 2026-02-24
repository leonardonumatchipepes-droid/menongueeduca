let perguntasAtuais = [];
let indice = 0;
let pontos = 0;

function iniciarQuiz(){

    let classe = document.getElementById("classe").value;
    let nivel = document.getElementById("nivel").value;

    let chave = classe + "_" + nivel;

    perguntasAtuais = perguntas[chave];
    indice = 0;
    pontos = 0;

    mostrarPergunta();
}

function mostrarPergunta(){

    if(indice >= perguntasAtuais.length){
        document.getElementById("areaPergunta").innerHTML =
        "<h3>Fim do Quiz</h3><p>Pontuação: "+pontos+"</p>";
        return;
    }

    let p = perguntasAtuais[indice];
    let html = "<h3>"+p.pergunta+"</h3>";

    p.opcoes.forEach((op,i)=>{
        html += "<button onclick='responder("+i+")'>"+op+"</button><br>";
    });

    document.getElementById("areaPergunta").innerHTML = html;
}

function responder(opcao){
    if(opcao === perguntasAtuais[indice].resposta){
        pontos++;
    }
    indice++;
    mostrarPergunta();
}
