// BancoPerguntas.js
// Perguntas de Matemática para Menongue Educa

const BancoPerguntas = [
  // ------------------- FÁCEIS (20) -------------------
  { pergunta: "Quanto é 5 + 3?", opcoes: ["7", "8", "9", "6"], correta: 1, disciplina: "Matemática", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Quanto é 10 - 4?", opcoes: ["5", "6", "7"], correta: 1, disciplina: "Matemática", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Qual é o resultado de 6 × 2?", opcoes: ["12", "8", "14", "10"], correta: 0, disciplina: "Matemática", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Divida 20 por 5. Qual é o resultado?", opcoes: ["2", "4", "5", "6"], correta: 1, disciplina: "Matemática", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Se João tem 3 maçãs e recebe mais 2, quantas maçãs ele tem?", opcoes: ["4", "5", "6"], correta: 1, disciplina: "Matemática", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Quanto é 9 + 7?", opcoes: ["15", "16", "17", "18"], correta: 2, disciplina: "Matemática", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Subtraia 15 - 8.", opcoes: ["5", "7", "8", "6"], correta: 1, disciplina: "Matemática", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Quanto é 4 × 5?", opcoes: ["20", "18", "25", "15"], correta: 0, disciplina: "Matemática", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Divida 36 por 6.", opcoes: ["5", "6", "7", "8"], correta: 1, disciplina: "Matemática", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Se Maria tem 10 laranjas e dá 3 a Ana, quantas ficam com Maria?", opcoes: ["6", "7", "8", "9"], correta: 1, disciplina: "Matemática", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Quanto é 7 + 6?", opcoes: ["12", "13", "14", "15"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Subtraia 20 - 9.", opcoes: ["10", "11", "12", "13"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é o produto de 8 × 3?", opcoes: ["22", "24", "26", "28"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Divida 45 por 5.", opcoes: ["8", "9", "10", "11"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Se um comboio parte de Luanda às 8h e chega a Benguela às 12h, quantas horas durou a viagem?", opcoes: ["3", "4", "5", "6"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Quanto é 15 + 7?", opcoes: ["21", "22", "23", "24"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Subtraia 30 - 12.", opcoes: ["17", "18", "19", "20"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é o resultado de 9 × 4?", opcoes: ["32", "34", "36", "38"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Divida 56 por 8.", opcoes: ["6", "7", "8", "9"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Se João tem 5 mangas e Maria 7 mangas, quantas mangas têm juntos?", opcoes: ["10", "11", "12", "13"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },

  // ------------------- DIFÍCEIS (10) -------------------
  { pergunta: "O rio Kwanza passa por qual província?", opcoes: ["Benguela", "Cuanza Sul", "Huíla", "Lunda Norte"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Se um campo de futebol em Luanda tem 90 metros de comprimento e 60 metros de largura, qual é sua área em metros quadrados?", opcoes: ["5400", "4500", "6000", "5000"], correta: 0, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Uma escola em Menongue tem 120 alunos. Se 45 são meninas, quantos são meninos?", opcoes: ["65", "75", "80", "70"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Se uma caixa de laranjas em Luanda custa 150 AKZ e Ana compra 4 caixas, quanto ela gastou?", opcoes: ["500 AKZ", "600 AKZ", "550 AKZ", "450 AKZ"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "O rio Cuito nasce em qual província?", opcoes: ["Benguela", "Bié", "Moxico", "Cuando Cubango"], correta: 3, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Uma viagem de carro de Luanda a Lobito cobre 500 km. Se o carro percorre 100 km por hora, quanto tempo durará a viagem?", opcoes: ["4h", "5h", "6h", "7h"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Se uma professora distribui 48 lápis igualmente entre 8 alunos, quantos lápis cada aluno recebe?", opcoes: ["5", "6", "7", "8"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Um agricultor em Huambo planta 25 sementes por fileira. Se ele planta 12 fileiras, quantas sementes ele planta ao todo?", opcoes: ["250", "275", "300", "320"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Se Luísa compra 3 camisetas a 200 AKZ cada e paga com uma nota de 1000 AKZ, quanto troco ela receberá?", opcoes: ["200 AKZ", "400 AKZ", "600 AKZ", "500 AKZ"], correta: 0, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "O estádio 11 de Novembro em Luanda tem capacidade para 50.000 pessoas. Se 3/5 dos ingressos foram vendidos, quantas pessoas compareceram?", opcoes: ["30.000", "25.000", "35.000", "20.000"], correta: 0, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" }
];

export default BancoPerguntas;
