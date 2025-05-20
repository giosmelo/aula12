import { addContactMessage, type ContactFormData, type ContactMessage, getContactMessages } from "@/model/contact-model"

export const submitContactForm = (formData: ContactFormData): ContactMessage => {
  // Aqui poderíamos ter validação de dados, envio de email, etc.
  // Por enquanto, apenas adicionamos a mensagem ao nosso "banco de dados" simulado

  // Validação básica
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error("Todos os campos obrigatórios devem ser preenchidos")
  }

  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    throw new Error("Email inválido")
  }

  // Adiciona a mensagem
  return addContactMessage(formData)
}

export const getAllContactMessages = (): ContactMessage[] => {
  return getContactMessages()
}
