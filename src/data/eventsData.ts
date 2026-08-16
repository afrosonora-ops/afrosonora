import eventSpotlight from "@/assets/event-spotlight.webp";
import eventLiveSessions from "@/assets/event-live-sessions.webp";
import eventMusicClip from "@/assets/event-music-clip.webp";
import eventCulturalExchange from "@/assets/event-cultural-exchange.webp";
import eventProducersDesk from "@/assets/event-producers-desk.webp";
import eventMonthlyDrop from "@/assets/event-monthly-drop.webp";
import eventVideoSpotlight from "@/assets/event-video-spotlight.webp";
import eventFanCollab from "@/assets/event-fan-collab.webp";
import eventEventPrep from "@/assets/event-event-prep.webp";

import eventSpotlightSm from "@/assets/event-spotlight-640.webp";
import eventLiveSessionsSm from "@/assets/event-live-sessions-640.webp";
import eventMusicClipSm from "@/assets/event-music-clip-640.webp";
import eventCulturalExchangeSm from "@/assets/event-cultural-exchange-640.webp";
import eventProducersDeskSm from "@/assets/event-producers-desk-640.webp";
import eventMonthlyDropSm from "@/assets/event-monthly-drop-640.webp";
import eventVideoSpotlightSm from "@/assets/event-video-spotlight-640.webp";
import eventFanCollabSm from "@/assets/event-fan-collab-640.webp";
import eventEventPrepSm from "@/assets/event-event-prep-640.webp";

export interface StaticEvent {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  imageSmall: string;
  emailSubject: string;
  intro: string;
  sections: { heading: string; content: string }[];
  howToParticipate: string[];
  buttonLabel: string;
}

export const staticEvents: StaticEvent[] = [
  {
    slug: "afrosonora-spotlight",
    title: "AfroSonora Spotlight – Envio de Maquetes",
    shortDescription: "Envia as tuas maquetes, demos ou músicas originais e conquista destaque na comunidade AFROSONORA.",
    image: eventSpotlight,
    imageSmall: eventSpotlightSm,
    emailSubject: "Participação – AfroSonora Spotlight",
    intro: "O AfroSonora Spotlight é uma iniciativa dedicada à descoberta de novos talentos. Este evento permite que artistas emergentes enviem maquetes, demos ou músicas originais, que poderão ser analisadas e destacadas pela equipa AFROSONORA.\n\nO objetivo é dar visibilidade a artistas com potencial e apresentar novos sons ao público europeu.",
    sections: [
      {
        heading: "Em que consiste",
        content: "Durante o período de submissão, os artistas podem enviar uma ou mais maquetes musicais.\nA equipa AFROSONORA irá ouvir todas as submissões e poderá selecionar algumas para:\n\n🎵 Destaque nas redes sociais da AFROSONORA\n📺 Divulgação no canal oficial YouTube\n📝 Possível inclusão em conteúdos editoriais ou playlists\n🎤 Possível convite para outras iniciativas da plataforma\n\nEste evento é uma excelente oportunidade para artistas mostrarem o seu estilo musical e começarem a ser conhecidos na comunidade AFROSONORA."
      }
    ],
    howToParticipate: [
      "Preparar a tua maquete ou música original.",
      "Enviar o ficheiro ou link da música.",
      "Indicar no email: Nome artístico, País ou cidade, Género musical, Breve apresentação do artista."
    ],
    buttonLabel: "Participar no Evento"
  },
  {
    slug: "afrosonora-live-sessions",
    title: "AfroSonora Live Sessions",
    shortDescription: "Apresenta performances musicais ao vivo ou gravadas e promove o teu trabalho para uma audiência internacional.",
    image: eventLiveSessions,
    imageSmall: eventLiveSessionsSm,
    emailSubject: "Participação – AfroSonora Live Sessions",
    intro: "As AfroSonora Live Sessions são eventos digitais onde artistas podem apresentar performances musicais ao vivo ou gravadas, promovendo o seu trabalho para uma audiência internacional.\n\nEstas sessões permitem criar uma ligação direta entre artistas e público.",
    sections: [
      {
        heading: "Em que consiste",
        content: "Os artistas selecionados poderão:\n\n🎤 Apresentar uma performance musical ao vivo ou gravada\n💬 Falar brevemente sobre a sua música e cultura\n🎵 Apresentar novos projetos ou lançamentos\n\nAs sessões poderão ser transmitidas através de:\n\n📺 YouTube AFROSONORA\n📱 Redes sociais da plataforma\n\nO conteúdo ficará posteriormente disponível online, aumentando a visibilidade do artista."
      }
    ],
    howToParticipate: [
      "Vídeo ou gravação de performance musical",
      "Ou link de vídeo de apresentação",
      "Breve descrição do artista e da música"
    ],
    buttonLabel: "Participar nas Live Sessions"
  },
  {
    slug: "music-clip-challenge",
    title: "AfroSonora Music Clip Challenge",
    shortDescription: "Transforma as tuas músicas promissoras em videoclipes e conteúdos visuais profissionais.",
    image: eventMusicClip,
    imageSmall: eventMusicClipSm,
    emailSubject: "Participação – Music Clip Challenge",
    intro: "O Music Clip Challenge é uma iniciativa criada para transformar músicas promissoras em conteúdos visuais e videoclipes, ajudando os artistas a promover o seu trabalho de forma profissional.",
    sections: [
      {
        heading: "Em que consiste",
        content: "Os artistas enviam uma música original e a equipa AFROSONORA seleciona algumas faixas para:\n\n🎬 Produção de videoclipe\n📝 Criação de lyric video\n📢 Promoção nas redes sociais\n📺 Divulgação no canal YouTube AFROSONORA\n\nEste evento pretende ajudar artistas que ainda não têm recursos para produzir conteúdos visuais profissionais."
      }
    ],
    howToParticipate: [
      "Música original",
      "Breve apresentação do artista",
      "Ideia ou conceito para o vídeo (opcional)"
    ],
    buttonLabel: "Participar no Music Clip Challenge"
  },
  {
    slug: "cultural-exchange",
    title: "AfroSonora Cultural Exchange",
    shortDescription: "Partilha ritmos, tradições, instrumentos e expressões artísticas da rica cultura africana.",
    image: eventCulturalExchange,
    imageSmall: eventCulturalExchangeSm,
    emailSubject: "Participação – Cultural Exchange",
    intro: "O Cultural Exchange promove a diversidade cultural africana, incentivando artistas a partilhar ritmos, tradições, instrumentos e expressões artísticas.\n\nEste evento tem como objetivo mostrar a riqueza cultural africana ao público internacional.",
    sections: [
      {
        heading: "Em que consiste",
        content: "Os artistas podem enviar:\n\n🎵 Vídeos musicais\n🎭 Performances culturais\n💃 Dança tradicional\n🎸 Demonstrações de instrumentos africanos\n\nOs conteúdos selecionados poderão ser transformados em vídeos culturais e educativos, divulgados nas plataformas da AFROSONORA."
      }
    ],
    howToParticipate: [
      "Vídeo curto (1 a 3 minutos)",
      "Breve explicação da tradição ou estilo apresentado",
      "Informação do artista"
    ],
    buttonLabel: "Participar no Cultural Exchange"
  },
  {
    slug: "producers-desk",
    title: "AfroSonora Producer's Desk",
    shortDescription: "Colabora com produtores musicais e cria novas oportunidades criativas para os teus projetos.",
    image: eventProducersDesk,
    imageSmall: eventProducersDeskSm,
    emailSubject: "Participação – Producer's Desk",
    intro: "O Producer's Desk foi criado para incentivar colaborações entre artistas e produtores musicais, criando novas oportunidades criativas.",
    sections: [
      {
        heading: "Em que consiste",
        content: "Os artistas podem enviar:\n\n🎵 Faixas instrumentais\n🥁 Batidas\n🎶 Músicas em desenvolvimento\n\nProdutores parceiros poderão selecionar alguns projetos para:\n\n🔄 Remix\n🤝 Produção conjunta\n🎧 Desenvolvimento musical\n\nEste evento promove colaborações criativas e novas produções musicais dentro da comunidade AFROSONORA."
      }
    ],
    howToParticipate: [
      "Música ou instrumental",
      "Descrição do projeto",
      "Indicação se procura colaboração ou produção"
    ],
    buttonLabel: "Participar no Producer's Desk"
  },
  {
    slug: "monthly-drop",
    title: "AfroSonora Monthly Drop",
    shortDescription: "Evento mensal de lançamento musical que destaca novas músicas de artistas da comunidade.",
    image: eventMonthlyDrop,
    imageSmall: eventMonthlyDropSm,
    emailSubject: "Participação – Monthly Drop",
    intro: "O Monthly Drop é um evento mensal de lançamento musical que destaca novas músicas de artistas da comunidade AFROSONORA.",
    sections: [
      {
        heading: "Em que consiste",
        content: "A cada mês poderão ser selecionadas novas músicas para:\n\n📢 Destaque nas redes sociais\n📺 Divulgação no YouTube\n🌍 Promoção na comunidade AFROSONORA\n\nEste evento ajuda artistas a lançar novas músicas e alcançar novas audiências."
      }
    ],
    howToParticipate: [
      "Música original",
      "Nome artístico",
      "Breve descrição da música"
    ],
    buttonLabel: "Participar no Monthly Drop"
  },
  {
    slug: "video-spotlight",
    title: "AfroSonora Video Spotlight",
    shortDescription: "Destaca as tuas performances musicais e artísticas em vídeo e ganha visibilidade.",
    image: eventVideoSpotlight,
    imageSmall: eventVideoSpotlightSm,
    emailSubject: "Participação – Video Spotlight",
    intro: "O Video Spotlight é um evento que destaca performances musicais e artísticas em vídeo, dando visibilidade a talentos criativos.",
    sections: [
      {
        heading: "Em que consiste",
        content: "Os artistas podem enviar:\n\n🎥 Vídeos de performance\n💃 Coreografias\n🎤 Interpretações musicais\n\nOs melhores vídeos poderão ser incluídos em compilações mensais promovidas pela AFROSONORA."
      }
    ],
    howToParticipate: [
      "Vídeo da performance",
      "Nome artístico",
      "Informação do artista"
    ],
    buttonLabel: "Participar no Video Spotlight"
  },
  {
    slug: "fan-collaboration",
    title: "AfroSonora Fan Collaboration",
    shortDescription: "Aproxima artistas e fãs através de projetos musicais colaborativos e criativos.",
    image: eventFanCollab,
    imageSmall: eventFanCollabSm,
    emailSubject: "Participação – Fan Collaboration",
    intro: "O Fan Collaboration é um evento que aproxima artistas e fãs, criando projetos musicais colaborativos.",
    sections: [
      {
        heading: "Em que consiste",
        content: "Fãs e criadores podem enviar:\n\n🎤 Pequenos vocais\n🎵 Samples\n💡 Ideias criativas\n\nEsses conteúdos poderão ser utilizados por artistas em novas músicas ou projetos especiais."
      }
    ],
    howToParticipate: [
      "Contributo criativo",
      "Nome",
      "Breve descrição da ideia"
    ],
    buttonLabel: "Participar no Fan Collaboration"
  },
  {
    slug: "event-prep",
    title: "AfroSonora Event Prep – Envie a Sua Música",
    shortDescription: "Submete músicas que poderão ser consideradas para eventos futuros da AFROSONORA.",
    image: eventEventPrep,
    imageSmall: eventEventPrepSm,
    emailSubject: "Participação – Event Prep",
    intro: "O Event Prep é uma oportunidade para artistas submeterem músicas que poderão ser consideradas para eventos futuros da AFROSONORA.",
    sections: [
      {
        heading: "Em que consiste",
        content: "As músicas enviadas poderão ser analisadas para:\n\n🎤 Eventos ao vivo\n🎵 Showcases\n📢 Conteúdos promocionais\n🎶 Produções futuras\n\nEste evento funciona como porta de entrada para iniciativas maiores da plataforma."
      }
    ],
    howToParticipate: [
      "Música original",
      "Nome artístico",
      "Breve apresentação"
    ],
    buttonLabel: "Participar no Event Prep"
  }
];
