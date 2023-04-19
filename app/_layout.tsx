import { NativeBaseProvider } from 'native-base'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Provider as AuthProvider } from '@/hooks/useAuth'

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic
} from '@expo-google-fonts/poppins'
import { nativebaseConfig, nativebaseTheme } from '@/utils/theme'
import { useEffect, useState } from 'react'

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic
  })
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    // Perform some sort of async data or asset fetching.
    if (fontsLoaded) {
      setReady(true)
    }
  }, [fontsLoaded])

  if (!isReady) {
    return <SplashScreen />
  }

  return (
    <NativeBaseProvider config={nativebaseConfig} theme={nativebaseTheme}>
      <AuthProvider>
        <StatusBar translucent animated style="auto" />
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>
    </NativeBaseProvider>
  )
}

export default Layout
