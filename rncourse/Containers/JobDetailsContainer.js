import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '@/Components/Header'
import { useTheme } from '@/Hooks'
import {
  employmentTypeMapper,
  jobDayDisplayFormat,
  jobStartDateMapper,
  jobTimeFrame,
  rateDisplayHelper,
} from '@/Utils/homePageUtils'
import { Clock } from 'react-native-feather'

const JobDetailsContainer = ({ route }) => {
  const { item } = route?.params
  const { Layout, Images, Colors, Fonts, Gutters } = useTheme()

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <Header />

      <View style={[Gutters.smallVPadding, Gutters.smallHPadding]}>
        <Text style={Fonts.titleRegularPrimary}>Jobs Detail</Text>
      </View>
      <View style={Layout.alignItemsCenter}>
        <Image
          style={Layout.jobDetailIconSize}
          source={Images.home[item?.profession.name]}
        />
        <Text style={[Fonts.textRegularPrimary, Gutters.smallVPadding]}>
          {item.title}
        </Text>
        <Text style={[Fonts.textSmall600, Gutters.smallVPadding]}>
          {employmentTypeMapper[item.employmentType]}
        </Text>
        <Text style={[Fonts.textSmallLight, Gutters.smallVPadding]}>
          {item.location.suburb}, {item.location.state},{' '}
          {item.location.postcode}
        </Text>
        <View
          style={[Layout.row, Layout.alignItemsCenter, Gutters.smallVPadding]}
        >
          <Clock color={Colors.iconColor} />
          <Text style={[Gutters.smallHPadding]}>
            {jobStartDateMapper[item.startDate]} {jobTimeFrame[item.timeFrame]}
          </Text>
        </View>
        <Text style={[Fonts.textSmallLight, Gutters.smallVPadding]}>
          Job Posted: {jobDayDisplayFormat(item.createdAt)}
        </Text>
        <Text style={[Gutters.smallVPadding]}>
          {rateDisplayHelper(item.rate)}
        </Text>

        <Text style={[Gutters.smallHPadding]}>
          Job Duration: {item.jobDurationDisplay.duration}{' '}
          {item.jobDurationDisplay.durationType}
        </Text>
      </View>
    </View>
  )
}

export default JobDetailsContainer
