export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  date: Date
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Simulação de um banco de dados local para armazenar mensagens
export const contactMessages: ContactMessage[] = []

export const addContactMessage = (formData: ContactFormData): ContactMessage => {
  const newMessage: ContactMessage = {
    id: Date.now().toString(),
    ...formData,
    date: new Date(),
  }

  contactMessages.push(newMessage)

  // Simulando armazenamento no localStorage
  if (typeof window !== "undefined") {
    const storedMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]")
    storedMessages.push(newMessage)
    localStorage.setItem("contactMessages", JSON.stringify(storedMessages))
  }

  return newMessage
}

export const getContactMessages = (): ContactMessage[] => {
  // Simulando recuperação do localStorage
  if (typeof window !== "undefined") {
    const storedMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]")
    return storedMessages
  }

  return contactMessages
}
