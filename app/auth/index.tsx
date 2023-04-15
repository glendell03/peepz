import { Link } from 'expo-router'
import { Box, Button, Text } from 'native-base'

const Auth: React.FC = () => {
  return (
    <Box flex={1} safeArea alignItems="center" justifyContent="center">
      <Text>AUTH PAGE</Text>
      <Button>
        <Link href="/main/home">Login</Link>
      </Button>
    </Box>
  )
}

export default Auth
