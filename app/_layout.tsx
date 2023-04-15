import { NativeBaseProvider } from 'native-base'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Layout = () => {
  return (
    <NativeBaseProvider>
      <StatusBar translucent animated />
      <Stack screenOptions={{ headerShown: false }} />
    </NativeBaseProvider>
  )
}

export default Layout
