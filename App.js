import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import ListScreen from './screens/ListScreen'
import UploadScreen from './screens/UploadScreen'
import DetailsScreen from "./screens/Details";


const AppNavigator = createStackNavigator(
    {
    Home: HomeScreen,
    List: ListScreen,
    Details: DetailsScreen,
    Upload: UploadScreen,
    },
    {
        initialRouteName: "Home",
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
