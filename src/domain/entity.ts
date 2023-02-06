export interface Character {
  id: string
  name: FullName
  school: School
  club?: Club[]
  img?: string[]
}

export interface FullName {
  firstName: TranslationText
  lastName: TranslationText
}

export interface Club {
  id: string
  name: TranslationText
}

export interface School {
  name: TranslationText
}

export interface TranslationText {
  ja: string
  en: string
  ko: string
  zhHant: string
  zhHans: string
}
