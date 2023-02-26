export interface Character {
  id: string
  name: FullName
  school: School | null
  clubs: Club[]
  icons: Icon[]
}

export interface Icon {
  imageName: string
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
  id: string
  name: TranslationText
}

export interface TranslationText {
  ja: string | null | undefined
  en: string | null | undefined
  ko: string | null | undefined
  zhHant: string | null | undefined
  zhHans: string | null | undefined
}

export type Language = 'ja' | 'en' | 'ko' | 'zh-hant' | 'zh-hans'
