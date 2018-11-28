import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Test!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          title="Go to Pizza"
          onPress={() => navigate('Pizza')}
        />
        <Button
          title="Go to Button"
          onPress={() => navigate('Button')}
        />
        <Button
          title="Go to Scroll"
          onPress={() => navigate('Scroll')}
        />
        <Button
          title="Go to FlatList"
          onPress={() => navigate('FlatList')}
        />
        <Button
          title="Go to SectionList"
          onPress={() => navigate('SectionList')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;