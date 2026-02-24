// bancoPerguntas.js
// Quiz de Matemática - Menongue Educa
// Cada classe: 5 perguntas fáceis, 3 difíceis

const bancoPerguntas = [
    // =====================
    // 1ª Classe - Básico (5 perguntas)
    // =====================
    { pergunta: "Quanto é 2 + 3?", opcoes:["4","5","6","7"], resposta:1, nivel:"basico", classe:"1" },
    { pergunta: "Qual número vem depois de 7?", opcoes:["6","8","9","10"], resposta:1, nivel:"basico", classe:"1" },
    { pergunta: "Quanto é 5 - 2?", opcoes:["2","3","4","5"], resposta:1, nivel:"basico", classe:"1" },
    { pergunta: "Quanto é 1 + 4?", opcoes:["5","6","4","3"], resposta:0, nivel:"basico", classe:"1" },
    { pergunta: "Quantos lados tem um triângulo?", opcoes:["3","4","5","6"], resposta:0, nivel:"basico", classe:"1" },

    // 1ª Classe - Difícil (3 perguntas)
    { pergunta: "Se tenho 3 maçãs e ganho mais 4, quantas tenho no total?", opcoes:["6","7","8","9"], resposta:1, nivel:"dificil", classe:"1" },
    { pergunta: "Resolva: 5 + 3 - 2 = ?", opcoes:["5","6","7","8"], resposta:2, nivel:"dificil", classe:"1" },
    { pergunta: "Se uma caixa tem 10 lápis e retiro 3, quantos ficam?", opcoes:["6","7","8","9"], resposta:1, nivel:"dificil", classe:"1" },

    // =====================
    // 2ª Classe - Básico (5 perguntas)
    // =====================
    { pergunta: "Quanto é 7 + 5?", opcoes:["11","12","13","14"], resposta:1, nivel:"basico", classe:"2" },
    { pergunta: "Quanto é 10 - 6?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"2" },
    { pergunta: "Quanto é 2 x 3?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"2" },
    { pergunta: "Quantos lados tem um quadrado?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"2" },
    { pergunta: "Quanto é 9 + 1?", opcoes:["9","10","11","12"], resposta:1, nivel:"basico", classe:"2" },

    // 2ª Classe - Difícil (3 perguntas)
    { pergunta: "Se João tem 6 balões e dá 2 ao amigo, quantos balões restam?", opcoes:["3","4","5","6"], resposta:1, nivel:"dificil", classe:"2" },
    { pergunta: "Resolva: 6 x 3 = ?", opcoes:["16","18","20","22"], resposta:1, nivel:"dificil", classe:"2" },
    { pergunta: "Se tenho 12 chocolates e como 5, quantos ficam?", opcoes:["6","7","8","9"], resposta:2, nivel:"dificil", classe:"2" },

    // =====================
    // 3ª Classe - Básico (5 perguntas)
    // =====================
    { pergunta: "15 ÷ 3 = ?", opcoes:["5","6","4","3"], resposta:0, nivel:"basico", classe:"3" },
    { pergunta: "Quanto é 8 + 7?", opcoes:["14","15","16","17"], resposta:1, nivel:"basico", classe:"3" },
    { pergunta: "Quanto é 9 - 5?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"3" },
    { pergunta: "Quantos lados tem um pentágono?", opcoes:["4","5","6","7"], resposta:1, nivel:"basico", classe:"3" },
    { pergunta: "Quanto é 6 x 2?", opcoes:["11","12","13","14"], resposta:1, nivel:"basico", classe:"3" },

    // 3ª Classe - Difícil (3 perguntas)
    { pergunta: "Resolva: 9 x 4 = ?", opcoes:["34","36","38","32"], resposta:1, nivel:"dificil", classe:"3" },
    { pergunta: "Se tenho 20 balas e dou 7, quantas ficam?", opcoes:["12","13","14","15"], resposta:2, nivel:"dificil", classe:"3" },
    { pergunta: "Qual é o próximo número da sequência: 2,4,6,?", opcoes:["7","8","9","10"], resposta:1, nivel:"dificil", classe:"3" },

    // =====================
    // 4ª Classe - Básico (5 perguntas)
    // =====================
    { pergunta: "25 + 17 = ?", opcoes:["41","42","43","44"], resposta:1, nivel:"basico", classe:"4" },
    { pergunta: "48 ÷ 6 = ?", opcoes:["7","8","9","10"], resposta:1, nivel:"basico", classe:"4" },
    { pergunta: "Quanto é 14 - 9?", opcoes:["4","5","6","7"], resposta:1, nivel:"basico", classe:"4" },
    { pergunta: "Quanto é 3 x 5?", opcoes:["15","16","17","18"], resposta:0, nivel:"basico", classe:"4" },
    { pergunta: "Quantos lados tem um hexágono?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"4" },

    // 4ª Classe - Difícil (3 perguntas)
    { pergunta: "Se um livro custa 15 AKZ e tenho 50 AKZ, quanto sobra?", opcoes:["30","35","40","45"], resposta:2, nivel:"dificil", classe:"4" },
    { pergunta: "Resolva: 36 ÷ 6 =", opcoes:["5","6","7","8"], resposta:1, nivel:"dificil", classe:"4" },
    { pergunta: "Qual é o próximo número: 5,10,15,?", opcoes:["18","19","20","21"], resposta:2, nivel:"dificil", classe:"4" },

    // =====================
    // 5ª Classe - Básico (5 perguntas)
    // =====================
    { pergunta: "123 + 77 = ?", opcoes:["199","200","201","210"], resposta:1, nivel:"basico", classe:"5" },
    { pergunta: "144 ÷ 12 = ?", opcoes:["11","12","13","14"], resposta:1, nivel:"basico", classe:"5" },
    { pergunta: "Quanto é 50 - 25?", opcoes:["24","25","26","27"], resposta:1, nivel:"basico", classe:"5" },
    { pergunta: "Quanto é 6 x 7?", opcoes:["41","42","43","44"], resposta:1, nivel:"basico", classe:"5" },
    { pergunta: "Quantos lados tem um octógono?", opcoes:["6","7","8","9"], resposta:2, nivel:"basico", classe:"5" },

    // 5ª Classe - Difícil (3 perguntas)
    { pergunta: "Se um caderno custa 35 AKZ e tenho 100 AKZ, quanto sobra?", opcoes:["60","65","70","75"], resposta:2, nivel:"dificil", classe:"5" },
    { pergunta: "Resolva: 7 x 8 =", opcoes:["54","55","56","57"], resposta:2, nivel:"dificil", classe:"5" },
    { pergunta: "Qual é o próximo número da sequência: 3,6,9,?", opcoes:["10","11","12","13"], resposta:2, nivel:"dificil", classe:"5" },

    // =====================
    // 6ª Classe - Básico (5 perguntas)
    // =====================
    { pergunta: "250 - 125 = ?", opcoes:["120","125","130","135"], resposta:1, nivel:"basico", classe:"6" },
    { pergunta: "15 x 2 = ?", opcoes:["28","29","30","31"], resposta:2, nivel:"basico", classe:"6" },
    { pergunta: "48 ÷ 8 = ?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"6" },
    { pergunta: "Quanto é 17 + 13?", opcoes:["29","30","31","32"], resposta:2, nivel:"basico", classe:"6" },
    { pergunta: "Quantos lados tem um decágono?", opcoes:["8","9","10","11"], resposta:2, nivel:"basico", classe:"6" },

    // 6ª Classe - Difícil (3 perguntas)
    { pergunta: "Resolva: 15 x 12 =", opcoes:["175","180","185","190"], resposta:1, nivel:"dificil", classe:"6" },
    { pergunta: "Se tenho 200 AKZ e gasto 75 AKZ, quanto sobra?", opcoes:["120","125","130","135"], resposta:1, nivel:"dificil", classe:"6" },
    { pergunta: "Qual é o próximo número: 10,20,30,?", opcoes:["35","40","50","45"], resposta:1, nivel:"dificil", classe:"6" },
];

