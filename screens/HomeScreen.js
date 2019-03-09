import {Text, View, Button, Slider} from "react-native";
import {styles} from "../Styles";
import React from "react";
import Swiper from "react-native-swiper"


class HomeScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View styles={styles.wrapper}>
                <Text style={styles.standardText}>Ubicate</Text>
                <Button title={"Seeking Housing"} onPress={() => navigation.navigate('Filters')}/>
            </View>
        )
    }
}

export default HomeScreen;