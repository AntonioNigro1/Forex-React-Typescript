import { AccountModel } from "../interfaces/Account"

export type UserInfo = {
  name: string
  email: string
}

export interface AuthContextData {
  auth?: AccountModel
  signIn: (authData: AccountModel) => void
  signOut: () => Promise<void>
  updateUserInfo: (data: UserInfo) => void
  loading: boolean
}

export enum StorageKeys {
  Token = "@academy_module1:authData",
}
