import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { JOB_HOME } from '@/Config/routeName'

const StartupContainer = () => {
  const { Layout, Gutters, Fonts, Colors } = useTheme()

  const { t } = useTranslation()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigateAndSimpleReset(JOB_HOME)
  }

  useEffect(() => {
    init()
  })

  return (
    <View
      style={[
        Layout.fill,
        Layout.colCenter,
        { backgroundColor: Colors.primary },
      ]}
    >
      <Brand />
      <ActivityIndicator
        size={'large'}
        style={[Gutters.largeVMargin]}
        color={Colors.white}
      />
      <Text style={Fonts.textCenterWhite}>{t('welcome')}</Text>
    </View>
  )
}

export default StartupContainer
