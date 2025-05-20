import { projects, type Project } from "@/model/portfolio-model"

export const getPortfolioProjects = (): Project[] => {
  // Aqui poderíamos ter lógica para buscar projetos de uma API ou banco de dados
  // Por enquanto, retornamos os dados estáticos do modelo
  return projects
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured)
}

export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id)
}

export const getProjectsByTechnology = (technology: string): Project[] => {
  return projects.filter((project) =>
    project.technologies.some((tech) => tech.toLowerCase().includes(technology.toLowerCase())),
  )
}
