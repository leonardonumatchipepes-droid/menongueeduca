// BancoPerguntaDeMatematica.js
// Perguntas de Matemática para Menongue Educa
// Foco: 5º e 6º ano, equações, problemas e cálculos avançados

const BancoPerguntaDeMatematica = [
  // ------------------- FÁCEIS (20) -------------------
  { pergunta: "Resolva: x + 7 = 15. Qual é o valor de x?", opcoes: ["7", "8", "9"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: 3x = 12. Qual é o valor de x?", opcoes: ["3", "4", "5"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é o valor de x em: x - 9 = 6?", opcoes: ["14", "15", "16"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: 5x = 35. x = ?", opcoes: ["6", "7", "8"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: x/4 = 6. x = ?", opcoes: ["20", "22", "24"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é x: x + 12 = 20", opcoes: ["7", "8", "9"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: 2x = 10", opcoes: ["4", "5", "6"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: x - 5 = 9", opcoes: ["13", "14", "15"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é x: 4x = 32", opcoes: ["6", "7", "8"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: x / 3 = 5", opcoes: ["14", "15", "16"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: x + 9 = 18", opcoes: ["8", "9", "10"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: 6x = 36", opcoes: ["5", "6", "7"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: x - 7 = 10", opcoes: ["16", "17", "18"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é x: x / 5 = 7", opcoes: ["35", "36", "37"], correta: 0, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: x + 15 = 27", opcoes: ["11", "12", "13"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: 7x = 49", opcoes: ["6", "7", "8"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é x: x - 8 = 12", opcoes: ["19", "20", "21"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: x / 2 = 9", opcoes: ["17", "18", "19"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Resolva: x + 6 = 14", opcoes: ["7", "8", "9"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é x: 5x = 25", opcoes: ["4", "5", "6"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "fácil" },

  // ------------------- DIFÍCEIS (10) -------------------
  { pergunta: "Se um campo em Luanda tem 90 m de comprimento e 60 m de largura, qual é a área?", opcoes: ["5400 m²", "4500 m²", "6000 m²"], correta: 0, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Uma escola tem 120 alunos. Se 45 são meninas, quantos são meninos?", opcoes: ["65", "75", "80"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Se uma caixa de laranjas custa 150 AKZ e Ana compra 4 caixas, quanto ela gastou?", opcoes: ["500 AKZ", "600 AKZ", "550 AKZ"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "O rio Cuito nasce em qual província?", opcoes: ["Benguela", "Bié", "Moxico", "Cuando Cubango"], correta: 3, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Se um carro percorre 100 km/h, quanto tempo leva para percorrer 500 km?", opcoes: ["4 h", "5 h", "6 h"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Uma professora distribui 48 lápis entre 8 alunos. Quantos lápis cada aluno recebe?", opcoes: ["5", "6", "7"], correta: 1, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Um agricultor planta 25 sementes por fileira. Se planta 12 fileiras, quantas sementes ao todo?", opcoes: ["250", "275", "300"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Se Luísa compra 3 camisetas a 200 AKZ cada e paga com 1000 AKZ, quanto troco recebe?", opcoes: ["200 AKZ", "400 AKZ", "600 AKZ"], correta: 0, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "O estádio 11 de Novembro tem capacidade para 50.000 pessoas. Se 3/5 dos ingressos foram vendidos, quantas pessoas compareceram?", opcoes: ["30.000", "25.000", "35.000"], correta: 0, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Se x + 7 = 20 e 2x = ?", opcoes: ["26", "27", "28"], correta: 2, disciplina: "Matemática", grupoClasse: "5–6", nivel: "difícil" }
];

export default BancoPerguntaDeMatematica;
