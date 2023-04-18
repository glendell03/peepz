// import { Link } from 'expo-router'
import { Box, Button, Text } from 'native-base'
import useWeb3Auth from '@/hooks/useWeb3Auth'

const Auth: React.FC = () => {
  const { login } = useWeb3Auth()

  const hanleLogin = async () => {
    try {
      await login('google')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Box flex={1} safeArea alignItems="center" justifyContent="center">
      <Text>AUTH PAGE</Text>
      {/* <Button> */}
      {/*   <Link href="/main/home">Login</Link> */}
      {/* </Button> */}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Button onPress={hanleLogin}>LOGIN</Button>
    </Box>
  )
}

export default Auth
