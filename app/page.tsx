import type { Metadata } from "next"
import Header from "@/view/components/header"
import Hero from "@/view/components/hero"
import About from "@/view/components/about"
import Portfolio from "@/view/components/portfolio"
import Contact from "@/view/components/contact"
import Footer from "@/view/components/footer"
import { getProfileData } from "@/controller/profile-controller"
import { getPortfolioProjects } from "@/controller/portfolio-controller"

export const metadata: Metadata = {
  title: "Giovanna Melo | Desenvolvedora Full Stack",
  description:
    "Portfólio profissional de Giovanna Melo, desenvolvedora full stack especializada em React, Node.js e tecnologias web modernas.",
}

export default function Home() {
  const profileData = getProfileData()
  const projects = getPortfolioProjects()

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero profile={profileData} />
      <Portfolio projects={projects} />
      <About profile={profileData} />
      <Contact />
      <Footer profile={profileData} />
    </main>
  )
}
