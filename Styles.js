import {StyleSheet} from "react-native";

const colors = ['#FF6066','#05C693','#264653','#247BA0', '#964FDD'];// '#FD9947','#39CA39'];
export const getPaletteColors = () => {
    return colors;
};
export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        backgroundColor: "#08486D",
        color: "white",
        fontSize: 20,
        fontFamily: 'lucida grande',
        borderBottomWidth:2,
        borderBottomColor: "grey",
        padding:2,
    },
    standardText: {
        fontSize: 18,
        margin: 5,
        color: 'black',
    },
    block: {
        marginBottom: 5,
        backgroundColor:'white',
        borderRadius: 5,
    },
    list_item: {
        height: 150,
        textAlign: 'center',
        color: '#333333',
        borderBottomWidth:2,
        borderBottomColor: "black",
    },
    loading:{
        textAlign: 'center',

        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewPager: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});

