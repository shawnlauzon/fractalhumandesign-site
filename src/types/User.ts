export type UserData = Omit<User, 'id'>

export type User = {
  id: string
  firstName: string
  lastName: string
  phoneNumber?: string
  email: string
  emailOptIn: boolean // Set this to false if user unsubscribes
  isEmailVerified: boolean
  emailToken: string
  welcomeEmailStepSent?: number
}
