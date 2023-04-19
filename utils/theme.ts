import { LinearGradient } from 'expo-linear-gradient'
import { extendTheme, type INativebaseConfig } from 'native-base'

export const nativebaseConfig: INativebaseConfig = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
}

export const nativebaseTheme = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins_100Thin',
        italic: 'Poppins_100Thin_Italic'
      },
      200: {
        normal: 'Poppins_200ExtraLight',
        italic: 'Poppins_200ExtraLight_Italic'
      },
      300: {
        normal: 'Poppins_300Light',
        italic: 'Poppins_300Light_Italic'
      },
      400: {
        normal: 'Poppins_400Regular',
        italic: 'Poppins_400Regular_Italic'
      },
      500: {
        normal: 'Poppins_500Medium',
        italic: 'Poppins_500Medium_Italic'
      },
      600: {
        normal: 'Poppins_600SemiBold',
        italic: 'Poppins_600SemiBold_Italic'
      },
      700: {
        normal: 'Poppins_700Bold',
        italic: 'Poppins_700Bold_Italic'
      },
      800: {
        normal: 'Poppins_800ExtraBold',
        italic: 'Poppins_800ExtraBold_Italic'
      },
      900: {
        normal: 'Poppins_900Black',
        italic: 'Poppins_900Black_Italic'
      }
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins'
  }
})
