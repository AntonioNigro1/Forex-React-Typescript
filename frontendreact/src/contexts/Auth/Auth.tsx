import React, { useContext, useState, createContext, useEffect } from "react"

import { AuthContextData, StorageKeys, UserInfo } from "./AuthType"
import { AccountModel } from "../interfaces/Account"

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AccountModel | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  const signIn = async (data: AccountModel) => {
    setAuthData(data)
    await localStorage.setItem(StorageKeys.Token, JSON.stringify(data))
  }

  const signOut = async () => {
    await localStorage.removeItem(StorageKeys.Token)

    setAuthData(undefined)
  }

  const loadFromStorage = async () => {
    const json = await localStorage.getItem(StorageKeys.Token)
    if (json) {
      const auth = JSON.parse(json)
      setAuthData(auth)
    }
    setLoading(false)
  }

  const updateUserInfo = ({ email, name }: UserInfo) => {
    setAuthData((prev) => {
      if (prev) {
        return { ...prev, name, email }
      }
    })
  }

  useEffect(() => {
    loadFromStorage()
  }, [])

  return (
    <AuthContext.Provider
      value={{ auth: authData, loading, signIn, signOut, updateUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
