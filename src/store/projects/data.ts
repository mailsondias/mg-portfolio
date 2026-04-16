import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: 2938764,
    slug: "camara-dos-deputados",
    title: "Câmara dos Deputados",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    category: {
      name: "Web Application",
      slug: "web-application",
    },
    images: {
      thumbnail:
        "/images/projects/metropoles/thumb.png",
      project:
        "/images/projects/metropoles/project.png",
    },
    stack: ["React.JS", "Next.JS", "Tailwind"],
    featured: true,
    links: [],
    related: [
      {
        slug: "eleicoes-metropoles",
        title: "Eleições Municipais - Metrópoles",
      },
      {
        slug: "eleicoes-metropoles",
        title: "Eleições Municipais - Metrópoles",
      },
      {
        slug: "eleicoes-metropoles",
        title: "Eleições Municipais - Metrópoles",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 3402,
    slug: "eleicoes-metropoles",
    title: "Eleições Municipais - Metrópoles",
    description:
      "Application developed for real-time monitoring of the 2024 municipal elections. The application fetches updates from the federal government, Brazil's Superior Electoral Court, via REST API at second intervals. It features server-side rendering and client-side hydration.",
    category: {
      name: "Web Application",
      slug: "web-application",
    },
    images: {
      thumbnail:
        "/images/projects/metropoles/thumb.png",
      project:
        "/images/projects/metropoles/project.png",
    },
    stack: ["React.JS", "Next.JS", "Tailwind"],
    featured: true,
    links: [
      {
        url: "https://eleicoes.metropoles.com/2024/resultado-das-eleicoes",
        name: "open project",
      },
    ],
    related: [
      {
        slug: "login-logistica",
        title: "Log-in Logística",
      },
      {
        slug: "mercado-bitcoin",
        title: "Mercado Bitcoin",
      },
      {
        slug: "singulare",
        title: "Singulare",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 9823,
    slug: "login-logistica",
    title: "Log-in Logística",
    description:
      "SPA developed to facilitate the exchange of documents between Log-in and its suppliers with control of ships, docking, containers, etc. The project was made in Next with TypeScript and Node on the server side with NestJS. I worked from prototyping with the client to development, where I could apply best practices of UX UI and workflows.",
    category: {
      name: "Web Application",
      slug: "web-application",
    },
    images: {
      thumbnail:
        "/images/projects/login-logistica/thumb.png",
      project:
        "/images/projects/login-logistica/project.png",
    },
    stack: ["React.JS", "Next.JS", "TypeScript", "Styled-Component", "Tailwind"],
    featured: true,
    links: [],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 1230,
    slug: "mercado-bitcoin",
    title: "Mercado Bitcoin",
    description:
      "In my squad, I was responsible for the web part to execute proposals offered by stakeholders where my assignments were: new Asset Tokenization session; new features on the client platform and new approaches on the MB intranet.",
    category: {
      name: "Web Application",
      slug: "web-application",
    },
    images: {
      thumbnail:
        "/images/projects/mercado-bitcoin/thumb.png",
      project:
        "/images/projects/mercado-bitcoin/project.png",
    },
    stack: ["Vue.JS", "Composition API", "Script Setup", "Node", "Cypress"],
    featured: true,
    links: [
      {
        url: "https://www.mercadobitcoin.com.br/",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 5236,
    slug: "singulare",
    title: "Singulare",
    description:
      "The Singulare app it's a new product b2b for control ballast check and monitoring invoices connected for national registrars from stock exchange.",
    category: {
      name: "Web Application",
      slug: "web-application",
    },
    images: {
      thumbnail:
        "/images/projects/singulare/thumb.jpeg",
      project:
        "/images/projects/singulare/project.png",
    },
    stack: ["React.JS", "Vue.JS", "Vuex", "ApexCharts"],
    featured: true,
    links: [],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 12309328744,
    slug: "fatal-model",
    title: "Fatal Model",
    description:
      "Fatal Model it's a largest product from your niche from Brazil having a half billion of access per month. A very polite company who respect differences and open opportunities for all. This product provide ads help for advertisers connect with more clients following the Brazilian laws. ",
    category: {
      name: "Web Application",
      slug: "web-application",
    },
    images: {
      thumbnail:
        "/images/projects/fatal-model/thumb.png",
      project:
        "/images/projects/fatal-model/project.png",
    },
    stack: ["Vue.JS", "Nuxt.JS", "TypeScript", "Tailwind", "Jest", "Storybook"],
    featured: false,
    links: [
      {
        url: "https://fatalmodel.com.br/",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 1235,
    slug: "aifs",
    title: "Australian Institute of Families Study",
    description:
      "Official Portal of the Government of the Australia. It provide Research to inform government policy and family services. The Government share your news in a blog post for many specified content helping and caring your people.",
    category: {
      name: "Website",
      slug: "website",
    },
    images: {
      thumbnail:
        "/images/projects/aifs/thumb.png",
      project:
        "/images/projects/aifs/project.png",
    },
    stack: ["Gulp", "jQuery", "SASS", "HTML"],
    featured: false,
    links: [
      {
        url: "https://aifs.gov.au/",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 1236,
    slug: "carro-certo",
    title: "Carro Certo",
    description:
      "The Carro Certo app connects the stock of several used car stores to each other, allowing the entrepreneur to serve his customers even if he does not have the vehicle he is looking for in his stock.",
    category: {
      name: "Web Application",
      slug: "web-application",
    },
    images: {
      thumbnail:
        "/images/projects/carro-certo/thumb.png",
      project:
        "/images/projects/carro-certo/project.png",
    },
    stack: ["Vue.JS", "Vuetify", "Firebase"],
    featured: false,
    links: [
      {
        url: "https://app-carro-certo.web.app/",
        name: "open web project",
      },
      {
        url: "https://app-avaliacao-certa.web.app/",
        name: "open mobile project",
      },
      {
        url: "https://www.figma.com/file/1L81WDi1JUGt8b3ETwDETy/Carro-Certo?node-id=2405%3A345&mode=dev",
        name: "figma prototype",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 1237,
    slug: "trendt",
    title: "Trendt",
    description:
      "E-commerce for a new custom product clothers made in Shopify plataform.",
    category: {
      name: "Website",
      slug: "website",
    },
    images: {
      thumbnail:
        "/images/projects/trendt/thumb.png",
      project:
        "/images/projects/trendt/project.png",
    },
    stack: ["Gulp", "SASS", "jQuery", "HTML", "Shopify"],
    featured: false,
    links: [
      {
        url: "https://www.trendt.com.br/",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 1241,
    slug: "grazzis-green-goodies",
    title: "Grazzis Green Goodies",
    category: {
      name: "Website",
      slug: "website",
    },
    images: {
      thumbnail:
        "/images/projects/grazzis/thumb.png",
      project:
        "/images/projects/grazzis/project.png",
    },
    stack: ["Gulp", "SASS", "jQuery", "HTML", "WordPress", "PHP"],
    featured: false,
    links: [
      {
        url: "https://betainterativa.com/jobs/grazzis/",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 1239,
    slug: "agencia-brasilia",
    title: "Agência Brasília",
    description:
      "Official News Portal of the Government of the Federal District (capital of Brazil). Through the portal, the government posts news, announcements, important data, makes the Governor's public agenda available and other relevant information that the population can access via the website or native apps for iOS and Android.",
    category: {
      name: "Website",
      slug: "website",
    },
    images: {
      thumbnail:
        "/images/projects/agencia-brasilia/thumb.png",
      project:
        "/images/projects/agencia-brasilia/project.png",
    },
    stack: ["Gulp", "SASS", "jQuery", "HTML", "WordPress", "PHP"],
    featured: false,
    links: [
      {
        url: "https://www.agenciabrasilia.df.gov.br/",
        name: "open project",
      },
      {
        url: "https://www.figma.com/proto/xoWunvJDHjwrU2pGhqdpW9/Portal-de-Not%C3%ADcias---Ag.-Bras%C3%ADlia?node-id=1%3A2&starting-point-node-id=1%3A2&scaling=scale-down-width",
        name: "figma prototype",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 1238,
    slug: "kipling",
    title: "Kipling",
    description: "",
    category: {
      name: "Website",
      slug: "website",
    },
    images: {
      thumbnail:
        "/images/projects/kipling/thumb.png",
      project:
        "/images/projects/kipling/project.png",
    },
    stack: ["Gulp", "SASS", "jQuery", "HTML"],
    featured: false,
    links: [
      {
        url: "https://betainterativa.com/jobs/kipling/",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 1242,
    slug: "oma-japanese-food",
    title: "Oma Japanese Food",
    description: "",
    category: {
      name: "Website",
      slug: "website",
    },
    images: {
      thumbnail:
        "/images/projects/oma/thumb.png",
      project:
        "/images/projects/oma/project.png",
    },
    stack: ["Gulp", "SASS", "jQuery", "HTML"],
    featured: false,
    links: [],
    reactions: {
      liked: 0,
    },
  },
  {
  	id: 1252,
  	slug: "jeep-via-motors",
  	title: "Jeep Via Motors",
  	description: "",
  	category: {
  		name: "Website",
  		slug: "website",
  	},
  	images: {
  		thumbnail:
  			"https://firebasestorage.googleapis.com/v0/b/react-portoflio.appspot.com/o/project%2Fjeep%2Fjeep.png?alt=media&token=4579bc9d-4cd6-4f72-930f-851ee6734d46",
  		project: "",
  	},
  	stack: ["Gulp", "SASS", "jQuery", "HTML"],
  	featured: false,
  	links: [
  		{
  			url: "https://betainterativa.com/jobs/grazzis/",
  			name: "open project",
  		},
  	],
  	reactions: {
  		liked: 0,
  	},
  },
  {
    id: 12509,
    slug: "h2bet",
    title: "H2Bet",
    description: "",
    category: {
      name: "Web Application",
      slug: "web-application",
    },
    images: {
      thumbnail:
        "/images/projects/h2bet/thumb.png",
      project:
        "/images/projects/h2bet/project.png",
    },
    stack: ["React.JS", "Next.JS", "Tailwind"],
    featured: true,
    links: [
      {
        url: "https://www.h2.bet.br/",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 87645,
    slug: "Movooh App",
    title: "Movooh App",
    description: "",
    category: {
      name: "Web Application",
      slug: "web-application",
    },
    images: {
      thumbnail:
        "/images/projects/movooh/thumb.png",
      project:
        "/images/projects/movooh/project.png",
    },
    stack: ["React.JS", "Next.JS", "Tailwind"],
    featured: true,
    links: [
      {
        url: "#this",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 349028,
    slug: "Gama",
    title: "gama",
    description: "",
    category: {
      name: "Website",
      slug: "website",
    },
    images: {
      thumbnail:
        "/images/projects/gama/thumb.png",
      project:
        "/images/projects/gama/project.png",
    },
    stack: ["HTML", "CSS", "JavaScript", "Shopify"],
    featured: false,
    links: [
      {
        url: "https://www.h2.bet.br/",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 4876,
    slug: "Gama Oficial",
    title: "gama",
    description: "",
    category: {
      name: "Website",
      slug: "website",
    },
    images: {
      thumbnail:
        "/images/projects/gama/thumb.png",
      project:
        "/images/projects/gama/project.png",
    },
    stack: ["HTML", "CSS", "JavaScript", "Shopify"],
    featured: false,
    links: [
      {
        url: "https://www.h2.bet.br/",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 8923746,
    slug: "Observatório de Família e Juventude",
    title: "gdf-observatorio-familia-juventude",
    description: "",
    category: {
      name: "Website",
      slug: "website",
    },
    images: {
      thumbnail:
        "/images/projects/gdf/observatorio-familia-juventude/thumb.png",
      project:
        "/images/projects/gdf/observatorio-familia-juventude/project.png",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    links: [
      {
        url: "https://gdf-observatorio-familia-juventude.vercel.app/",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
  {
    id: 344421,
    slug: "GDF foi lá e fez",
    title: "gdf-faz",
    description: "",
    category: {
      name: "Website",
      slug: "website",
    },
    images: {
      thumbnail:
        "/images/projects/gdf/faz/thumb.png",
      project:
        "/images/projects/gdf/faz/project.png",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    links: [
      {
        url: "https://gdf-faz.vercel.app/",
        name: "open project",
      },
    ],
    reactions: {
      liked: 0,
    },
  },
];
