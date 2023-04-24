import { View, Text, Image } from 'react-native'
import React from 'react'
import { Clock } from 'react-native-feather'

import {
  employmentTypeMapper,
  jobDayDisplayFormat,
  jobStartDateMapper,
  jobTimeFrame,
  rateDisplayHelper,
} from '@/Utils/homePageUtils'
import { useTheme } from '@/Hooks'

const JobListItem = ({ item }) => {
  const { Layout, Images, Colors, Fonts, Gutters } = useTheme()
  return (
    <>
      <View style={[Layout.fill, Layout.row, Gutters.smallVPadding]}>
        <View style={[Layout.flex3, Layout.alignItemsCenter]}>
          <Image
            style={[
              Gutters.smallVPadding,
              Gutters.smallHPadding,
              Layout.jobIconSize,
            ]}
            source={Images.home[item.profession.name]}
            resizeMode="contain"
          />
        </View>
        <View style={[Layout.flex9]}>
          <Text numberOfLines={1} style={Fonts.textRegularPrimary}>
            {item.title}
          </Text>
          <View style={[Layout.row, Gutters.smallVPadding]}>
            <Text style={Fonts.textSmall600}>
              {employmentTypeMapper[item.employmentType]} {'\u2022'}{' '}
            </Text>

            <Text style={Fonts.textSmallLight}>
              {item.location.suburb}, {item.location.state}
            </Text>
          </View>
          <View>
            <View style={[Layout.row, Layout.alignItemsCenter]}>
              <Clock color={Colors.iconColor} />
              <Text style={[Gutters.smallHPadding]}>
                {jobStartDateMapper[item.startDate]}{' '}
                {jobTimeFrame[item.timeFrame]}
              </Text>
            </View>

            <Text style={Fonts.textSmallLight}>
              {jobDayDisplayFormat(item.createdAt)} {'\u2022'}{' '}
              {rateDisplayHelper(item.rate)}
            </Text>
          </View>
        </View>
      </View>
    </>
  )
}

export default JobListItem
