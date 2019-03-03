import {StyleSheet} from "react-native";

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        backgroundColor: "#3170d6",
        color: "white",
        fontSize: 30,
        textAlign: 'center',
        borderBottomWidth:2,
        borderBottomColor: "purple",
        paddingTop: 10,
        paddingBottom:10,
    },
    centeredText: {
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom:10,
    },
    list_item: {
        height: 100,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
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
    }
});

export { styles }
