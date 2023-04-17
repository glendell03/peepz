import { Avatar, Center, HStack, Text, VStack } from 'native-base'

const Home: React.FC = () => {
  return (
    <HStack safeArea flex={1} bg="blueGray.100" alignItems="center" justifyContent="center">
      <VStack>
        <Center>
          <Avatar bg="indigo.400" size="2xl" mb={4} />
          <Text bold fontSize="2xl">
            @dell.nft
          </Text>
          {/* <Text>5UF8yBeYaQxF1Sx9bzaJTuN1313VvmtLDW7Q3KL636Ne</Text> */}
          <Text fontSize="md">5UF8...36Ne</Text>
        </Center>
      </VStack>
    </HStack>
  )
}

export default Home
