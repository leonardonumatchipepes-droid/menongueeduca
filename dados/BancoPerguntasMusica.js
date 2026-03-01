// BancoPerguntasMusica.js
// Perguntas de Edição Musical para Menongue Educa

const BancoPerguntasMusica = [
  // ------------------- FÁCEIS (20) -------------------
  { pergunta: "Qual destes é um instrumento de corda?", opcoes: ["Violão", "Bateria", "Flauta"], correta: 0, disciplina: "Edição Musical", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Qual destes instrumentos se toca com baquetas?", opcoes: ["Bateria", "Piano", "Violino"], correta: 0, disciplina: "Edição Musical", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Qual é a nota que vem depois de Dó?", opcoes: ["Ré", "Mi", "Fá", "Sol"], correta: 0, disciplina: "Edição Musical", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Qual destes instrumentos se assopra para produzir som?", opcoes: ["Flauta", "Violão", "Bateria"], correta: 0, disciplina: "Edição Musical", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Qual é o ritmo mais rápido?", opcoes: ["Allegro", "Lento", "Adagio"], correta: 0, disciplina: "Edição Musical", grupoClasse: "1–2", nivel: "fácil" },
  { pergunta: "Qual destes é um instrumento de percussão?", opcoes: ["Tambor", "Violino", "Piano"], correta: 0, disciplina: "Edição Musical", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Qual é a nota que vem depois de Mi?", opcoes: ["Fá", "Sol", "Lá", "Si"], correta: 0, disciplina: "Edição Musical", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Qual destes instrumentos tem teclas?", opcoes: ["Piano", "Tambor", "Guitarra"], correta: 0, disciplina: "Edição Musical", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "O que usamos para afinar um instrumento?", opcoes: ["Afinador", "Baquetas", "Palheta"], correta: 0, disciplina: "Edição Musical", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Qual instrumento é tocado com palhetas?", opcoes: ["Guitarra", "Bateria", "Flauta"], correta: 0, disciplina: "Edição Musical", grupoClasse: "3–4", nivel: "fácil" },
  { pergunta: "Qual é a nota que vem depois de Sol?", opcoes: ["Lá", "Si", "Dó"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual destes instrumentos é típico em bandas?", opcoes: ["Bateria", "Viola", "Harpa"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é o símbolo que indica pausa na música?", opcoes: ["Pausa", "Clave de Sol", "Nota"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual destes instrumentos é de sopro?", opcoes: ["Trompete", "Violão", "Piano"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é o ritmo mais lento?", opcoes: ["Lento", "Allegro", "Andante"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual destes instrumentos é de corda friccionada?", opcoes: ["Violino", "Guitarra", "Bateria"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é a nota que vem depois de Si?", opcoes: ["Dó", "Ré", "Mi"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "O que usamos para escrever música?", opcoes: ["Partitura", "Caderno", "Palheta"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual destes instrumentos é de sopro de madeira?", opcoes: ["Flauta", "Trompete", "Tímpano"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "fácil" },
  { pergunta: "Qual é a nota que vem depois de Fá?", opcoes: ["Sol", "Lá", "Si"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "fácil" },

  // ------------------- DIFÍCEIS (10) -------------------
  { pergunta: "Qual destes instrumentos é típico da música tradicional angolana?", opcoes: ["Marimba", "Saxofone", "Piano"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Quem é um famoso músico angolano de semba?", opcoes: ["Bonga", "Mozart", "Beethoven"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Qual ritmo angolano influencia o kuduro?", opcoes: ["Semba", "Fado", "Samba"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Qual instrumento é usado no funaná?", opcoes: ["Gaita de fole", "Guitarra elétrica", "Bateria"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Quem é conhecido como o 'rei do semba' em Angola?", opcoes: ["Bonga", "Paulo Flores", "Yola Semedo"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Qual destes instrumentos é usado em orquestras tradicionais angolanas?", opcoes: ["Marimba", "Saxofone", "Bateria"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "O kuduro surgiu em qual década?", opcoes: ["1990", "1980", "2000"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Qual destes instrumentos de percussão é usado em ritmos angolanos?", opcoes: ["Dikanza", "Tamborim", "Conga"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Quem popularizou o kizomba em Angola?", opcoes: ["Paulo Flores", "Bonga", "Yola Semedo"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "difícil" },
  { pergunta: "Qual é a origem do semba?", opcoes: ["Angola", "Brasil", "Cabo Verde"], correta: 0, disciplina: "Edição Musical", grupoClasse: "5–6", nivel: "difícil" }
];

export default BancoPerguntasMusica;
