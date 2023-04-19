/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Header from '@/components/header'
import { Tabs, useRouter } from 'expo-router'
import { Button, HStack, Heading, Text, theme } from 'native-base'
import { useCallback } from 'react'
import { Platform } from 'react-native'
import { Home, User } from 'react-native-feather'

const TabBarIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  const color = theme.colors.dark['50']
  return (
    <HStack alignItems="center" justifyContent="center" space={2}>
      {name === 'Home' && <Home color={color} fontSize={24} />}
      {name === 'Peepz' && <User color={color} fontSize={24} />}
      {focused && (
        <Text fontWeight="semibold" color={color}>
          {name}
        </Text>
      )}
    </HStack>
  )
}

const TabBarButton = ({ name, ...props }: { name: string }) => {
  const { onPress, accessibilityState } = props as any
  const focused = accessibilityState.selected

  // TODO: Button background animation
  // const offset = useSharedValue(1)
  //
  // const style = useAnimatedStyle(() => {
  //   return {
  //     backgroundColor: focused ? 'red' : 'transparent',
  //     borderRadius: 40,
  //     position: 'absolute',
  //     height: 50,
  //     width: '100%',
  //     padding: 20
  //   }
  // })

  return (
    <Button
      variant="subtle"
      onPress={onPress}
      bg={focused ? (name === 'Home' ? 'indigo.100' : 'orange.100') : 'transparent'}
      _pressed={{ backgroundColor: '' }}
      flexGrow={1}
      my={2}
      borderRadius={40}
    >
      <TabBarIcon name={name} focused={focused} />
    </Button>
  )
}

const MainLayout = () => {
  const router = useRouter()
  const tabBarButton = useCallback(
    (props: any, name: string) => <TabBarButton name={name} {...props} />,
    []
  )

  const headerLeft = useCallback(
    () => (
      <Header.Left
        onPress={() => {
          router.back()
        }}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const headerRight = useCallback(() => <Header.Right onPress={() => {}} />, [])
  const headerTitle = useCallback((title: string) => <Heading size="xl">{title}</Heading>, [])

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        title: '',
        tabBarLabelPosition: 'beside-icon',
        tabBarHideOnKeyboard: true,
        headerTitleAlign: 'center',
        headerLeft: () => headerLeft(),
        headerRight: () => headerRight(),
        headerTitleStyle: {
          fontSize: 30
        },
        headerLeftContainerStyle: {
          paddingLeft: 20
        },
        headerRightContainerStyle: {
          paddingRight: 20
        },
        tabBarStyle: {
          borderColor: 'transparent',
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 0,
          paddingHorizontal: 10,
          position: 'absolute',
          bottom: Platform.OS === 'ios' ? 20 : 10,
          right: 100,
          left: 100,
          borderRadius: 40
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarButton: (props) => tabBarButton(props, 'Home')
        }}
      />
      <Tabs.Screen
        name="peepz"
        options={{
          headerShown: true,
          headerTitle: () => headerTitle('Peepz'),
          headerStyle: {
            height: 120,
            backgroundColor: theme.colors.orange[100]
          },
          tabBarButton: (props) => tabBarButton(props, 'Peepz')
        }}
      />
    </Tabs>
  )
}

export default MainLayout
