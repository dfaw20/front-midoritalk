import { type Character, type Icon, type Language, type School, type TranslationText } from '../types/entity'

export function onlyString(value: string | null | undefined): string {
  if (value === undefined) {
    return ''
  }
  if (value === null) {
    return ''
  }
  return value
}

export function translate(text: TranslationText | undefined, language: Language): string {
  if (text === undefined) return ''
  switch (language) {
    case 'ja':
      return onlyString(text.ja)
    case 'en':
      return onlyString(text.en)
    case 'ko':
      return onlyString(text.ko)
    case 'zh-hant':
      return onlyString(text.zhHant)
    case 'zh-hans':
      return onlyString(text.zhHans)
  }
}

export function fullName(character: Character, language: Language): string {
  return translate(character.name.lastName, language) + ' ' + translate(character.name.firstName, language)
}

export function emblemImg(school: School): string {
  return '/images/emblem/' + onlyString(school.id) + '.png'
}

export function characterImg(icon: Icon): string {
  return '/images/character/' + onlyString(icon.imageName) + '.png'
}

export function firstIcon(icons: Icon[]): Icon {
  return icons[0]
}
