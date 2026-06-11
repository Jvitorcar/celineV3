/* ============================================================================
   CELINE PINTURAS — CONTEÚDO DO SITE  (ARQUIVO PRINCIPAL PARA EDITAR)
   ----------------------------------------------------------------------------
   Aqui ficam TODOS os textos, links, fotos e vídeos do site.
   Você NÃO precisa saber programar. Regras simples:

     • Edite apenas o que está entre "aspas".
     • Nunca apague as aspas, as vírgulas ou os nomes antes dos dois-pontos.
     • Para trocar uma foto: coloque o arquivo na pasta indicada (assets/images/...)
       com o MESMO nome, ou mude o caminho aqui dentro das aspas.
     • Caminhos de foto/vídeo sempre começam com "assets/".

   Dica: se algo quebrar depois de editar, foi quase sempre uma aspa ou vírgula
   apagada sem querer. O GitHub guarda o histórico — dá para voltar atrás.
   ============================================================================ */

window.CONTEUDO = {

  /* ===================== CONTATO (aparece no site todo) ===================== */
  contato: {
    /* Número do WhatsApp: 55 (Brasil) + 42 (DDD) + número, só dígitos. */
    whatsapp: "5542999872929",
    whatsappMensagem: "Olá, Celine! Vim pelo seu site e gostaria de saber mais.",
    instagram: "https://instagram.com/celine.pinturas",
    instagramArroba: "@celine.pinturas",
    instagramCerimonial: "https://instagram.com/celine.p.cerimonial",
    linktree: "https://linktr.ee/celinepinturasboava",
    email: "celinepinturasboava@gmail.com",
    cidade: "Guarapuava · Paraná"
  },

  /* ===================== HERO (primeira tela de boas-vindas) ================ */
  hero: {
    imagem: "assets/images/about/hero.jpg",
    fraseEyebrow: "Artista visual · Guarapuava, PR",
    titulo: "Onde a emoção encontra a tela",
    subtitulo: "Celine Boava — retratos, obras autorais, pintura ao vivo e aulas de pintura a óleo.",
    botaoPrimario: "Solicitar orçamento",
    botaoSecundario: "Ver o ateliê"
  },

  /* ===================== SOBRE A ARTISTA =================================== */
  sobre: {
    imagem: "assets/images/about/retrato.jpg",
    eyebrow: "Sobre a artista",
    titulo: "Celine Boava",
    paragrafos: [
      "Me chamo Celine Cristine Oliveira Boava, artista visual de Guarapuava (PR). Sou graduada em Arte pela UNICENTRO e trabalho com pintura a óleo. Acredito na força das artes integradas — teatro, música, fotografia e performance se entrelaçam de forma orgânica com o que pinto, pois o corpo fala, e a pintura é uma forma de transmitir o que ele sente.",
      "Antes de qualquer imagem, há o corpo: é nele que tudo começa. Quando me permito escutar o que pulsa dentro — um incômodo, uma lembrança, uma intuição — algo se move em direção à pintura. Um processo quase ritualístico, que pede pausa, presença e entrega.",
      "Minhas pinturas, mesmo figurativas, não são respostas fechadas: são convites ao encontro. A obra só se completa no outro, naquele olhar que encontra ali a própria história.",
      "Ensino técnica de pintura para que meus alunos possam traduzir o que sentem e se orgulhar do que pintam. A arte é transformadora."
    ],
    assinatura: "Celine Boava"
  },

  /* ===================== SERVIÇOS (6 cartões) ==============================
     icone: pincel | paleta | alianca | estrela | balao | fogo
     Cada cartão abre o WhatsApp com a "mensagem" pronta abaixo. */
  servicos: [
    { icone: "pincel",  titulo: "Retratos & encomendas", texto: "Retratos e obras criados a partir da sua história, das suas fotos e dos seus momentos mais queridos — em óleo, com presença e emoção.", botao: "Encomendar", mensagem: "Olá, Celine! Gostaria de um orçamento para uma pintura personalizada." },
    { icone: "alianca", titulo: "Pintura ao vivo",       texto: "Levo o cavalete para casamentos e eventos e pinto a cena ao vivo. Ao final, vocês levam para casa uma tela original — muito além de uma fotografia.", botao: "Reservar data", mensagem: "Olá, Celine! Gostaria de saber mais sobre a pintura ao vivo para o meu evento." },
    { icone: "paleta",  titulo: "Aulas & oficinas",      texto: "Aulas e oficinas de pintura a óleo para todos os níveis, mentoria durante a produção da pintura no ritmo de cada aluno.", botao: "Agendar aula", mensagem: "Olá, Celine! Tenho interesse nas aulas de pintura." },
    { icone: "balao",   titulo: "Aulas aprofundadas",    texto: "Voltada para o aprofundamento técnico da pintura. Todo mês, um tema para o desenvolvimento de uma técnica com uma pintura específica. Para maiores de 11 anos.", botao: "Agendar aula", mensagem: "Olá! Gostaria de saber mais sobre as aulas aprofundadas." },
    { icone: "fogo",    titulo: "Cursos intensivos",     texto: "Aulas práticas de poucas horas, com aprofundamento de uma técnica específica (retrato, paisagem ou outro tema). Acontecem em dias distintos do mês e você sai com uma pintura pronta — ideal para quem quer se descobrir na pintura.", botao: "Agendar aula", mensagem: "Olá! Gostaria de saber quando é o próximo curso intensivo." },
    { icone: "estrela", titulo: "Obras autorais",        texto: "Pinturas autorais que investigam o universo simbólico dos palhaços, a vulnerabilidade e a emoção humana. Disponíveis para aquisição.", botao: "Conversar", mensagem: "Olá, Celine! Tenho interesse nas suas obras autorais." }
  ],

  /* ===================== PINTURA AO VIVO ================================== */
  pinturaAoVivo: {
    eyebrow: "Pintura ao vivo · cerimonial",
    titulo: "A obra nascendo diante dos seus convidados",
    texto: "A pintura ao vivo transforma um dos momentos mais especiais da celebração em uma obra de arte original. Antes do evento, faço uma reunião com o casal para entender a história e os sentimentos que serão representados. No dia, monto o cavalete no local e desenvolvo a pintura ao vivo — os convidados acompanham cada etapa e, ao final, o casal recebe uma tela única, criada para eternizar aquele dia.",
    destaques: [
      "Reunião de alinhamento com o casal antes do evento",
      "Pintura criada ao vivo durante a celebração",
      "Tela original entregue ao final",
      "Uma experiência interativa para os convidados",
      "Acompanhe os bastidores em @celine.p.cerimonial"
    ],
    /* Fotos reais de eventos e casamentos (melhores primeiro). */
    galeria: [
      { src: "assets/images/events/evento-01.jpg", alt: "Celine pintando ao vivo durante a cerimônia, com os convidados ao fundo" },
      { src: "assets/images/events/evento-02.jpg", alt: "Pintura ao vivo no cavalete com os noivos no altar ao fundo" },
      { src: "assets/images/events/evento-03.jpg", alt: "Celine pintando a cena do casamento ao vivo" },
      { src: "assets/images/events/evento-04.jpg", alt: "Celine pintando ao vivo no evento Chá Bridgerton" },
      { src: "assets/images/events/evento-05.jpg", alt: "Detalhe da artista pintando ao vivo" },
      { src: "assets/images/events/evento-06.jpg", alt: "Celine apresentando a obra no evento" },
      { src: "assets/images/events/evento-07.jpg", alt: "Celine concentrada na pintura ao vivo" },
      { src: "assets/images/events/evento-08.jpg", alt: "Celine segurando a pintura da xícara e flores" },
      { src: "assets/images/events/evento-09.jpg", alt: "Entrega da tela aos noivos" },
      { src: "assets/images/events/evento-10.jpg", alt: "Registro em preto e branco da pintura ao vivo" }
    ],
    videos: []
  },

  /* ===================== ATELIÊ / OBRAS (com filtros) ===================== */
  atelie: {
    eyebrow: "Ateliê · Obras",
    titulo: "Pinturas que são convites ao encontro",
    texto: "Uma seleção de retratos, obras autorais e paisagens em óleo. Boa parte da minha pesquisa atual investiga o universo simbólico dos palhaços — um corpo entre o riso e a dor, a máscara e a verdade.",
    categorias: [
      { id: "todos",     nome: "Todas" },
      { id: "autorais",  nome: "Autorais" },
      { id: "retratos",  nome: "Retratos" },
      { id: "paisagens", nome: "Paisagens" }
    ],
    obras: [
      { src: "assets/images/portfolio/obra-03.jpg", alt: "Universo dos palhaços — obras autorais emolduradas", categoria: "autorais" },
      { src: "assets/images/portfolio/obra-02.jpg", alt: "Coração — obra autoral em óleo", categoria: "autorais" },
      { src: "assets/images/portfolio/obra-01.jpg", alt: "Retrato em óleo — estudo de figura", categoria: "retratos" },
      { src: "assets/images/portfolio/obra-04.jpg", alt: "Retrato autoral em moldura dourada", categoria: "autorais" },
      { src: "assets/images/portfolio/obra-05.jpg", alt: "Paisagem em óleo", categoria: "paisagens" },
      { src: "assets/images/portfolio/obra-06.jpg", alt: "Xícara de chá, rosas e envelope lacrado — óleo sobre tela", categoria: "autorais" }
    ],
    /* Vídeo: tour pelas obras. tipo "arquivo" (mp4 no projeto) ou "youtube". */
    videos: [
      { tipo: "arquivo", src: "assets/videos/events/arte-na-garagem.mp4", cartaz: "assets/images/portfolio/poster-garagem.jpg", titulo: "Arte na garagem — obras da Celine" }
    ]
  },

  /* ===================== AULAS & OFICINAS ================================= */
  aulas: {
    eyebrow: "Aulas & oficinas",
    titulo: "Aulas de pintura a óleo para todos os níveis",
    texto: "Ensino técnica de pintura para que meus alunos possam, no futuro, traduzir o que sentem e se orgulhar do que pintam. As aulas combinam técnica, prática e desenvolvimento criativo num ambiente acolhedor, valorizando o aprendizado pela experiência — inspirada por educadores como Paulo Freire e Piaget.",
    metodologia: [
      { titulo: "Fundamentos",       texto: "Desenho, cor, luz, composição e observação na pintura a óleo." },
      { titulo: "Prática guiada",    texto: "Acompanhamento individualizado, respeitando o ritmo e os objetivos de cada aluno." },
      { titulo: "Linguagem própria", texto: "Estímulo à autonomia, à criatividade e à construção de um olhar artístico próprio." }
    ],
    publicoAlvo: "Para quem está começando e para quem deseja aprofundar — um espaço dedicado à experimentação e ao crescimento artístico.",
    botao: "Agendar aula",
    acao: "aula",
    fotos: [
      { src: "assets/images/classes/aula-01.jpg", alt: "Celine ensinando teoria das cores com o círculo cromático" },
      { src: "assets/images/classes/aula-02.jpg", alt: "Explicação sobre tintas e pigmentos na oficina" },
      { src: "assets/images/classes/aula-03.jpg", alt: "Celine mostrando uma cartela de cores" },
      { src: "assets/images/classes/aula-04.jpg", alt: "Celine conduzindo a oficina de pintura" },
      { src: "assets/images/classes/aula-05.jpg", alt: "Aula de pintura no ateliê" },
      { src: "assets/images/classes/aula-06.jpg", alt: "Momento da oficina de pintura a óleo" }
    ],
    videos: [
      { tipo: "arquivo", src: "assets/videos/classes/turma.mp4", cartaz: "assets/images/classes/poster-turma.jpg", titulo: "Turma de pintura com a Celine" }
    ]
  },

  /* ===================== GALERIA DOS ALUNOS =============================== */
  alunos: {
    eyebrow: "Galeria dos alunos",
    titulo: "Feito à mão pelos alunos",
    texto: "Trabalhos e momentos das turmas e oficinas. Cada tela carrega a evolução e o olhar de quem pintou.",
    fotos: [
      { src: "assets/images/students/aluno-01.jpg", alt: "Aluna pintando em aula" },
      { src: "assets/images/students/aluno-02.jpg", alt: "Aluna concentrada na pintura" },
      { src: "assets/images/students/aluno-03.jpg", alt: "Aluna trabalhando na tela" },
      { src: "assets/images/students/aluno-04.jpg", alt: "Aluno pintando no ateliê" },
      { src: "assets/images/students/aluno-05.jpg", alt: "Aluna em aula de pintura" },
      { src: "assets/images/students/aluno-06.jpg", alt: "Aluna sorrindo durante a aula" },
      { src: "assets/images/students/aluno-07.jpg", alt: "Aluna pintando com a paleta na mão" },
      { src: "assets/images/students/aluno-08.jpg", alt: "Aluna após a aula de pintura" }
    ]
  },

  /* ===================== PROCESSO CRIATIVO =============================== */
  processo: {
    eyebrow: "Processo criativo",
    titulo: "Do corpo à tela",
    texto: "Cada obra nasce de uma escuta interna e atravessa camadas até virar imagem. Aqui, um pouco dos bastidores.",
    etapas: [
      { titulo: "Escuta",     texto: "Uma emoção, memória ou intuição começa a pedir forma." },
      { titulo: "Estudo",     texto: "Composição, luz e paleta — a teoria das cores em ação." },
      { titulo: "Pintura",    texto: "Camadas de óleo construídas com pausa e presença." },
      { titulo: "Acabamento", texto: "Ajustes finais, secagem e moldura." }
    ],
    fotos: [
      { src: "assets/images/process/processo-01.jpg", alt: "Detalhe das mãos pintando" },
      { src: "assets/images/process/processo-02.jpg", alt: "Estudo e medição da composição na tela" },
      { src: "assets/images/process/processo-03.jpg", alt: "Secagem da tinta na tela" },
      { src: "assets/images/process/processo-04.jpg", alt: "Pincéis e materiais do ateliê" },
      { src: "assets/images/process/processo-05.jpg", alt: "Celine organizando suas obras" }
    ],
    videos: [
      { tipo: "arquivo", src: "assets/videos/process/processo-paisagem.mp4", cartaz: "assets/images/process/poster-paisagem.jpg", titulo: "Pintura de paisagem — pôr do sol (time-lapse)" }
    ]
  },

  /* ===================== DEPOIMENTOS (reais, dos alunos) ================== */
  depoimentos: {
    eyebrow: "Quem já viveu essa experiência",
    titulo: "Depoimentos",
    grupos: [
      { nome: "Alunos", itens: [
        { texto: "Participar da oficina foi um prazer enorme. Consegui desenvolver técnicas novas, conhecer métodos diferentes e me especializar. A Celine é uma ótima professora, paciente e atenciosa. Foi uma honra participar e dividir o espaço com outros artistas.", autor: "Maria Menon" },
        { texto: "Eu tinha receio de fazer, pois não desenho muito bem, mas amei o resultado da minha pintura. Aprendi sobre mistura de cores, preparo da tela e os processos da pintura. A Celine sempre foi muito atenciosa, auxiliando cada um. É um conhecimento que vou carregar comigo.", autor: "Eloize de Oliveira Souza" },
        { texto: "Foi minha segunda vez participando e é incrível fazer algo de que você gosta junto com pessoas de diferentes idades. Aprendi bastante sobre acabamento, me diverti, e a Celine ensina muito bem, sempre nos auxiliando.", autor: "Littiê" },
        { texto: "Sinto que evoluí muito como artista ao longo do curso. Minhas obras refletem as técnicas aprendidas e também minha visão e emoções. Foi uma experiência transformadora que superou minhas expectativas. Obrigada pela dedicação e apoio!", autor: "Adriana Felizardo" },
        { texto: "A oficina de pintura a óleo foi muito interessante. Aprendi sobre as técnicas e sobre a tinta a óleo, além de momentos de socialização com os participantes. Uma ótima experiência, onde produzimos e aprendemos mais sobre essa técnica.", autor: "Vitor Hugo Gjigoski Boeno" }
      ]}
    ]
  },

  /* ===================== PERGUNTAS FREQUENTES ============================= */
  faq: {
    eyebrow: "Dúvidas comuns",
    titulo: "Perguntas frequentes",
    itens: [
      { pergunta: "Como funciona uma encomenda de pintura?", resposta: "Conversamos sobre a ideia, as fotos e o tamanho da tela. Faço um orçamento e, com a aprovação, inicio a obra em óleo, enviando atualizações até a entrega." },
      { pergunta: "Vocês fazem pintura ao vivo em casamentos?", resposta: "Sim! Monto o cavalete no evento e pinto a cena ao vivo. Ao final, a tela original fica com vocês. Consulte disponibilidade pelo WhatsApp." },
      { pergunta: "Preciso ter experiência para fazer aulas?", resposta: "Não. As aulas atendem do iniciante ao avançado, respeitando o ritmo de cada aluno." },
      { pergunta: "Quais materiais são usados nas aulas?", resposta: "Trabalhamos com pintura a óleo. No primeiro contato eu oriento sobre os materiais necessários." },
      { pergunta: "Você atende fora de Guarapuava?", resposta: "Sim, dependendo da data e do tipo de trabalho. Me chame no WhatsApp para combinarmos." },
      { pergunta: "Como compro uma obra autoral?", resposta: "As obras disponíveis podem ser adquiridas diretamente comigo pelo WhatsApp ou Instagram." }
    ]
  },

  /* ===================== RODAPÉ =========================================== */
  rodape: {
    frase: "A obra só se completa no outro.",
    creditoTexto: "Celine Boava · Artista Visual"
  }
};
