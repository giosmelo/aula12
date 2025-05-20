import type { ProfileData } from "@/model/profile-model"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, Heart, Music, Sparkles } from "lucide-react"

interface AboutProps {
  profile: ProfileData
}

const About = ({ profile }: AboutProps) => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white relative">
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <Sparkles className="h-8 w-8 text-bts-purple" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-30" style={{ animationDelay: "2s" }}>
        <Heart className="h-6 w-6 text-bts-purple fill-bts-purple" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-bts-purple/10 text-bts-purple font-medium">
            <span className="mr-1">💜</span> Conheça-me Melhor
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-bts-black mb-4">Sobre Mim</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Conheça um pouco mais sobre minha trajetória, habilidades e experiência profissional.
          </p>
          <div className="w-24 h-1 bg-bts-gradient mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-24">
              <h3 className="text-2xl font-semibold text-bts-black mb-6 flex items-center">
                <Award className="mr-2 h-6 w-6 text-bts-purple" />
                Minhas Habilidades
              </h3>

              <div className="space-y-8">
                {profile.skills.map((skillGroup, groupIndex) => (
                  <div key={groupIndex}>
                    <h4 className="font-medium text-lg text-bts-black mb-3 flex items-center">
                      <Music className="mr-2 h-4 w-4 text-bts-purple" />
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Card
                          key={skillIndex}
                          className="border-none shadow-sm bg-bts-purple/5 hover:bg-bts-purple/10 transition-colors"
                        >
                          <CardContent className="p-3">
                            <span className="text-sm text-bts-black">{skill}</span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-gradient-to-br from-bts-purple/10 to-bts-pink/10 p-6 rounded-lg border border-bts-purple/10">
                <h3 className="text-xl font-semibold text-bts-black mb-4 flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-bts-purple fill-bts-purple" />
                  Informações de Contato
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="font-medium w-24">Email:</span>
                    <span className="text-bts-purple">gigiovannajs@exemplo.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium w-24">Telefone:</span>
                    <span>{profile.phone}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium w-24">Localização:</span>
                    <span>{profile.location}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
            <h3 className="text-2xl font-semibold text-bts-black mb-6">Minha Trajetória</h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">{profile.bio}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-xl font-semibold text-bts-black mb-6 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-bts-purple" />
                  Experiência Profissional
                </h3>
                <div className="space-y-6">
                  {profile.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-bts-purple pl-5 py-2 hover:bg-bts-purple/5 transition-colors rounded-r-lg"
                    >
                      <h4 className="font-medium text-lg text-bts-black">{exp.position}</h4>
                      <p className="text-bts-purple font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-bts-black mb-6 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-bts-purple" />
                  Formação Acadêmica
                </h3>
                <div className="space-y-6">
                  {profile.education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-bts-purple pl-5 py-2 hover:bg-bts-purple/5 transition-colors rounded-r-lg"
                    >
                      <h4 className="font-medium text-lg text-bts-black">{edu.degree}</h4>
                      <p className="text-bts-purple font-medium">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
