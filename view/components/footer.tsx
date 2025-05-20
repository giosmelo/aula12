import type { ProfileData } from "@/model/profile-model"
import Link from "next/link"
import { Github, Linkedin, Twitter, Heart, Music, Sparkles } from "lucide-react"

interface FooterProps {
  profile: ProfileData
}

const Footer = ({ profile }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-bts-black to-bts-purple/90 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
      <div className="absolute top-10 right-10 animate-float opacity-20">
        <Sparkles className="h-8 w-8 text-bts-pink" />
      </div>
      <div className="absolute bottom-10 left-10 animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <Music className="h-6 w-6 text-bts-pink" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              Giovanna<span className="text-bts-pink">Melo</span>
              <Heart className="ml-2 h-5 w-5 text-bts-pink fill-bts-pink animate-pulse" />
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Desenvolvedora Full Stack apaixonada por criar soluções web modernas e intuitivas. Especializada em React,
              Node.js e arquiteturas modernas para entregar produtos de alta qualidade.
            </p>
            <div className="flex space-x-5">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-bts-pink transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-bts-pink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-bts-pink transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:ml-auto">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Music className="mr-2 h-5 w-5 text-bts-pink" />
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#portfolio" className="text-gray-300 hover:text-bts-pink transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-gray-300 hover:text-bts-pink transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-300 hover:text-bts-pink transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-bts-pink" />
              Contato
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="w-24 text-bts-pink">Email:</span>
                <span>gigiovannajs@exemplo.com</span>
              </li>
              <li className="flex items-center">
                <span className="w-24 text-bts-pink">Telefone:</span>
                <span>{profile.phone}</span>
              </li>
              <li className="flex items-center">
                <span className="w-24 text-bts-pink">Localização:</span>
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            &copy; {currentYear} Giovanna Melo. Desenvolvido com{" "}
            <Heart className="h-4 w-4 text-bts-pink fill-bts-pink" /> e Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
