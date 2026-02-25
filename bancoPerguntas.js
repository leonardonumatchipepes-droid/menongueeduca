// bancoPerguntas.js
// Quiz de Matemática - Menongue Educa
// 6 classes, 40 perguntas cada (20 basico + 20 dificil)

const bancoPerguntas = [

    // =====================
    // 1ª Classe - Básico (20 perguntas)
    // =====================
    {pergunta:"Quanto é 2 + 3?", opcoes:["4","5","6","7"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Qual número vem depois de 7?", opcoes:["6","8","9","10"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 5 - 2?", opcoes:["2","3","4","5"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 1 + 4?", opcoes:["5","6","4","3"], resposta:0, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um triângulo?", opcoes:["3","4","5","6"], resposta:0, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 3 + 2?", opcoes:["4","5","6","7"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Qual número vem depois de 5?", opcoes:["6","7","8","4"], resposta:0, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 4 - 1?", opcoes:["2","3","4","1"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 2 + 5?", opcoes:["6","7","8","9"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um quadrado?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 6 - 2?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 1 + 6?", opcoes:["6","7","8","5"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um pentágono?", opcoes:["4","5","6","3"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 3 + 4?", opcoes:["6","7","8","9"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 5 - 3?", opcoes:["1","2","3","4"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 2 + 2?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um triângulo?", opcoes:["3","4","5","6"], resposta:0, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 1 + 5?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 4 - 3?", opcoes:["0","1","2","3"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},
    {pergunta:"Quanto é 0 + 7?", opcoes:["6","7","8","9"], resposta:1, nivel:"basico", classe:"1", disciplina:"matematica"},

    // =====================
    // 1ª Classe - Difícil (20 perguntas)
    // =====================
    {pergunta:"Se tenho 3 maçãs e ganho mais 4, quantas tenho?", opcoes:["6","7","8","9"], resposta:1, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Resolva: 5 + 3 - 2 = ?", opcoes:["5","6","7","8"], resposta:2, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Se uma caixa tem 10 lápis e retiro 3, quantos ficam?", opcoes:["6","7","8","9"], resposta:1, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"João tem 2 balões, Maria dá 3. Quantos no total?", opcoes:["4","5","6","7"], resposta:1, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Resolva: 7 - 2 + 4 = ?", opcoes:["8","9","10","11"], resposta:2, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Se tenho 5 chocolates e como 2, quantos restam?", opcoes:["2","3","4","5"], resposta:1, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Maria comprou 3 balas e João 4. Quantas balas juntos?", opcoes:["6","7","8","9"], resposta:1, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Resolva: 6 + 2 - 3 = ?", opcoes:["4","5","6","7"], resposta:1, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Se tenho 8 lápis e dou 3, quantos ficam?", opcoes:["4","5","6","7"], resposta:2, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Ana tem 10 bolinhas e perde 2, quantas sobram?", opcoes:["7","8","9","10"], resposta:2, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Se tenho 1 + 2 + 3 = ?", opcoes:["5","6","7","8"], resposta:2, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"João tem 12 balas e dá 5 ao amigo, quantas ficam?", opcoes:["6","7","8","9"], resposta:2, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Resolva: 3 x 2 =", opcoes:["5","6","7","8"], resposta:1, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Se uma cesta tem 10 maçãs e tiro 4, quantas restam?", opcoes:["5","6","7","8"], resposta:2, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Resolva: 7 + 5 - 3 = ?", opcoes:["8","9","10","11"], resposta:2, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Pedro tem 9 balões, dá 2, quantos ficam?", opcoes:["6","7","8","9"], resposta:2, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Se tenho 3 caixas com 4 balas cada, quantas balas no total?", opcoes:["10","11","12","13"], resposta:2, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Resolva: 8 - 3 + 2 = ?", opcoes:["6","7","8","9"], resposta:1, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Ana tem 6 lápis, compra 4. Quantos agora?", opcoes:["9","10","11","12"], resposta:1, nivel:"dificil", classe:"1", disciplina:"matematica"},
    {pergunta:"Se João tem 5 balas e ganha 3, quantas balas?", opcoes:["7","8","9","10"], resposta:1, nivel:"dificil", classe:"1", disciplina:"matematica"},

];
// 2ª Classe - Banco de Perguntas
const bancoPerguntas = [

    // =====================
    // 2ª Classe - Básico (20 perguntas)
    // =====================
    {pergunta:"Quanto é 7 + 5?", opcoes:["11","12","13","14"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 10 - 6?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 2 x 3?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um quadrado?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 9 + 1?", opcoes:["9","10","11","12"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 6 + 4?", opcoes:["9","10","11","12"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 8 - 3?", opcoes:["4","5","6","7"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 5 x 2?", opcoes:["10","11","12","13"], resposta:0, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 12 ÷ 4?", opcoes:["2","3","4","5"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um triângulo?", opcoes:["3","4","5","6"], resposta:0, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 3 + 6?", opcoes:["8","9","10","11"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 7 - 4?", opcoes:["2","3","4","5"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 5 + 5?", opcoes:["9","10","11","12"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 6 - 2?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um hexágono?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 4 + 4?", opcoes:["7","8","9","10"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 9 - 5?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 3 x 3?", opcoes:["6","8","9","10"], resposta:2, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 16 ÷ 4?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},
    {pergunta:"Quanto é 2 + 8?", opcoes:["9","10","11","12"], resposta:1, nivel:"basico", classe:"2", disciplina:"matematica"},

    // =====================
    // 2ª Classe - Difícil (20 perguntas)
    // =====================
    {pergunta:"Se João tem 6 balões e dá 2 ao amigo, quantos balões restam?", opcoes:["3","4","5","6"], resposta:1, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Resolva: 6 x 3 = ?", opcoes:["16","18","20","22"], resposta:1, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Se tenho 12 chocolates e como 5, quantos ficam?", opcoes:["6","7","8","9"], resposta:2, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Ana tem 5 balas, João dá 3, quantas balas agora?", opcoes:["7","8","9","10"], resposta:1, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Resolva: 7 + 6 - 4 = ?", opcoes:["8","9","10","11"], resposta:2, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Se Maria tem 8 lápis e dá 3, quantos restam?", opcoes:["4","5","6","7"], resposta:2, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Pedro comprou 3 balões, ganhou 4 mais, quantos no total?", opcoes:["6","7","8","9"], resposta:2, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Resolva: 5 + 4 - 2 = ?", opcoes:["6","7","8","9"], resposta:2, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Se tenho 9 balas e como 3, quantas sobram?", opcoes:["5","6","7","8"], resposta:2, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"João tem 10 maçãs e dá 4, quantas restam?", opcoes:["5","6","7","8"], resposta:2, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Resolva: 2 x 5 + 3 = ?", opcoes:["10","11","12","13"], resposta:1, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Se uma caixa tem 15 lápis e retiro 7, quantos restam?", opcoes:["7","8","9","10"], resposta:1, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Pedro tinha 20 balões, perdeu 5, quantos sobraram?", opcoes:["13","14","15","16"], resposta:2, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Resolva: 8 + 6 - 5 = ?", opcoes:["8","9","10","11"], resposta:1, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Se tenho 3 caixas com 5 balas cada, quantas balas no total?", opcoes:["13","14","15","16"], resposta:2, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"João tem 12 lápis e dá 4 ao amigo, quantos sobram?", opcoes:["6","7","8","9"], resposta:2, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Resolva: 9 - 3 + 2 = ?", opcoes:["7","8","9","10"], resposta:1, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Se Ana tem 7 balas e come 3, quantas sobram?", opcoes:["3","4","5","6"], resposta:1, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Resolva: 5 x 2 - 3 = ?", opcoes:["6","7","8","9"], resposta:1, nivel:"dificil", classe:"2", disciplina:"matematica"},
    {pergunta:"Se tenho 8 lápis e compro 5, quantos agora?", opcoes:["12","13","14","15"], resposta:2, nivel:"dificil", classe:"2", disciplina:"matematica"}

];
// 3ª Classe - Banco de Perguntas
const bancoPerguntas = [

    // =====================
    // 3ª Classe - Básico (20 perguntas)
    // =====================
    {pergunta:"Quanto é 15 ÷ 3?", opcoes:["5","6","4","3"], resposta:0, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 8 + 7?", opcoes:["14","15","16","17"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 9 - 5?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um pentágono?", opcoes:["4","5","6","7"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 6 x 2?", opcoes:["11","12","13","14"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 10 - 4?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 7 + 6?", opcoes:["12","13","14","15"], resposta:3, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um quadrado?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 3 x 4?", opcoes:["11","12","13","14"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 12 ÷ 4?", opcoes:["2","3","4","5"], resposta:2, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 5 + 8?", opcoes:["12","13","14","15"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 14 - 6?", opcoes:["7","8","9","10"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um hexágono?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 9 + 5?", opcoes:["13","14","15","16"], resposta:2, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 8 - 3?", opcoes:["4","5","6","7"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 3 x 3?", opcoes:["6","8","9","10"], resposta:2, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 16 ÷ 4?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 7 + 3?", opcoes:["9","10","11","12"], resposta:1, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quanto é 10 - 2?", opcoes:["7","8","9","10"], resposta:2, nivel:"basico", classe:"3", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um triângulo?", opcoes:["3","4","5","6"], resposta:0, nivel:"basico", classe:"3", disciplina:"matematica"},

    // =====================
    // 3ª Classe - Difícil (20 perguntas)
    // =====================
    {pergunta:"Resolva: 9 x 4 = ?", opcoes:["34","36","38","32"], resposta:1, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Se tenho 20 balas e dou 7, quantas ficam?", opcoes:["12","13","14","15"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Qual é o próximo número da sequência: 2,4,6,?", opcoes:["7","8","9","10"], resposta:1, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"João tem 15 balões e dá 5, quantos restam?", opcoes:["8","9","10","11"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Resolva: 12 ÷ 3 + 4 = ?", opcoes:["7","8","9","10"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Se Ana tem 7 maçãs e compra mais 6, quantas agora?", opcoes:["12","13","14","15"], resposta:1, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Resolva: 8 + 6 - 5 = ?", opcoes:["8","9","10","11"], resposta:1, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Pedro tem 18 balões e perde 4, quantos restam?", opcoes:["12","13","14","15"], resposta:1, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Se tenho 3 caixas com 5 balas cada, quantas balas no total?", opcoes:["12","13","14","15"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Resolva: 7 x 2 - 5 = ?", opcoes:["8","9","10","11"], resposta:1, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Ana tinha 12 lápis, perdeu 5, quantos sobraram?", opcoes:["6","7","8","9"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Resolva: 15 ÷ 5 + 3 = ?", opcoes:["5","6","7","8"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Se João tem 20 balas e come 7, quantas sobram?", opcoes:["12","13","14","15"], resposta:1, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Resolva: 6 x 3 + 2 = ?", opcoes:["19","20","21","22"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Pedro comprou 8 balões e deu 3, quantos restam?", opcoes:["4","5","6","7"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Se tenho 4 caixas com 6 chocolates cada, quantos no total?", opcoes:["20","22","24","26"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Resolva: 9 + 7 - 5 = ?", opcoes:["10","11","12","13"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Se Ana tem 10 lápis e ganha 5, quantos agora?", opcoes:["14","15","16","17"], resposta:1, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Resolva: 8 x 2 - 6 = ?", opcoes:["10","11","12","13"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"},
    {pergunta:"Se tenho 18 balas e como 7, quantas sobram?", opcoes:["10","11","12","13"], resposta:2, nivel:"dificil", classe:"3", disciplina:"matematica"}

];
// 4ª Classe - Banco de Perguntas
const bancoPerguntas = [

    // =====================
    // 4ª Classe - Básico (20 perguntas)
    // =====================
    {pergunta:"25 + 17 = ?", opcoes:["41","42","43","44"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"48 ÷ 6 = ?", opcoes:["7","8","9","10"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 14 - 9?", opcoes:["4","5","6","7"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 3 x 5?", opcoes:["15","16","17","18"], resposta:0, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um hexágono?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 7 + 9?", opcoes:["15","16","17","18"], resposta:3, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 12 - 5?", opcoes:["6","7","8","9"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 4 x 6?", opcoes:["23","24","25","26"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 36 ÷ 6?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um pentágono?", opcoes:["4","5","6","7"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 8 + 7?", opcoes:["14","15","16","17"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 10 - 3?", opcoes:["6","7","8","9"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 5 x 5?", opcoes:["24","25","26","27"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 18 ÷ 3?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um quadrado?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 9 + 6?", opcoes:["14","15","16","17"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 15 - 7?", opcoes:["7","8","9","10"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 7 x 2?", opcoes:["13","14","15","16"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 20 ÷ 4?", opcoes:["4","5","6","7"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},
    {pergunta:"Quanto é 6 + 9?", opcoes:["14","15","16","17"], resposta:1, nivel:"basico", classe:"4", disciplina:"matematica"},

    // =====================
    // 4ª Classe - Difícil (20 perguntas)
    // =====================
    {pergunta:"Se um livro custa 15 AKZ e tenho 50 AKZ, quanto sobra?", opcoes:["30","35","40","45"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Resolva: 36 ÷ 6 =", opcoes:["5","6","7","8"], resposta:1, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Qual é o próximo número: 5,10,15,?", opcoes:["18","19","20","21"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Se tenho 8 caixas com 5 chocolates cada, quantos no total?", opcoes:["38","39","40","41"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Resolva: 12 x 3 - 7 = ?", opcoes:["28","29","30","31"], resposta:1, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"João tem 20 balões e dá 7, quantos restam?", opcoes:["12","13","14","15"], resposta:1, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Resolva: 18 ÷ 3 + 4 = ?", opcoes:["9","10","11","12"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Se Ana tem 15 maçãs e dá 6, quantas restam?", opcoes:["8","9","10","11"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Resolva: 7 x 4 - 9 = ?", opcoes:["18","19","20","21"], resposta:1, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Se tenho 3 caixas com 7 balas cada, quantas balas no total?", opcoes:["19","20","21","22"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"João tinha 25 balas, perdeu 7, quantas restaram?", opcoes:["17","18","19","20"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Resolva: 9 + 12 - 7 = ?", opcoes:["13","14","15","16"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Se Pedro tem 10 lápis e compra 5, quantos agora?", opcoes:["13","14","15","16"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Resolva: 6 x 5 - 8 = ?", opcoes:["20","21","22","23"], resposta:1, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Se Ana tem 12 balas e come 5, quantas sobram?", opcoes:["6","7","8","9"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Resolva: 8 x 3 - 10 = ?", opcoes:["12","13","14","15"], resposta:1, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Se tenho 4 caixas com 6 chocolates cada, quantos no total?", opcoes:["22","23","24","25"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Resolva: 15 ÷ 3 + 6 = ?", opcoes:["10","11","12","13"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Se João tem 18 balas e dá 7, quantas sobram?", opcoes:["10","11","12","13"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"},
    {pergunta:"Resolva: 9 x 2 - 5 = ?", opcoes:["12","13","14","15"], resposta:2, nivel:"dificil", classe:"4", disciplina:"matematica"}

];
// 5ª Classe - Banco de Perguntas
const bancoPerguntas = [

    // =====================
    // 5ª Classe - Básico (20 perguntas)
    // =====================
    {pergunta:"123 + 77 = ?", opcoes:["199","200","201","210"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"144 ÷ 12 = ?", opcoes:["11","12","13","14"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 50 - 25?", opcoes:["24","25","26","27"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 6 x 7?", opcoes:["41","42","43","44"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um octógono?", opcoes:["6","7","8","9"], resposta:2, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 85 + 14?", opcoes:["98","99","100","101"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 60 ÷ 5?", opcoes:["11","12","13","14"], resposta:2, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 30 - 12?", opcoes:["17","18","19","20"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 9 x 6?", opcoes:["52","53","54","55"], resposta:2, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um quadrado?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 75 + 25?", opcoes:["99","100","101","102"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 81 ÷ 9?", opcoes:["8","9","10","11"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 40 - 18?", opcoes:["21","22","23","24"], resposta:2, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 7 x 8?", opcoes:["54","55","56","57"], resposta:2, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um hexágono?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 90 + 10?", opcoes:["99","100","101","102"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 48 ÷ 6?", opcoes:["7","8","9","10"], resposta:2, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 36 - 18?", opcoes:["17","18","19","20"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quanto é 12 x 5?", opcoes:["59","60","61","62"], resposta:1, nivel:"basico", classe:"5", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um triângulo?", opcoes:["3","4","5","6"], resposta:0, nivel:"basico", classe:"5", disciplina:"matematica"},

    // =====================
    // 5ª Classe - Difícil (20 perguntas)
    // =====================
    {pergunta:"Se um caderno custa 35 AKZ e tenho 100 AKZ, quanto sobra?", opcoes:["60","65","70","75"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Resolva: 7 x 8 =", opcoes:["54","55","56","57"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Qual é o próximo número da sequência: 3,6,9,?", opcoes:["10","11","12","13"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Se tenho 5 caixas com 8 balas cada, quantas balas no total?", opcoes:["38","39","40","41"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Resolva: 12 x 4 - 15 = ?", opcoes:["33","34","35","36"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Pedro tinha 20 balões e perdeu 6, quantos restam?", opcoes:["13","14","15","16"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Resolva: 24 ÷ 6 + 5 = ?", opcoes:["8","9","10","11"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Se Ana tem 18 lápis e dá 7, quantos sobram?", opcoes:["10","11","12","13"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Resolva: 9 x 5 - 12 = ?", opcoes:["30","31","32","33"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Se tenho 6 caixas com 7 chocolates cada, quantos no total?", opcoes:["40","41","42","43"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"João tinha 30 balas, perdeu 9, quantas restaram?", opcoes:["20","21","22","23"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Resolva: 15 + 18 - 7 = ?", opcoes:["25","26","27","28"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Se Pedro tem 20 lápis e compra 7, quantos agora?", opcoes:["26","27","28","29"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Resolva: 8 x 6 - 10 = ?", opcoes:["36","37","38","39"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Se Ana tem 14 balas e come 6, quantas sobram?", opcoes:["7","8","9","10"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Resolva: 11 x 3 - 5 = ?", opcoes:["27","28","29","30"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Se tenho 5 caixas com 9 chocolates cada, quantos no total?", opcoes:["43","44","45","46"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Resolva: 18 ÷ 3 + 7 = ?", opcoes:["11","12","13","14"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Se João tem 21 balas e dá 8, quantas sobram?", opcoes:["12","13","14","15"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"},
    {pergunta:"Resolva: 14 x 2 - 9 = ?", opcoes:["18","19","20","21"], resposta:2, nivel:"dificil", classe:"5", disciplina:"matematica"}

];
// 6ª Classe - Banco de Perguntas
const bancoPerguntas = [

    // =====================
    // 6ª Classe - Básico (20 perguntas)
    // =====================
    {pergunta:"250 - 125 = ?", opcoes:["120","125","130","135"], resposta:1, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"15 x 2 = ?", opcoes:["28","29","30","31"], resposta:2, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"48 ÷ 8 = ?", opcoes:["5","6","7","8"], resposta:1, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 17 + 13?", opcoes:["29","30","31","32"], resposta:2, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um decágono?", opcoes:["8","9","10","11"], resposta:2, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 35 + 46?", opcoes:["80","81","82","83"], resposta:1, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 72 ÷ 9?", opcoes:["7","8","9","10"], resposta:2, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 90 - 45?", opcoes:["44","45","46","47"], resposta:1, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 12 x 6?", opcoes:["70","71","72","73"], resposta:2, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um heptágono?", opcoes:["6","7","8","9"], resposta:1, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 55 + 35?", opcoes:["89","90","91","92"], resposta:1, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 81 ÷ 9?", opcoes:["8","9","10","11"], resposta:1, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 65 - 28?", opcoes:["36","37","38","39"], resposta:2, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 9 x 7?", opcoes:["61","62","63","64"], resposta:2, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um quadrado?", opcoes:["3","4","5","6"], resposta:1, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 120 + 80?", opcoes:["199","200","201","202"], resposta:1, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 96 ÷ 12?", opcoes:["7","8","9","10"], resposta:2, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 78 - 33?", opcoes:["44","45","46","47"], resposta:1, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quanto é 11 x 8?", opcoes:["86","87","88","89"], resposta:2, nivel:"basico", classe:"6", disciplina:"matematica"},
    {pergunta:"Quantos lados tem um triângulo?", opcoes:["3","4","5","6"], resposta:0, nivel:"basico", classe:"6", disciplina:"matematica"},

    // =====================
    // 6ª Classe - Difícil (20 perguntas)
    // =====================
    {pergunta:"Resolva: 15 x 12 =", opcoes:["175","180","185","190"], resposta:1, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Se tenho 200 AKZ e gasto 75 AKZ, quanto sobra?", opcoes:["120","125","130","135"], resposta:1, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Qual é o próximo número: 10,20,30,?", opcoes:["35","40","50","45"], resposta:1, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Se tenho 5 caixas com 12 balas cada, quantas balas no total?", opcoes:["58","59","60","61"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Resolva: 18 x 4 - 25 = ?", opcoes:["45","46","47","48"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Se Ana tem 50 maçãs e dá 18, quantas restam?", opcoes:["31","32","33","34"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Resolva: 72 ÷ 8 + 9 = ?", opcoes:["17","18","19","20"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Se João tem 36 lápis e dá 14, quantos restam?", opcoes:["20","21","22","23"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Resolva: 13 x 3 - 7 = ?", opcoes:["31","32","33","34"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Se tenho 6 caixas com 11 chocolates cada, quantos no total?", opcoes:["64","65","66","67"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"João tinha 40 balas, perdeu 15, quantas restaram?", opcoes:["24","25","26","27"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Resolva: 28 + 33 - 14 = ?", opcoes:["46","47","48","49"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Se Pedro tem 25 lápis e compra 13, quantos agora?", opcoes:["37","38","39","40"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Resolva: 17 x 3 - 20 = ?", opcoes:["30","31","32","33"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Se Ana tem 28 balas e come 12, quantas sobram?", opcoes:["15","16","17","18"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Resolva: 14 x 5 - 27 = ?", opcoes:["42","43","44","45"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Se tenho 8 caixas com 9 chocolates cada, quantos no total?", opcoes:["70","71","72","73"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Resolva: 36 ÷ 6 + 14 = ?", opcoes:["19","20","21","22"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Se João tem 45 balas e dá 17, quantas sobram?", opcoes:["27","28","29","30"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"},
    {pergunta:"Resolva: 21 x 2 - 15 = ?", opcoes:["25","26","27","28"], resposta:2, nivel:"dificil", classe:"6", disciplina:"matematica"}

];
