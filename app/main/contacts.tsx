import { Avatar, Box, FlatList, HStack, Input, Text, VStack, theme } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { ChevronRight, Search } from 'react-native-feather'

interface IData {
  id: number
  handle: string
  metadata: Record<string, string>
}

const data: IData[] = [
  {
    id: 1,
    handle: '@kid.nft',
    metadata: {}
  },
  {
    id: 2,
    handle: '@kid.nft',
    metadata: {}
  }
]

const RenderContacts = ({ item }: { item: IData }) => (
  <Box mb="3">
    <TouchableOpacity>
      <HStack space={3} alignItems="center">
        <Avatar bg="indigo.400" />
        <Text bold fontSize="md" flex={1}>
          {item.handle}
        </Text>
        <ChevronRight color={theme.colors.dark[50]} fontSize={20} />
      </HStack>
    </TouchableOpacity>
  </Box>
)

const Contacts = () => {
  return (
    <VStack safeArea bg="orange.50" flex={1} space={3}>
      <Input
        InputLeftElement={
          <Box ml={4}>
            <Search color={theme.colors.muted[400]} />
          </Box>
        }
        size={5}
        mx={4}
        color="muted.400"
        placeholder="Search"
        borderRadius={10}
      />
      <FlatList
        mx="4"
        p="4"
        borderRadius={16}
        data={data}
        renderItem={({ item }) => <RenderContacts item={item} />}
        keyExtractor={({ id }) => id.toString()}
      />
    </VStack>
  )
}

export default Contacts
