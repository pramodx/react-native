import { View, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { ArrowLeft } from 'react-native-feather'
import { navigationRef, goBack } from '@/Navigators/utils'

const Header = props => {
  // With this we can control the back icon
  const { showBackIcon = false } = props

  const { Gutters, Layout, Images, Colors } = useTheme()
  return (
    <View
      style={[
        Layout.fullWidth,
        Layout.alignItemsCenter,
        Layout.row,
        Gutters.smallVPadding,
        { backgroundColor: Colors.primary },
      ]}
    >
      <View style={Layout.flex2}>
        {navigationRef.canGoBack() && (
          <ArrowLeft
            height={32}
            width={40}
            color={Colors.white}
            onPress={goBack}
          />
        )}
      </View>

      <View style={[Layout.flex10, Layout.alignItemsCenter]}>
        <Image source={Images.logo} />
      </View>
      <View style={Layout.flex2} />
    </View>
  )
}

export default Header
