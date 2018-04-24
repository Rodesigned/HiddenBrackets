import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi Kin Folk</Text>
        <Text>This is the start of our app.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB677',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
