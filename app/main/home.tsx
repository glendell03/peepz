import { HStack, Text } from 'native-base'

const Home: React.FC = () => {
  return (
    <HStack safeArea space={3} flex={1} alignItems="center" justifyContent="center">
      <Text>Helloo</Text>
    </HStack>
  )
}

export default Home
