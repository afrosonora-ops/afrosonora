export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Guide {
  slug: string;
  /** H1 on the article page. */
  title: string;
  /** <title> tag (keep under 60 chars where possible). */
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  readingTime: string;
  datePublished: string;
  dateModified: string;
  intro: string[];
  sections: GuideSection[];
  conclusion: string[];
}

export const guides: Guide[] = [
  {
    slug: "o-que-e-musica-afro-contemporanea",
    title: "O que é a música afro contemporânea?",
    seoTitle: "O que é a música afro contemporânea? | AfroSonora",
    description:
      "Guia claro sobre música afro contemporânea: origens, géneros, instrumentos, artistas e como esta sonoridade africana e da diáspora conquistou o mundo.",
    excerpt:
      "Origens, características e géneros que definem a música afro contemporânea, de Lagos a Lisboa.",
    category: "Cultura",
    readingTime: "6 min",
    datePublished: "2026-01-12",
    dateModified: "2026-08-16",
    intro: [
      "Música afro contemporânea é o conjunto de estilos musicais criados hoje por artistas africanos e da diáspora africana, combinando raízes tradicionais do continente com produção moderna, influências urbanas e distribuição digital global.",
      "Não é um género único. É um ecossistema: afrobeats nigeriano, amapiano sul-africano, kizomba e afro house angolanos, kuduro, batida portuguesa, funaná cabo-verdiano, afro-soul, afro-trap e muitas fusões que continuam a nascer todos os anos.",
    ],
    sections: [
      {
        heading: "As raízes: da percussão tradicional ao estúdio digital",
        paragraphs: [
          "A base da música afro é rítmica. Padrões de percussão polirrítmicos, chamadas e respostas vocais e escalas ligadas a línguas e tradições locais atravessam séculos de música africana.",
          "A partir dos anos 70, o afrobeat de Fela Kuti juntou essa herança ao jazz, ao funk e a uma mensagem social forte. Décadas depois, a produção digital acessível permitiu que jovens produtores em Lagos, Joanesburgo, Luanda, Praia, Lisboa ou Londres criassem em casa o que antes exigia grandes estúdios.",
        ],
      },
      {
        heading: "Características que definem o som atual",
        bullets: [
          "Ritmo em primeiro plano: a percussão conduz a melodia, e não o contrário.",
          "Mistura de línguas: português, inglês, francês, crioulo, yoruba, lingala e twi convivem na mesma faixa.",
          "Produção híbrida: instrumentos tradicionais amostrados sobre sintetizadores, 808s e log drums.",
          "Cadência dançável: praticamente todos os subgéneros nascem ligados à dança e ao espaço social.",
          "Colaboração constante: features entre continentes são a norma, não a exceção.",
        ],
      },
      {
        heading: "Principais géneros que deve conhecer",
        bullets: [
          "Afrobeats — pop rítmico da África Ocidental, melódico e feito para rádio e festivais.",
          "Amapiano — house sul-africano lento, com log drums profundos e ambientes espaçosos.",
          "Afro house — house eletrónico com percussão e vocais africanos, forte em Angola e África do Sul.",
          "Kizomba e semba — sonoridades angolanas de dança a pares, sensuais e melódicas.",
          "Kuduro e batida — energia rápida e eletrónica entre Luanda e Lisboa.",
          "Funaná, morna e coladeira — o património musical cabo-verdiano em versões modernas.",
          "Afro-soul e afro-R&B — vozes intimistas sobre grooves africanos.",
        ],
      },
      {
        heading: "Porque é que a música afro cresceu tanto na Europa",
        paragraphs: [
          "As comunidades africanas e afrodescendentes em Portugal, França, Países Baixos, Bélgica e Reino Unido criaram um público natural e uma cena viva de festas, coletivos e promotores.",
          "Ao mesmo tempo, as plataformas digitais eliminaram a barreira geográfica: um artista em Luanda pode ser ouvido em Roterdão no dia do lançamento. O que continua a faltar não é audiência, é estrutura, curadoria e ligação entre artistas, promotores e público.",
        ],
      },
      {
        heading: "Como a AfroSonora se encaixa neste movimento",
        paragraphs: [
          "A AfroSonora é uma plataforma europeia dedicada à música afro e à cultura africana. Não aloja ficheiros de música: liga perfis de artistas, eventos, promotores e público, encaminhando quem descobre um artista para as plataformas oficiais onde o pode ouvir e apoiar.",
          "Essa escolha mantém o valor com o artista e torna a descoberta simples: perfil, contexto cultural, agenda de eventos e ligação direta ao trabalho publicado.",
        ],
      },
    ],
    conclusion: [
      "A música afro contemporânea é hoje uma das forças criativas mais influentes do mundo — e continua a expandir-se a partir das suas raízes.",
      "Explore os perfis de músicos na AfroSonora, descubra eventos perto de si e acompanhe uma cena que cresce todos os meses.",
    ],
  },
  {
    slug: "como-descobrir-novos-artistas-afro",
    title: "Como descobrir novos artistas afro em 2026",
    seoTitle: "Como descobrir novos artistas afro em 2026 | AfroSonora",
    description:
      "Métodos práticos para descobrir novos artistas afro em 2026: curadoria humana, eventos, plataformas, rádios comunitárias e comunidades da diáspora.",
    excerpt:
      "Sete formas concretas de encontrar novos nomes da música afro antes de toda a gente.",
    category: "Descoberta",
    readingTime: "5 min",
    datePublished: "2026-02-03",
    dateModified: "2026-08-16",
    intro: [
      "Nunca houve tanta música afro a ser lançada — e nunca foi tão fácil perder-se nela. Os algoritmos tendem a repetir os mesmos nomes grandes, deixando de fora artistas emergentes com trabalho notável.",
      "Este guia reúne métodos que funcionam em 2026 para encontrar novos artistas afro de forma consistente, com atenção especial à cena europeia e lusófona.",
    ],
    sections: [
      {
        heading: "1. Comece pela curadoria humana, não pelo algoritmo",
        paragraphs: [
          "Plataformas com curadoria feita por pessoas que conhecem a cena mostram artistas que ainda não têm números para entrar em playlists automáticas. É aí que estão as descobertas reais.",
          "Na AfroSonora, cada perfil de músico inclui contexto: género, país, percurso e ligações oficiais para ouvir. Navegue a lista de músicos e filtre por estilo ou origem.",
        ],
      },
      {
        heading: "2. Siga eventos e não apenas artistas",
        paragraphs: [
          "Line-ups de festas, showcases e festivais afro são listas de recomendação gratuitas. O artista que abre o concerto hoje é frequentemente o cabeça de cartaz de daqui a dois anos.",
          "Consulte a agenda de eventos da AfroSonora e veja quem está a tocar perto de si.",
        ],
      },
      {
        heading: "3. Explore por género e por região",
        bullets: [
          "Escolha um subgénero (amapiano, afro house, kizomba, batida) e siga-o durante um mês.",
          "Adicione um filtro geográfico: Luanda, Praia, Lagos, Lisboa, Roterdão, Bruxelas.",
          "Repita com um género vizinho — as colaborações levam-no naturalmente a novos nomes.",
        ],
      },
      {
        heading: "4. Use os créditos das faixas",
        paragraphs: [
          "Produtores e compositores são o melhor atalho da indústria. Encontre quem produziu uma faixa de que gosta e ouça o resto do catálogo dessa pessoa: vai encontrar artistas ainda sem visibilidade.",
        ],
      },
      {
        heading: "5. Rádios comunitárias, coletivos e DJ sets",
        paragraphs: [
          "Rádios online, mixtapes e sets de DJs especializados continuam a ser a linha da frente da descoberta. Um set de 60 minutos pode apresentar 25 artistas novos, muitos deles sem promoção formal.",
        ],
      },
      {
        heading: "6. Vá às comunidades da diáspora",
        paragraphs: [
          "Associações culturais, escolas de dança, feiras e festas de bairro sustentam a cena afro na Europa. Quem programa esses espaços conhece talento local muito antes das plataformas.",
        ],
      },
      {
        heading: "7. Construa o hábito de guardar e partilhar",
        bullets: [
          "Guarde imediatamente qualquer nome novo que lhe chame a atenção.",
          "Ouça o EP ou álbum completo, não apenas o single.",
          "Partilhe: para artistas emergentes, uma partilha vale mais do que uma reprodução passiva.",
          "Vá ao concerto — é o apoio com maior impacto direto.",
        ],
      },
    ],
    conclusion: [
      "Descobrir música afro em 2026 é sobretudo uma questão de método: combinar curadoria humana, eventos ao vivo e exploração por género.",
      "Comece agora pela página de músicos da AfroSonora e pela agenda de eventos — e leve consigo pelo menos três nomes novos.",
    ],
  },
  {
    slug: "afrobeat-afropop-diaspora-diferencas",
    title: "Diferença entre Afrobeat, Afrobeats, Afropop e música da diáspora",
    seoTitle: "Afrobeat vs Afrobeats vs Afropop: as diferenças | AfroSonora",
    description:
      "Explicação simples das diferenças entre Afrobeat, Afrobeats, Afropop, amapiano e música da diáspora africana, com exemplos, ritmos e origens.",
    excerpt:
      "Um guia direto para deixar de confundir Afrobeat com Afrobeats — e perceber onde entram Afropop e diáspora.",
    category: "Géneros",
    readingTime: "6 min",
    datePublished: "2026-03-18",
    dateModified: "2026-08-16",
    intro: [
      "Afrobeat e Afrobeats diferem por uma letra e por cerca de cinquenta anos de história. Afropop é um chapéu comercial mais largo, e música da diáspora descreve origem geográfica, não um som específico.",
      "Este guia separa os termos com clareza, para que possa descrever o que ouve com precisão.",
    ],
    sections: [
      {
        heading: "Afrobeat (singular): o género fundador",
        bullets: [
          "Origem: Nigéria e Gana, final dos anos 1960 e 1970.",
          "Criador de referência: Fela Kuti, com Tony Allen na bateria.",
          "Som: bandas grandes, sopros, guitarras em loop, jazz e funk, faixas longas de 10 a 20 minutos.",
          "Conteúdo: letras políticas e de crítica social.",
        ],
      },
      {
        heading: "Afrobeats (plural): o pop africano moderno",
        bullets: [
          "Origem: Lagos e Accra, anos 2000 e 2010, com forte projeção em Londres.",
          "Som: produção digital, faixas de 3 minutos, melodias pop, batida dançável e sedutora.",
          "Objetivo: rádio, streaming, clubes e festivais internacionais.",
          "Nota: é um termo guarda-chuva criado no Reino Unido, não um género com regras rígidas.",
        ],
      },
      {
        heading: "Afropop: o termo comercial abrangente",
        paragraphs: [
          "Afropop descreve qualquer música popular africana com estrutura pop: refrões memoráveis, duração curta e produção acessível. Um tema de afrobeats é normalmente também afropop; o inverso nem sempre é verdade, porque afropop inclui igualmente pop angolano, sul-africano ou queniano com outras bases rítmicas.",
        ],
      },
      {
        heading: "Amapiano, afro house e kizomba: primos próximos",
        bullets: [
          "Amapiano — África do Sul, tempo mais lento, log drums, pianos e atmosferas longas.",
          "Afro house — house eletrónico com percussão africana; forte em Angola, África do Sul e Europa.",
          "Kizomba e semba — Angola; dança a pares, romantismo e cadência marcada.",
          "Kuduro e batida — energia rápida e eletrónica entre Luanda e a periferia de Lisboa.",
        ],
      },
      {
        heading: "Música da diáspora: origem, não estilo",
        paragraphs: [
          "Música da diáspora africana é feita por artistas de ascendência africana fora do continente — em Portugal, França, Reino Unido, Países Baixos, Brasil, Caraíbas ou Estados Unidos.",
          "O termo descreve o percurso do artista e o contexto cultural, não a sonoridade. Inclui batida portuguesa, afro-trap francês, UK afroswing, funk brasileiro de raiz africana e muito mais.",
        ],
      },
      {
        heading: "Resumo rápido",
        bullets: [
          "Afrobeat = género histórico nigeriano, bandas ao vivo, mensagem política.",
          "Afrobeats = pop africano contemporâneo, digital e global.",
          "Afropop = etiqueta comercial ampla para música popular africana.",
          "Amapiano, afro house, kizomba = géneros específicos com identidade própria.",
          "Diáspora = onde o artista está, não como soa.",
        ],
      },
    ],
    conclusion: [
      "Usar o termo certo ajuda artistas, promotores e público a encontrarem-se mais depressa.",
      "Veja como estes géneros aparecem nos perfis de músicos da AfroSonora e descubra artistas em cada um deles.",
    ],
  },
  {
    slug: "onde-ouvir-musica-afro",
    title: "Onde ouvir música afro: as melhores plataformas e formas de descobrir",
    seoTitle: "Onde ouvir música afro: melhores plataformas | AfroSonora",
    description:
      "Comparação prática das melhores formas de ouvir música afro: streaming, rádios, eventos ao vivo e plataformas de descoberta como a AfroSonora.",
    excerpt:
      "Streaming, rádios, eventos e curadoria: onde ouvir música afro e como apoiar quem a cria.",
    category: "Guias",
    readingTime: "5 min",
    datePublished: "2026-04-22",
    dateModified: "2026-08-16",
    intro: [
      "Ouvir música afro é fácil. Ouvir bem — com contexto, variedade e apoio real aos artistas — exige combinar algumas fontes diferentes.",
      "Abaixo, as opções principais, o que cada uma faz melhor e onde entra uma plataforma de descoberta como a AfroSonora.",
    ],
    sections: [
      {
        heading: "Serviços de streaming",
        paragraphs: [
          "Spotify, Apple Music, YouTube Music, Deezer e Audiomack são a base de qualquer consumo diário. Têm catálogo enorme e playlists dedicadas a afrobeats, amapiano, kizomba e afro house.",
          "Limitação: os algoritmos privilegiam catálogo com tração. Artistas emergentes e cenas locais aparecem pouco, a não ser que os procure diretamente.",
        ],
      },
      {
        heading: "YouTube e vídeo",
        paragraphs: [
          "Para música afro, o vídeo é essencial: a coreografia, a moda e a produção visual fazem parte da obra. Muitos lançamentos independentes existem apenas em vídeo antes de chegarem ao streaming.",
        ],
      },
      {
        heading: "Rádios online e mixtapes",
        paragraphs: [
          "Rádios comunitárias e estações digitais especializadas mantêm curadoria humana e mostram artistas fora dos circuitos comerciais. Um bom DJ set continua a ser a melhor introdução a uma cena.",
        ],
      },
      {
        heading: "Eventos ao vivo",
        paragraphs: [
          "Concertos, festas e festivais são a forma mais direta de conhecer artistas e de os apoiar financeiramente. Na Europa há programação afro regular em Lisboa, Roterdão, Bruxelas, Paris e Londres.",
          "Consulte a agenda de eventos da AfroSonora para ver iniciativas, showcases e sessões abertas a novos artistas.",
        ],
      },
      {
        heading: "Plataformas de descoberta e curadoria",
        paragraphs: [
          "A AfroSonora é uma plataforma europeia de descoberta dedicada à música afro e à cultura africana. Não aloja nem reproduz ficheiros de música: reúne perfis de músicos, eventos e promotores, e liga cada artista às plataformas oficiais onde pode ser ouvido.",
          "O objetivo é dar contexto — quem é o artista, de onde vem, o que faz e onde toca — e garantir que a reprodução acontece onde o artista é remunerado.",
        ],
      },
      {
        heading: "Como apoiar realmente os artistas",
        bullets: [
          "Ouça álbuns e EPs completos em vez de apenas singles.",
          "Compre bilhetes e merchandising oficial.",
          "Partilhe o trabalho com contexto: nome, género e onde ouvir.",
          "Siga os perfis oficiais e ative notificações de lançamento.",
        ],
      },
    ],
    conclusion: [
      "A melhor abordagem combina streaming para o dia a dia, curadoria humana para descobrir e eventos ao vivo para apoiar.",
      "Comece pela AfroSonora: explore os músicos, veja a agenda de eventos e leve novos nomes para as suas playlists.",
    ],
  },
];

export const getGuide = (slug?: string) => guides.find((g) => g.slug === slug);
