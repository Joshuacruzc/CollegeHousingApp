import React from "react";
import {Text, View, FlatList, Image, TouchableWithoutFeedback} from "react-native";
import axios from 'axios';
import {styles} from '../Styles'
class ListScreen extends React.Component {
    state = {
        houses:[]
    };

    componentDidMount() {
        axios.get("http://192.168.0.128:8000/housing/")
            .then(res => {
                const houses = res.data;
                this.setState({houses})
            })
    }

    render()
    {
        const {navigation} = this.props;
        return <FlatList data={this.state.houses} renderItem={
            ({item}) =>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', {houseId: item.id})}>
                    <View style={styles.list_item}>
                        <Image source={{uri:item.images[0].image }} style = {{ width: 150, height: 150 }} />
                        <Text style = {{ position: 'absolute',
                            right: 50}}>{item.address}</Text>
                    </View>
                </TouchableWithoutFeedback>
        }
            />

    }
}

export default ListScreen;