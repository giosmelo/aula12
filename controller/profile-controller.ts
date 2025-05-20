import { profileData, type ProfileData } from "@/model/profile-model"

export const getProfileData = (): ProfileData => {
  // Aqui poderíamos ter lógica para buscar dados de uma API ou banco de dados
  // Por enquanto, retornamos os dados estáticos do modelo
  return profileData
}

export const getProfileSkills = () => {
  return profileData.skills
}

export const getProfileExperience = () => {
  return profileData.experience
}

export const getProfileEducation = () => {
  return profileData.education
}

export const getProfileSocialLinks = () => {
  return profileData.socialLinks
}
