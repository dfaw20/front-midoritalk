export type SchoolJsonId =
  | 'abydos'
  | 'gehenna'
  | 'trinity'
  | 'millennium'
  | 'shanhaijing'
  | 'hyakkiyako'
  | 'red_winter'
  | 'valkyrie'
  | 'srt'
  | 'arius'

export interface SchoolJson {
  abydos: TranslationTextJson
  gehenna: TranslationTextJson
  trinity: TranslationTextJson
  millennium: TranslationTextJson
  shanhaijing: TranslationTextJson
  hyakkiyako: TranslationTextJson
  red_winter: TranslationTextJson
  valkyrie: TranslationTextJson
  srt: TranslationTextJson
  arius: TranslationTextJson
}

export type ClubJsonId =
  | 'countermeasures_council'
  | 'school_lunch_club'
  | 'gourmet_research_society'
  | 'problem_solver_68'
  | 'disciplinary_committee'
  | 'makeup_work_club'
  | 'remedial_knights'
  | 'library_committee'
  | 'justice_task_force'
  | 'after_school_sweets_club'
  | 'vigilante_crew'
  | 'seminar'
  | 'cleaning_and_clearing'
  | 'super_phenomenon_task_force'
  | 'veritas'
  | 'engineering_club'
  | 'athletics_training_club'
  | 'game_development_department'
  | 'plum_blossom_garden'
  | 'eastern_alchemy_society'
  | 'festival_operations_department'
  | 'inner_discipline_club'
  | 'ninjutsu_research_department'
  | 'yin_yang_club'
  | 'special_class_no.227'
  | 'red_winter_secretariat'
  | 'gematria'
  | 'angel_24'
  | "shitim's_box"
  | 'kaiser_pmc'
  | 'sibaseki_ramen'
  | 'hyakkiyako_commercial_district'
  | 'prime_student_council'
  | 'masked_swimsuit_group'
  | 'momo_friends'
  | 'decagrammaton'
  | 'mimesis'
  | 'communio_sanctorum'
  | 'helmet_dan'
  | 'city_chimpira'
  | 'sudama_ichiza'
  | 'kaitenger'
  | 'community_safety_bureau'
  | 'sisterhood'
  | 'the_library_of_lore'
  | 'citizen'
  | 'tea_party'
  | 'onsen_development_club'
  | 'construction_department'
  | 'emergency_medicine_club'
  | 'rabbit_platoon'
  | 'pandemonium_society'
  | 'arius_squad'
  | 'public_safety_bureau'

export interface ClubJson {
  countermeasures_council: TranslationTextJson
  school_lunch_club: TranslationTextJson
  gourmet_research_society: TranslationTextJson
  problem_solver_68: TranslationTextJson
  disciplinary_committee: TranslationTextJson
  makeup_work_club: TranslationTextJson
  remedial_knights: TranslationTextJson
  library_committee: TranslationTextJson
  justice_task_force: TranslationTextJson
  after_school_sweets_club: TranslationTextJson
  vigilante_crew: TranslationTextJson
  seminar: TranslationTextJson
  cleaning_and_clearing: TranslationTextJson
  super_phenomenon_task_force: TranslationTextJson
  veritas: TranslationTextJson
  engineering_club: TranslationTextJson
  athletics_training_club: TranslationTextJson
  game_development_department: TranslationTextJson
  plum_blossom_garden: TranslationTextJson
  eastern_alchemy_society: TranslationTextJson
  festival_operations_department: TranslationTextJson
  inner_discipline_club: TranslationTextJson
  ninjutsu_research_department: TranslationTextJson
  yin_yang_club: TranslationTextJson
  'special_class_no.227': TranslationTextJson
  red_winter_secretariat: TranslationTextJson
  gematria: TranslationTextJson
  angel_24: TranslationTextJson
  "shitim's_box": TranslationTextJson
  kaiser_pmc: TranslationTextJson
  sibaseki_ramen: TranslationTextJson
  hyakkiyako_commercial_district: TranslationTextJson
  prime_student_council: TranslationTextJson
  masked_swimsuit_group: TranslationTextJson
  momo_friends: TranslationTextJson
  decagrammaton: TranslationTextJson
  mimesis: TranslationTextJson
  communio_sanctorum: TranslationTextJson
  helmet_dan: TranslationTextJson
  city_chimpira: TranslationTextJson
  sudama_ichiza: TranslationTextJson
  kaitenger: TranslationTextJson
  community_safety_bureau: TranslationTextJson
  sisterhood: TranslationTextJson
  the_library_of_lore: TranslationTextJson
  citizen: TranslationTextJson
  tea_party: TranslationTextJson
  onsen_development_club: TranslationTextJson
  construction_department: TranslationTextJson
  emergency_medicine_club: TranslationTextJson
  rabbit_platoon: TranslationTextJson
  pandemonium_society: TranslationTextJson
  arius_squad: TranslationTextJson
  public_safety_bureau: TranslationTextJson
}

export interface TranslationTextJson {
  ja: string | null | undefined
  en: string | null| undefined
  ko: string | null| undefined
  'zh-hant': string | null| undefined
  'zh-hans': string | null| undefined
}

export interface CharacterJson {
  name: FullNameJson
  school: SchoolJsonId
  club?: ClubJsonId[] | null
  id: string
  img?: string[] | null
}

export interface FullNameJson {
  first_name: TranslationTextJson
  last_name: TranslationTextJson
}
