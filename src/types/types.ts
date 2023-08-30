export interface UserLoginInput {
  email: string,
  password: string
}

export type UserRegisterInput = UserLoginInput & {
  username: string
}

export type Character = {
  user_id: number
  name: String
  title?: String
  char_class?: String
  stat_str?: number
  stat_int?: number
  stat_dex?: number
  image_big?: String
  image_portrait?: String
  armor_type?: String
  main_weapon?: String
}

export interface NewInputCharacter {
  name: string
  title?: string
  char_class?: string
  stat_str?: number
  stat_int?: number
  stat_dex?: number
  image_big?: string
  image_portrait?: string
  armor_type?: string
  main_weapon?: string
}