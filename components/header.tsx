import { Avatar, theme } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { ChevronLeft, MoreHorizontal } from 'react-native-feather'

interface IHeader {
  onPress: () => void
}

const Header = () => null

const Left = ({ onPress }: IHeader) => (
  <TouchableOpacity onPress={onPress}>
    <Avatar bg="orange.50" size="lg">
      <ChevronLeft color={theme.colors.dark[50]} fontSize={32} />
    </Avatar>
  </TouchableOpacity>
)

const Right = ({ onPress }: IHeader) => (
  <TouchableOpacity onPress={onPress}>
    <Avatar bg="orange.50" size="lg">
      <MoreHorizontal color={theme.colors.dark[50]} fontSize={32} />
    </Avatar>
  </TouchableOpacity>
)

Header.Left = Left
Header.Right = Right

export default Header
