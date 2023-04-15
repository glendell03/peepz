import { Redirect } from 'expo-router'
import { useState } from 'react'

export default function Page() {
  const [isAuth, _setIsAuth] = useState<boolean>(!false)
  return isAuth ? <Redirect href="/main/home" /> : <Redirect href="/auth" />
}
