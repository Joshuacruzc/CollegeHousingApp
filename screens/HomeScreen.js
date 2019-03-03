import {Text, View, Button, Slider} from "react-native";
import {styles} from "../Styles";
import React from "react";


class HomeScreen extends React.Component {
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
            <View style={styles.container}>
                <Text style={styles.centeredText}> Maximum Distance:  {String(distance)}</Text>
                <Slider style={ { width:100 }}
                        maximumValue={100}
                        onValueChange={this.change.bind(this)}
                        value={distance}
                />
                <Button title="Search"
                        onPress={() => navigation.navigate('List')}
                />
            </View>
        )
    }
}

export default HomeScreen;