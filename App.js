import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import FilterScreen from './screens/FilterScreen'
import ListScreen from './screens/ListScreen'
import UploadScreen from './screens/UploadScreen'
import DetailsScreen from "./screens/Details";
import HomeScreen from "./screens/HomeScreen"
export const host = "http://192.168.0.15";
const AppNavigator = createStackNavigator(
    {
    Home: HomeScreen,
    Filters: FilterScreen,
    List: ListScreen,
    Details: DetailsScreen,
    Upload: UploadScreen,
    },
    {
        initialRouteName: "Details",
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class ApolloApp extends React.Component {
    render() {
        return (
                <AppContainer/>
        )
    }
}
