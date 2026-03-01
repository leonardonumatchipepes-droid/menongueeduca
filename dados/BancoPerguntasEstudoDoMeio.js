// BancoPerguntasEstudoDoMeio.js
// Perguntas de Estudo do Meio para Menongue Educa

const BancoPerguntasEstudoDoMeio = [
  // ------------------- FÁCEIS (20) -------------------
  { pergunta: "Qual destes é um animal?", opcoes: ["Leão", "Pedra", "Mesa"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Qual destes é um fruto?", opcoes: ["Maçã", "Carro", "Sapato"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "O sol nasce de qual direção?", opcoes: ["Leste", "Oeste", "Norte", "Sul"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Qual destes é um vegetal?", opcoes: ["Tomate", "Cachorro", "Carro"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Onde vivem os peixes?", opcoes: ["Água", "Terra", "Ar"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Qual é o estado da água que usamos para beber?", opcoes: ["Líquido", "Sólido", "Gasoso"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Qual destes animais voa?", opcoes: ["Pássaro", "Cavalo", "Elefante"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Qual é a cor da grama?", opcoes: ["Verde", "Amarela", "Azul"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Qual destes é um meio de transporte?", opcoes: ["Carro", "Árvore", "Casa"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Qual destes animais vive na água?", opcoes: ["Peixe", "Gato", "Cavalo"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Qual destes objetos é usado para escrever?", opcoes: ["Lápis", "Bola", "Sapato"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "O que usamos para medir o tempo?", opcoes: ["Relógio", "Caderno", "Computador"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual destes animais é herbívoro?", opcoes: ["Vaca", "Leão", "Tigre"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual destes é um rio de Angola?", opcoes: ["Kwanza", "Nilo", "Amazonas"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é a capital de Angola?", opcoes: ["Luanda", "Benguela", "Huambo"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual destes é um continente?", opcoes: ["África", "Brasil", "Luanda"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "O que as plantas produzem que usamos para respirar?", opcoes: ["Oxigênio", "Água", "Terra"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual destes animais é típico da savana angolana?", opcoes: ["Leão", "Urso", "Pinguim"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual destes transportes é usado no rio?", opcoes: ["Barco", "Carro", "Avião"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "O que usamos para regar as plantas?", opcoes: ["Água", "Areia", "Fogo"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "fácil" },

  // ------------------- DIFÍCEIS (10) -------------------
  { pergunta: "O rio Cuito passa por qual província angolana?", opcoes: ["Cuando Cubango", "Benguela", "Huíla", "Bié"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Qual é a principal atividade econômica em Menongue?", opcoes: ["Agricultura", "Pesca", "Mineração", "Comércio"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "O que é típico da flora da província do Huambo?", opcoes: ["Eucalipto", "Cacto", "Mangue"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Qual destes animais é encontrado na savana de Angola?", opcoes: ["Elefante", "Urso", "Canguru"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Qual cidade angolana é conhecida por seu porto?", opcoes: ["Lobito", "Huambo", "Malanje", "Menongue"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "O que é o Kalandula?", opcoes: ["Cascata", "Montanha", "Rio", "Cidade"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Qual é o principal rio que passa por Luanda?", opcoes: ["Bengo", "Kwanza", "Cuito", "Cubango"], correta: 1, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "O que se planta comumente em Benguela para alimentação?", opcoes: ["Milho", "Café", "Algodão", "Cacau"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Qual destes animais é típico da região do Cuando Cubango?", opcoes: ["Hipopótamo", "Pinguim", "Canguru"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Qual é a província angolana conhecida como 'capital da chuva'?", opcoes: ["Huambo", "Cuanza Sul", "Benguela", "Malanje"], correta: 0, disciplina: "Estudo do Meio", grupoClasse: "5–6", nivel: "difícil" }
];

export default BancoPerguntasEstudoDoMeio;
