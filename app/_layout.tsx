import { NativeBaseProvider } from 'native-base'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
}

const Layout = () => {
  return (
    <NativeBaseProvider config={config}>
      <StatusBar translucent animated />
      <Stack screenOptions={{ headerShown: false }} />
    </NativeBaseProvider>
  )
}

export default Layout
