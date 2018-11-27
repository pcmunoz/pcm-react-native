import React from 'react';
import { TextInput, Text, View } from 'react-native';

class PizzaScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  static navigationOptions = {
    title: 'Pizza',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

export default PizzaScreen;
