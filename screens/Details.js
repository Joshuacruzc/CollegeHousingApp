import React from "react";
import {Text, View, FlatList, Image, TouchableWithoutFeedback} from "react-native";
import axios from 'axios';
import {styles} from '../Styles'
class DetailsScreen extends React.Component {
    state = {
        house: 'loading',
    };

    componentDidMount() {
        const { navigation } = this.props;
        const houseId = navigation.getParam('houseId');
        const url = "http://192.168.0.128:8000/housing/" + houseId;
        axios.get(url)
            .then(res => {
                const house = res.data;
                this.setState({house})
            })
    }

    render()
    {
        const house = this.state.house;
        if (house === 'loading'){
            return (<Text> Loading...</Text>)
        }
        return (
            <View>
                <Image source={{uri: house.images[0].image}} style = {{ width: 150, height: 150 }}/>
                <Text>{house.address}</Text>
            </View>
        )
    }
}

export default DetailsScreen;