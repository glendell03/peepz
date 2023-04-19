import * as WebBrowser from 'expo-web-browser'
import Web3Auth, {
  type LOGIN_PROVIDER,
  MFA_LEVELS,
  OPENLOGIN_NETWORK
} from '@web3auth/react-native-sdk'
import Constants, { AppOwnership } from 'expo-constants'
import * as Linking from 'expo-linking'
import { useEffect, useState } from 'react'

import { Buffer } from 'buffer'
import { type ValuesType } from 'utility-types'
import { useAuth } from './useAuth'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
global.Buffer = global.Buffer || Buffer

const resolvedRedirectUrl =
  Constants.appOwnership === AppOwnership.Expo || Constants.appOwnership === AppOwnership.Guest
    ? Linking.createURL('/main/home', {})
    : Linking.createURL('/main/home', { scheme: 'peepz' })

const resolvedLogoutRedirectUrl =
  Constants.appOwnership === AppOwnership.Expo || Constants.appOwnership === AppOwnership.Guest
    ? Linking.createURL('/auth', {})
    : Linking.createURL('/auth', { scheme: 'peepz' })

const clientId =
  'BHL0nqi8u0pwzpe2F3qSKaf7aZF5bmmfEOoeM_JaUef23O2lozHSxYty5hs0K-IB23QXDgptE3s4Bzvn46_OCmk'

const useWeb3Auth = () => {
  const [key, setKey] = useState('')
  const { signIn, signOut } = useAuth()

  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null)

  useEffect(() => {
    const _web3auth = new Web3Auth(WebBrowser, {
      clientId,
      network: OPENLOGIN_NETWORK.TESTNET // or other networks
    })
    setWeb3auth(_web3auth)
  }, [])

  const login = async (provider: ValuesType<typeof LOGIN_PROVIDER>) => {
    try {
      if (web3auth === null) return

      console.log('logging in')

      const info = await web3auth.login({
        loginProvider: provider,
        redirectUrl: resolvedRedirectUrl,
        mfaLevel: MFA_LEVELS.DEFAULT
      })

      signIn(info)
      setKey(info?.privKey ?? '')
      console.log(info)
    } catch (e) {
      console.log(e)
    }
  }

  const logout = async () => {
    try {
      if (web3auth === null) return

      await web3auth.logout({
        redirectUrl: resolvedLogoutRedirectUrl
      })
      signOut()
    } catch (e) {
      console.log(e)
    }
  }

  return { login, logout, key }
}

export default useWeb3Auth
