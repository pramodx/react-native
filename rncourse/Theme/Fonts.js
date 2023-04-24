/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }) {
  return StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.text,
    },
    textSmall600: {
      fontSize: FontSize.small,
      color: Colors.text,
      fontWeight: '600',
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.text,
    },
    textRegularPrimary: {
      fontSize: FontSize.regular,
      fontWeight: 'bold',
      color: Colors.primary,
    },
    textSmallLight: {
      fontSize: FontSize.small,
      color: Colors.textLight,
    },
    textRegular600: {
      fontSize: FontSize.regular,
      color: Colors.textLight,
      fontWeight: '600',
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.text,
    },
    titleSmall: {
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleRegularPrimary: {
      fontSize: FontSize.small * 1.5,
      fontWeight: 'bold',
      color: Colors.primary,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    textCenterWhite: {
      textAlign: 'center',
      color: Colors.white,
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  })
}
