import { type INativebaseConfig, NativeBaseProvider } from 'native-base'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { Provider as AuthProvider } from '@/hooks/useAuth'

const config: INativebaseConfig = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
}

const Layout = () => {
  return (
    <NativeBaseProvider config={config}>
      <AuthProvider>
        <StatusBar translucent animated />
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>
    </NativeBaseProvider>
  )
}

export default Layout
