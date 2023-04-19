import { Avatar, Box, FlatList, HStack, Input, Text, VStack, theme } from 'native-base'
import { useCallback } from 'react'
import { TouchableOpacity } from 'react-native'
import { ChevronRight, Search } from 'react-native-feather'

interface IData {
  id: number
  handle: string
  metadata: Record<string, string>
}

const data: IData[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => ({
  id: i,
  handle: `@kid.peepz ${i}`,
  metadata: {}
}))

const RenderPeepz = ({ item }: { item: IData }) => (
  <Box bg="orange.50" p={4} borderRadius={10}>
    <TouchableOpacity>
      <HStack space={3} alignItems="center">
        <Avatar bg="indigo.400" />
        <Text fontWeight="semibold" fontSize="md" flex={1}>
          {item.handle}
        </Text>
        <ChevronRight color={theme.colors.dark[50]} fontSize={20} />
      </HStack>
    </TouchableOpacity>
  </Box>
)

const Peepz = () => {
  const itemSeparatorComponent = useCallback(() => <Box h={3} />, [])
  return (
    <VStack pt="2" bg="orange.100" flex={1} space={3}>
      <Input
        variant="filled"
        bg="orange.50"
        borderColor="orange.50"
        _focus={{ backgroundColor: 'orange.50' }}
        focusOutlineColor="orange.300"
        InputLeftElement={
          <Box ml={4}>
            <Search color={theme.colors.dark[50]} />
          </Box>
        }
        size={5}
        mx={4}
        placeholder="Search"
        borderRadius={10}
      />
      <FlatList
        px="4"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ paddingBottom: 95 }}
        borderRadius={10}
        data={data}
        renderItem={({ item }) => <RenderPeepz item={item} />}
        keyExtractor={({ id }) => id.toString()}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </VStack>
  )
}

export default Peepz
