let canvas, ctx;
let imagemJogador = new Image();
imagemJogador.src = "imagens/jogador.png";

let somAcerto = new Audio("sons/acerto.mp3");
let somErro = new Audio("sons/erro.mp3");

let jogador = {
    x: 370,
    y: 420,
    largura: 70,
    altura: 70,
    velocidade: 8,
    vidas: 3
};

let baloes = [];
let perguntaAtual;
let pontos = 0;
let estagio = 1;
let velocidadeBaloes = 2;
let jogoAtivo = true;

const corridaPerguntas = [
    {pergunta:"2 + 2 =", opcoes:["3","4","5"], resposta:1},
    {pergunta:"Capital de Angola?", opcoes:["Luanda","Huambo","Lobito"], resposta:0},
    {pergunta:"5 x 3 =", opcoes:["15","10","20"], resposta:0},
    {pergunta:"10 - 7 =", opcoes:["2","3","4"], resposta:1},
    {pergunta:"6 ÷ 2 =", opcoes:["4","3","2"], resposta:1}
];

function iniciarCorrida(){

    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    pontos = 0;
    estagio = 1;
    velocidadeBaloes = 2;
    jogador.vidas = 3;
    jogoAtivo = true;

    gerarPergunta();
    document.addEventListener("keydown", moverJogador);
    requestAnimationFrame(loop);
}

function gerarPergunta(){

    perguntaAtual = corridaPerguntas[Math.floor(Math.random()*corridaPerguntas.length)];
    baloes = [];

    for(let i=0;i<3;i++){
        baloes.push({
            x: 150 + (i*200),
            y: 0,
            largura: 120,
            altura: 60,
            texto: perguntaAtual.opcoes[i],
            correta: i === perguntaAtual.resposta
        });
    }
}

function moverJogador(e){
    if(!jogoAtivo) return;

    if(e.key==="ArrowLeft" && jogador.x > 0){
        jogador.x -= jogador.velocidade;
    }
    if(e.key==="ArrowRight" && jogador.x + jogador.largura < canvas.width){
        jogador.x += jogador.velocidade;
    }
}

function detectarColisao(a,b){
    return a.x < b.x + b.largura &&
           a.x + a.largura > b.x &&
           a.y < b.y + b.altura &&
           a.y + a.altura > b.y;
}

function loop(){

    if(!jogoAtivo) return;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";
    ctx.font="20px Arial";
    ctx.fillText("Estágio: "+estagio,20,30);
    ctx.fillText("Pontos: "+pontos,150,30);
    ctx.fillText("Vidas: "+jogador.vidas,300,30);
    ctx.fillText(perguntaAtual.pergunta,20,60);

    // Desenhar jogador PNG
    ctx.drawImage(imagemJogador,jogador.x,jogador.y,jogador.largura,jogador.altura);

    baloes.forEach(b => {

        b.y += velocidadeBaloes;

        ctx.fillStyle="orange";
        ctx.fillRect(b.x,b.y,b.largura,b.altura);

        ctx.fillStyle="black";
        ctx.font="18px Arial";
        ctx.fillText(b.texto,b.x+40,b.y+35);

        if(detectarColisao(jogador,b)){

            if(b.correta){
                somAcerto.play();
                pontos++;

                if(pontos % 5 === 0){
                    estagio++;
                    velocidadeBaloes += 1;
                }

                if(estagio > 6){
                    vitoria();
                    return;
                }

            }else{
                somErro.play();
                jogador.vidas--;

                if(jogador.vidas <= 0){
                    gameOver();
                    return;
                }
            }

            gerarPergunta();
        }

        if(b.y > canvas.height){
            gerarPergunta();
        }

    });

    requestAnimationFrame(loop);
}

function gameOver(){
    jogoAtivo = false;
    salvarRanking();
    alert("Fim do jogo! Pontuação: "+pontos);
    location.reload();
}

function vitoria(){
    jogoAtivo = false;
    salvarRanking();
    alert("🏆 PARABÉNS! Concluiu o Estágio 06!");
    location.reload();
}

function salvarRanking(){

    let nome = prompt("Digite seu nome para o ranking:");
    if(!nome) return;

    let ranking = JSON.parse(localStorage.getItem("rankingMenongue")) || [];

    ranking.push({nome:nome,pontos:pontos});

    ranking.sort((a,b)=>b.pontos-a.pontos);
    ranking = ranking.slice(0,10);

    localStorage.setItem("rankingMenongue",JSON.stringify(ranking));
}

if(pontos >= 25){
    alert("🥇 Medalha de OURO!");
}else if(pontos >= 15){
    alert("🥈 Medalha de PRATA!");
}else{
    alert("🥉 Medalha de BRONZE!");
}

// Antes:
const corridaPerguntas = [].concat(...Object.values(bancoPerguntas));

// Agora:
const corridaPerguntas = bancoDados.corrida();
