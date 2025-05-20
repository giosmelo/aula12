export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  github: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description:
      "Plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo. Desenvolvida com Next.js, Node.js e MongoDB.",
    image: "/images/ecommerce.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "https://exemplo.com/ecommerce",
    github: "https://github.com/giovannamelo/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Dashboard Analítico",
    description:
      "Dashboard interativo para visualização de dados de negócios com gráficos personalizáveis e relatórios em tempo real.",
    image: "/images/dashboard.png",
    technologies: ["React", "D3.js", "Express", "PostgreSQL", "Material UI"],
    link: "https://exemplo.com/dashboard",
    github: "https://github.com/giovannamelo/dashboard",
    featured: true,
  },
  {
    id: 3,
    title: "Aplicativo de Gestão de Tarefas",
    description:
      "Aplicativo para gerenciamento de tarefas e projetos com funcionalidades de colaboração em equipe e notificações.",
    image: "/images/taskapp.png",
    technologies: ["React", "Firebase", "Redux", "Styled Components"],
    link: "https://exemplo.com/taskapp",
    github: "https://github.com/giovannamelo/taskapp",
    featured: false,
  },
  {
    id: 4,
    title: "Blog Tecnológico",
    description: "Blog sobre tecnologia e desenvolvimento com sistema de CMS personalizado e otimização para SEO.",
    image: "/images/blog.png",
    technologies: ["Next.js", "Contentful", "Vercel", "Tailwind CSS"],
    link: "https://exemplo.com/techblog",
    github: "https://github.com/giovannamelo/techblog",
    featured: false,
  },
  {
    id: 5,
    title: "API de Serviços Financeiros",
    description:
      "API RESTful para integração de serviços financeiros com autenticação, autorização e documentação completa.",
    image: "/images/api.png",
    technologies: ["Node.js", "Express", "JWT", "MongoDB", "Swagger"],
    link: "https://exemplo.com/financeapi",
    github: "https://github.com/giovannamelo/financeapi",
    featured: false,
  },
  {
    id: 6,
    title: "Aplicativo de Clima",
    description:
      "Aplicativo de previsão do tempo com geolocalização e visualização de dados meteorológicos em tempo real.",
    image: "/images/weather.png",
    technologies: ["React", "OpenWeather API", "Leaflet", "Axios"],
    link: "https://exemplo.com/weatherapp",
    github: "https://github.com/giovannamelo/weatherapp",
    featured: false,
  },
]
