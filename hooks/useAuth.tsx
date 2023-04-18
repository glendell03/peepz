import { type State } from '@web3auth/react-native-sdk'
import { useRouter, useSegments } from 'expo-router'
import { type PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'

interface IAuthContext {
  signIn: (userInfo: State | undefined) => void
  signOut: () => void
  user: State | null
}

// @ts-expect-error object should be empty
const AuthContext = createContext<IAuthContext>({})

// This hook can be used to access the user info.
export const useAuth = () => {
  return useContext(AuthContext)
}

// This hook will protect the route access based on user authentication.
const useProtectedRoute = (user: State) => {
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      user === null &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace('/sign-in')
    } else if (user !== null && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/main/home')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, segments])
}

export const Provider = (props: PropsWithChildren) => {
  const [user, setAuth] = useState<State | null>(null)

  useProtectedRoute(user as State)

  return (
    <AuthContext.Provider
      value={{
        signIn: (userInfo) => {
          setAuth(userInfo as State)
        },
        signOut: () => {
          setAuth(null)
        },
        user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
