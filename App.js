// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */
//
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, Image} from 'react-native';
// import ApolloClient from "apollo-boost";
// import { ApolloProvider, graphql } from 'react-apollo';
// import gql from "graphql-tag";
//
// const client = new ApolloClient({
//   uri:"http://127.0.0.1:8000/graphql/"
// });
// const query = {
//   hello: gql`
//   Houses()
//           `
// };
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
// class Greeting extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}> Welcome {this.props.name} </Text>
//       </View>
//     )
//   }
//
// }
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//         <ApolloProvider client={client}>
//           <View>
//
//           </View>
//         </ApolloProvider>
//       //   <View style={styles.container}>
//       //   <Image style={{width:100, height: 100}} source={{uri:"https://s3.amazonaws.com/tinycards/image/0c771449acaecb388c58d8805d966f61"}}/>
//       //   <Greeting name="Joshua"/>
//       // </View>
//     );
//   }
// }
//

import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    loading:{
        textAlign: 'center',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

// Main App export
export default class ApolloApp extends React.Component {
  render() {
    return(
        <ApolloProvider client={client}>
        <Text style={styles.header}>Housing</Text>
          <SafeAreaView style = {styles.container}>

              <HousingList />
          </SafeAreaView>
        </ApolloProvider>
    );
  }z
}

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://192.168.0.21:8000/graphql/' }),
  cache: new InMemoryCache().restore({}),
});

const Houses_QUERY = gql`
{
  houses{
    properties{
      address
    }
  }
}
`;
const HousingList = graphql(Houses_QUERY)(({ data }) => {
  const { loading, houses } = data;
  const rows = [];
  if (loading) {
      return <View><Text style={styles.loading}>loading...</Text></View>;
  } else {
      for (var i=0; i < houses.length; i++){
          rows.push(<Text>{houses[i]['properties']['address']}</Text>)
      }
      return (rows)
  }
});