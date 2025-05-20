"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/controller/contact-controller"
import type { ContactFormData } from "@/model/contact-model"
import { Mail, Phone, MapPin, Send, CheckCircle, Heart, Sparkles } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  subject: z.string().min(5, { message: "Assunto deve ter pelo menos 5 caracteres" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
})

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      // Simulando um atraso de rede
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const formData: ContactFormData = {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      }

      submitContactForm(formData)
      setIsSuccess(true)
      form.reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("Ocorreu um erro ao enviar sua mensagem. Tente novamente.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 md:py-28 bg-gradient-to-b from-bts-purple/5 to-white relative">
      <div className="absolute top-20 right-10 animate-float opacity-30">
        <Sparkles className="h-8 w-8 text-bts-purple" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float opacity-30" style={{ animationDelay: "2s" }}>
        <Heart className="h-6 w-6 text-bts-purple fill-bts-purple" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-bts-purple/10 text-bts-purple font-medium">
            <span className="mr-1">💌</span> Vamos Conversar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-bts-black mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tem um projeto em mente ou quer conversar sobre oportunidades? Preencha o formulário abaixo e entrarei em
            contato o mais breve possível.
          </p>
          <div className="w-24 h-1 bg-bts-gradient mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md border border-bts-purple/10 hover:shadow-bts-purple/10 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-bts-black mb-6 flex items-center">
                <Heart className="mr-2 h-5 w-5 text-bts-purple fill-bts-purple" />
                Informações de Contato
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-bts-purple/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-bts-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-bts-black">Email</h4>
                    <a href="mailto:gigiovannajs@exemplo.com" className="text-bts-purple hover:underline">
                      gigiovannajs@exemplo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-bts-purple/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-bts-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-bts-black">Telefone</h4>
                    <a href="tel:+5511987654321" className="text-bts-purple hover:underline">
                      (11) 98765-4321
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-bts-purple/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-bts-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-bts-black">Localização</h4>
                    <p className="text-gray-600">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium text-bts-black mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/giovannamelo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bts-purple/10 hover:bg-bts-purple text-bts-purple hover:text-white p-3 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/giovannamelo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bts-purple/10 hover:bg-bts-purple text-bts-purple hover:text-white p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/giovannamelo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bts-purple/10 hover:bg-bts-purple text-bts-purple hover:text-white p-3 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md border border-bts-purple/10 hover:shadow-bts-purple/10 hover:shadow-lg transition-shadow">
              {isSuccess && (
                <Alert className="mb-6 bg-green-50 border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <AlertTitle className="text-green-800">Mensagem enviada!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Obrigado por entrar em contato. Responderei o mais breve possível.
                  </AlertDescription>
                </Alert>
              )}

              {errorMessage && (
                <Alert className="mb-6 bg-red-50 border-red-200">
                  <AlertTitle className="text-red-800">Erro</AlertTitle>
                  <AlertDescription className="text-red-700">{errorMessage}</AlertDescription>
                </Alert>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-bts-black">Nome</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu nome"
                              {...field}
                              className="h-12 border-bts-purple/20 focus:border-bts-purple focus:ring-bts-purple/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-bts-black">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="seu.email@exemplo.com"
                              {...field}
                              className="h-12 border-bts-purple/20 focus:border-bts-purple focus:ring-bts-purple/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-bts-black">Assunto</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Assunto da mensagem"
                            {...field}
                            className="h-12 border-bts-purple/20 focus:border-bts-purple focus:ring-bts-purple/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-bts-black">Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Escreva sua mensagem aqui..."
                            className="min-h-[180px] resize-none border-bts-purple/20 focus:border-bts-purple focus:ring-bts-purple/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full md:w-auto bg-bts-purple hover:bg-bts-purple/90 px-8 py-3 h-auto text-base relative overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center">
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensagem
                          <Heart className="ml-2 h-4 w-4 text-white fill-white" />
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-bts-shine bg-[length:200%_200%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
