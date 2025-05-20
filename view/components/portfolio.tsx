"use client"

import { useState } from "react"
import type { Project } from "@/model/portfolio-model"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface PortfolioProps {
  projects: Project[]
}

const Portfolio = ({ projects }: PortfolioProps) => {
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [filter, setFilter] = useState<string | null>(null)

  const filteredProjects = filter
    ? projects.filter((project) =>
        project.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase())),
      )
    : projects

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length))
  }

  const uniqueTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies).map((tech) => tech.split("/")[0].trim())),
  ).sort()

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-gradient-to-b from-white to-bts-purple/5 relative">
      <div className="absolute top-20 right-10 animate-float opacity-30">
        <Sparkles className="h-8 w-8 text-bts-purple" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float opacity-30" style={{ animationDelay: "2s" }}>
        <Sparkles className="h-6 w-6 text-bts-purple" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-bts-purple/10 text-bts-purple font-medium">
            <span className="mr-1">✨</span> Meus Trabalhos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-bts-black mb-4">Projetos em Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Confira alguns dos projetos que desenvolvi utilizando diversas tecnologias e soluções criativas.
          </p>
          <div className="w-24 h-1 bg-bts-gradient mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={filter === null ? "default" : "outline"}
            className={filter === null ? "bg-bts-purple hover:bg-bts-purple/90" : "border-bts-purple text-bts-purple"}
            onClick={() => setFilter(null)}
          >
            Todos
          </Button>
          {uniqueTechnologies.map((tech) => (
            <Button
              key={tech}
              variant={filter === tech ? "default" : "outline"}
              className={
                filter === tech
                  ? "bg-bts-purple hover:bg-bts-purple/90"
                  : "border-bts-purple text-bts-purple hover:bg-bts-purple/10"
              }
              onClick={() => setFilter(tech)}
            >
              {tech}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-xl border-0 shadow-md group hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-bts-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <Badge className="absolute top-3 right-3 bg-bts-purple py-1 px-3 z-20">
                    <Sparkles className="h-3 w-3 mr-1" /> Destaque
                  </Badge>
                )}
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold text-bts-black mb-3 group-hover:text-bts-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-bts-purple/5 text-bts-purple border-bts-purple/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gray-50 flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 border-bts-purple text-bts-purple hover:bg-bts-purple/10"
                  >
                    <Github className="h-4 w-4" />
                    <span>Código</span>
                  </Button>
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="bg-bts-purple hover:bg-bts-purple/90 flex items-center gap-1 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </span>
                    <span className="absolute inset-0 bg-bts-shine bg-[length:200%_200%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button
              onClick={loadMore}
              className="bg-bts-purple hover:bg-bts-purple/90 px-8 relative overflow-hidden group"
            >
              <span className="relative z-10">Carregar Mais</span>
              <span className="absolute inset-0 bg-bts-shine bg-[length:200%_200%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
