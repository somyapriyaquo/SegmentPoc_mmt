/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import OffersScreen from './screens/Offers/OffersScreen';
import HomeScreen from './screens/Home/HomeScreen';
import SearchFlightsScreen from './screens/SearchFlight/SearchFlightsScreen';
import FlightListScreen from './screens/FlightList/FlightListScreen';
import DetailsScreen from './screens/Details/DetailsScreen';
import BookedScreen from './screens/Booked/BookedScreen';
// import Analytics, {
//   AnalyticsConstants
// } from 'react-native-analytics-segment-io';

console.disableYellowBox = true;

export default class SegmentPOC_mmt extends React.Component {
  render() {
    // Analytics.setup('QiKV4c77dtjSv30viBOVOWjrD1ccvXV0', {});
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Offers: OffersScreen,
    FlightSearch: SearchFlightsScreen,
    FlightList: FlightListScreen,
    Details: DetailsScreen,
    Booked: BookedScreen
  },
  {
    initialRouteName: 'Home'
  }
);
