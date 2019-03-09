import React from "react";
import {Text, View, FlatList, Image, TouchableWithoutFeedback} from "react-native";
import axios from 'axios';
import {host} from "../App";
import {styles} from '../Styles'

class ListScreen extends React.Component {
    state = {
        houses:[]
    };

    componentDidMount() {
        const {navigation} = this.props;
        const distance = navigation.getParam('distance');
        const college_id = navigation.getParam('college_id');
        axios.get(host + "/housing/",
            {
                params:{
                    distance: distance,
                    college_id: college_id
                }
            })
            .then(res => {
                const houses = res.data;
                this.setState({houses})
            })
    }
    render()
    {
        const {navigation} = this.props;
        const data =[];
        for (let i=0; i<this.state.houses.length; i++){
            const copyHouse = this.state.houses[i];
            if (copyHouse.rent === null){
                copyHouse.rent = 'Price not listed'
            }
            data.push(copyHouse);
        }
        return <FlatList data={data} renderItem={
            ({item}) =>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', {houseId: item.id, })}>
                    <View style={styles.list_item}>
                        <Image source={{uri:item.images[0].image }} style = {{ width: '20%', height: 148 }} />
                        <Text style = {{ position: 'absolute', right: 50}}>
                            {item.address}
                        </Text>
                        <Text style = {{ position: 'absolute', right: 50, top: 75}}>
                            {item.rent}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
        }
            />

    }
}

export default ListScreen;