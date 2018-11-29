import React, { Component } from 'react';
import { FlatList, StyleSheet} from 'react-native';
import NavItem from './Item';

interface Props {
  navigate:any;
}

class NavList extends Component<Props, void> {
  render() {
    const pages = [
            {key: 'Pizza'},
            {key: 'Button'},
            {key: 'Scroll'},
            {key: 'FlatList'},
            {key: 'SectionList'},
          ];
    return (
        <FlatList
          data={pages}
          renderItem={({item}) => <NavItem item={item} navigate={this.props.navigate}/>}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  }
})

export default NavList;