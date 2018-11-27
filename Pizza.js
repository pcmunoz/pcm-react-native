import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class PizzaScreen extends React.Component {
  static navigationOptions = {
    title: 'Pizza',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Test!</Text>
        <Button
          title="Go Home"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

export default PizzaScreen;
