import { type Character, type Club, type FullName, type School, type TranslationText } from '../types/entity'

import clubsJsonFile from '../json/clubs.json'
import schoolsJsonFile from '../json/schools.json'
import charactersJsonFile from '../json/characters.json'
import {
  type CharacterJson,
  type ClubJson,
  type ClubJsonId,
  type FullNameJson,
  type SchoolJson,
  type SchoolJsonId,
  type TranslationTextJson,
} from '../types/json'

function toTranslationText(json: TranslationTextJson): TranslationText {
  console.log(json)

  return {
    ja: json.ja,
    en: json.en,
    ko: json.ko,
    zhHant: json['zh-hant'],
    zhHans: json['zh-hans'],
  }
}

function toFullName(json: FullNameJson): FullName {
  return {
    firstName: toTranslationText(json.first_name),
    lastName: toTranslationText(json.last_name),
  }
}

function toSchool(schoolId: SchoolJsonId, name: TranslationTextJson | undefined): School | null {
  if (name === undefined) return null
  return {
    id: schoolId,
    name: toTranslationText(name),
  }
}

function toClub(clubId: ClubJsonId, name: TranslationTextJson): Club {
  return {
    id: clubId,
    name: toTranslationText(name),
  }
}

function toCharacter(
  id: string,
  name: FullNameJson,
  img: string[] | null | undefined,
  school: School | null,
  clubs: Club[] | undefined
): Character {
  return {
    id,
    name: toFullName(name),
    school,
    clubs,
    images: img,
  }
}

export function loadCharacters(): Character[] {
  const characterJson = charactersJsonFile as CharacterJson[]
  const schoolJson = schoolsJsonFile as SchoolJson
  const clubJson = clubsJsonFile as ClubJson

  return characterJson.map((charaJson: CharacterJson) => {
    const school: School | null = toSchool(charaJson.school, schoolJson[charaJson.school])

    console.log(charaJson)
    const clubs: Club[] | undefined = charaJson.club
      ?.filter((club: ClubJsonId) => {
        return club.length > 0
      })
      .map((club: ClubJsonId) => {
        return toClub(club, clubJson[club])
      })

    return toCharacter(charaJson.id, charaJson.name, charaJson.img, school, clubs)
  })
}
