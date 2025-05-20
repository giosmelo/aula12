export interface ProfileData {
  name: string
  title: string
  bio: string
  shortBio: string
  email: string
  phone: string
  location: string
  socialLinks: {
    github: string
    linkedin: string
    twitter: string
  }
  skills: {
    category: string
    items: string[]
  }[]
  education: {
    degree: string
    institution: string
    year: string
  }[]
  experience: {
    position: string
    company: string
    period: string
    description: string
  }[]
}

export const profileData: ProfileData = {
  name: "Giovanna Melo",
  title: "Desenvolvedora Full Stack",
  shortBio: "Criando soluções web inovadoras com foco em experiência do usuário e código limpo.",
  bio: "Sou uma desenvolvedora full stack apaixonada por criar aplicações web modernas e intuitivas. Com mais de 5 anos de experiência no desenvolvimento de soluções digitais, combino habilidades técnicas sólidas com uma abordagem centrada no usuário. Especializada em React, Node.js e arquiteturas modernas, busco constantemente aprender novas tecnologias e aprimorar minhas habilidades para entregar produtos de alta qualidade.",
  email: "gigiovannajs@exemplo.com",
  phone: "(11) 98765-4321",
  location: "São Paulo, SP",
  socialLinks: {
    github: "https://github.com/giovannamelo",
    linkedin: "https://linkedin.com/in/giovannamelo",
    twitter: "https://twitter.com/giovannamelo",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "JavaScript"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    },
    {
      category: "Ferramentas",
      items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma"],
    },
  ],
  education: [
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade de São Paulo",
      year: "2018",
    },
    {
      degree: "Especialização em Desenvolvimento Web",
      institution: "Digital House",
      year: "2019",
    },
  ],
  experience: [
    {
      position: "Desenvolvedora Full Stack Senior",
      company: "TechSolutions Brasil",
      period: "2021 - Presente",
      description:
        "Desenvolvimento de aplicações web escaláveis utilizando React, Node.js e arquitetura de microsserviços. Liderança técnica de equipe com 5 desenvolvedores.",
    },
    {
      position: "Desenvolvedora Frontend",
      company: "Inovação Digital",
      period: "2018 - 2021",
      description:
        "Criação de interfaces responsivas e acessíveis com React e TypeScript. Implementação de testes automatizados e integração contínua.",
    },
  ],
}
