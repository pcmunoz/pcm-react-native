import React, { Component } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

interface Props {
  item:any;
  navigate:any;
}

class NavItem extends Component<Props, void> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {item, navigate} = this.props;
    return (
      <View>
        <Text style={styles.item}>{item.key}</Text>
        <Button
          title={ "Go to " + item.key }
          onPress={() => navigate(item.key)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default NavItem;