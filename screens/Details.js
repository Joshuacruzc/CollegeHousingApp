import React from "react";
import {Text, View, FlatList, ScrollView, Image, Linking, TouchableWithoutFeedback} from "react-native";
import axios from 'axios';
import {styles, getPaletteColors} from '../Styles'
import {host} from "../App";
import Swiper from "react-native-swiper"


class DetailsScreen extends React.Component {
    state = {
        house: 'loading',
    };

    componentDidMount() {
        const { navigation } = this.props;
        // const houseId = navigation.getParam('houseId');
        const houseId = 1;
        const url = host + "/housing/" + houseId;
        axios.get(url)
            .then(res => {
                const house = res.data;
                this.setState({house: house, })
            })
    }

    getImages = () => {
        let images = [];
        for (let i = 0; i < this.state.house.images.length; i++) {
            images.push(
                <View key={i}>
                    <Image style={{height: '100%', width:'100%' }} source={{uri: this.state.house.images[i].image}}/>
                </View>)
        }
        return images
    };

    getTags = () => {
        let tags =[];
        for (let i = 0; i < this.state.house.tags.length; i++) {
            let index = i % getPaletteColors().length;
            tags.push(<Text style={{fontSize: 18, borderRadius: 10,
                margin: 5, padding:5, width:'40%', textAlign:'center',  color: 'white', backgroundColor: getPaletteColors()[index]}} key={i}>{this.state.house.tags[i]}</Text>)
        }
        return tags
    };
    render()
    {
        const house = this.state.house;
        if (house === 'loading'){
            return (<Text> Loading...</Text>)
        }
        return (
        <ScrollView style={{flex: 1}}>
            <View style={{height:300}}>
                <Swiper loadMinimal loadMinimalSize={1} style={{height:'40%'}}
                        showButtons={false} loop={false}>
                    {this.getImages()}
                </Swiper>
            </View>
            <View style={{borderWidth:2,borderColor:'#D8D8D8', backgroundColor: '#D8D8D8', paddingBottom:20}}>
                <View style={styles.block}>
                    <Text style={styles.header}>Information</Text>
                    <Text style={styles.standardText}> <Text style={{fontWeight:'bold'}}>Address:</Text> {house.address}</Text>
                    <Text style={styles.standardText}><Text style={{fontWeight:'bold'}}>Rent:</Text> {house.rent || 'Not Listed'}</Text>
                    <TouchableWithoutFeedback
                        onPress={() =>Linking.openURL("http://www.google.com/maps/place/" + house.latitude + ',' +house.longitude)}>
                        <Text style={{fontSize: 18, borderRadius: 10,
                            margin: 5, padding:5, textAlign:'center', width:'40%',  color: 'white', backgroundColor: '#D62246'}}>View Location</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.block}>
                    <Text style={styles.header}>Contact Information</Text>
                    <Text style={styles.standardText}><Text style={{fontWeight:'bold'}}>Name:</Text> {house.owner.user.first_name} {house.owner.user.last_name}</Text>
                    <Text style={styles.standardText}><Text style={{fontWeight:'bold'}}>Company:</Text> {house.owner.company_name}</Text>
                    <Text style={styles.standardText}><Text style={{fontWeight:'bold'}}>Phone:</Text> {house.owner.phone_number}</Text>
                </View>
                <View style={styles.block}>
                    <Text style={styles.header}>Tags</Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around',
                        alignItems: 'stretch',
                        flexWrap: 'wrap'}}>
                        {this.getTags()}
                    </View>
                </View>
            </View>
        </ScrollView>
        )
    }
}

export default DetailsScreen;