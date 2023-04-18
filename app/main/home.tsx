import { Avatar, Box, HStack, Text, View, VStack } from 'native-base'

const Home: React.FC = () => {
  return (
    // <HStack safeArea flex={1} bg="blueGray.100" alignItems="center" justifyContent="center">
    //   <VStack>
    //     <Center>
    //       <Avatar bg="indigo.400" size="2xl" mb={4} />
    //       <Text bold fontSize="2xl">
    //         @dell.nft
    //       </Text>
    //       {/* <Text>5UF8yBeYaQxF1Sx9bzaJTuN1313VvmtLDW7Q3KL636Ne</Text> */}
    //       <Text fontSize="md">5UF8...36Ne</Text>
    //     </Center>
    //   </VStack>
    // </HStack>
    <VStack safeArea flex={1} bg="indigo.50">
      <HStack alignItems="center" justifyContent="space-between" px="4">
        <View>
          <Text fontSize="lg" bold>
            Kid Gonzales
          </Text>
          <Text fontSize="md" color="muted.500">
            @kid.peepz
          </Text>
        </View>
        <Avatar
          bg="indigo.400"
          size="md"
          source={{
            uri: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/197911142/original/043a07c41cad114ab97c5cf4722d50aa66baee3a/make-a-cute-avatar-for-you.jpeg'
          }}
        />
      </HStack>
      <HStack justifyContent="center">
        <Box
          bg={'white'}
          width="5/6"
          py="16"
          m="6"
          rounded="xl"
          _text={{
            fontSize: '2xl',
            fontWeight: 'medium',
            color: 'trueGray.900',
            textAlign: 'center'
          }}
        >
          <Text textAlign="center">Your Balance</Text>
          $14,268.00
        </Box>
      </HStack>
    </VStack>
  )
}

export default Home
