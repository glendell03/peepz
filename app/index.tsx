import { useAuth } from '@/hooks/useAuth'
import { Redirect } from 'expo-router'

export default function Page() {
  const { user } = useAuth()
  return user !== null ? <Redirect href="/main/home" /> : <Redirect href="/auth" />
}
