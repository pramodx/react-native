import React, { useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native'
import { useTheme } from '@/Hooks'
import Header from '@/Components/Header'
import { useLazyGetJobsQuery } from '@/Services/modules/users'
import JobListItem from '@/Components/JobListItem'
import { navigate } from '@/Navigators/utils'

const HomePage = () => {
  const { Layout, Colors, Fonts, Gutters } = useTheme()
  // Using hooks exposed by Redux-Toolkit
  const [getJobs, { data, isLoading, isFetching }] = useLazyGetJobsQuery()

  // Getting the jobs from the server
  useEffect(() => {
    getJobs()
  }, [getJobs])

  const navigateToJobDetails = item => {
    navigate('JobDetail', { item })
  }

  // List renderItem method
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateToJobDetails(item)}>
        <JobListItem item={item} />
      </TouchableOpacity>
    )
  }

  // A very basic List item separator
  const itemSeparatorComponent = () => <View style={Layout.listItemSeparator} />

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <Header showBackIcon={true} />
      <View style={[Gutters.smallVPadding, Gutters.smallHPadding]}>
        <Text style={Fonts.titleRegularPrimary}>Jobs for you</Text>
      </View>

      {(isLoading || isFetching) && <ActivityIndicator />}
      {data && (
        <FlatList
          renderItem={renderItem}
          extraData={data?.jobs}
          data={data?.jobs}
          initialNumToRender={10}
          ItemSeparatorComponent={itemSeparatorComponent}
        />
      )}
    </View>
  )
}

export default HomePage
