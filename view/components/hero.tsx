import { Button } from "@/components/ui/button"
import type { ProfileData } from "@/model/profile-model"
import { ArrowDown, Heart, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface HeroProps {
  profile: ProfileData
}

const Hero = ({ profile }: HeroProps) => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-white via-bts-pink/10 to-bts-purple/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 animate-float opacity-30">
        <Sparkles className="h-8 w-8 text-bts-purple" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float opacity-30" style={{ animationDelay: "2s" }}>
        <Sparkles className="h-6 w-6 text-bts-purple" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float opacity-20" style={{ animationDelay: "1s" }}>
        <Heart className="h-5 w-5 text-bts-purple fill-bts-purple" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float opacity-20" style={{ animationDelay: "3s" }}>
        <Heart className="h-4 w-4 text-bts-purple fill-bts-purple" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-10 md:mb-0 md:pr-8">
            <div className="inline-block mb-2 px-4 py-1 rounded-full bg-bts-purple/10 text-bts-purple font-medium text-sm">
              <span className="mr-1">💜</span> Desenvolvedora Full Stack
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bts-black mb-4">
              Olá, eu sou
              <br />
              <span className="text-bts-purple relative">
                Giovanna Melo
                <span className="absolute bottom-1 left-0 w-full h-2 bg-bts-pink/30 -z-10 rounded"></span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">{profile.title}</h2>
            <p className="text-gray-700 mb-8 max-w-lg text-lg leading-relaxed">{profile.shortBio}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#portfolio">
                <Button className="bg-bts-purple hover:bg-bts-purple/90 text-white px-8 py-6 text-lg h-auto relative overflow-hidden group">
                  <span className="relative z-10">Ver Projetos</span>
                  <span className="absolute inset-0 bg-bts-shine bg-[length:200%_200%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contato">
                <Button
                  variant="outline"
                  className="border-bts-purple text-bts-purple hover:bg-bts-purple/5 px-8 py-6 text-lg h-auto"
                >
                  Entre em Contato <Heart className="ml-2 h-4 w-4 text-bts-purple fill-bts-purple" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-bts-purple/20 to-bts-pink/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-bts-gradient opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image
                src="/images/profile.jpeg"
                alt={profile.name}
                width={400}
                height={400}
                className="w-full h-full object-cover relative z-0"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Link href="#portfolio" className="animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Rolar para baixo"
              className="rounded-full p-2 text-bts-purple hover:text-bts-purple/80 hover:bg-bts-purple/10"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
