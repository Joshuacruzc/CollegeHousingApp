import {Text, View, Button, Slider} from "react-native";
import {styles} from "../Styles";
import React from "react";
import Swiper from "react-native-swiper"

class FilterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            distance: 100,
        };
    }
    change(distance) {
        this.setState(() => {
            return {
                distance: parseFloat(distance),
            };
        });
    }
    render()
    {
    const { navigation } = this.props;
    const { distance } = this.state;
        return (
            <Swiper style={styles.wrapper} showButtons={false} loop={false}>
                <View style={styles.container}>
                    <Text style={styles.centeredText}> Maximum Distance:  {String(distance)}</Text>
                    <Slider style={{ width:100 }}
                            maximumValue={100}
                            onValueChange={this.change.bind(this)}
                            value={distance}
                    />
                    <Button title="Search " style={{width: 200}}
                            onPress={() => navigation.navigate('List',
                                {
                                    distance: this.state.distance,
                                    college_id: 1,
                                })}
                    />
                </View>
       <View style={styles.slide1}><Text style={styles.text}>Hola1</Text></View>
                <View style={styles.slide2}><Text style={styles.text}>Hola2</Text></View>
    </Swiper>
        )
    }
}

export default FilterScreen;