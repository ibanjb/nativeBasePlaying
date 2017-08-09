import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {  Header, Left, Right, Body, Icon, Button, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

export default class HeaderComponent extends React.Component {  
  constructor(props, context) {
    super(props, context);    
    this.state = {
      stateCallback: props.stateCallback,
    };
  }

  onHeaderButtonPress() {
    this.state.stateCallback();
  }

  render() {
    const imgBackground = require('../img/background.png');
    return (
      <Header style={styles.container}>
          <Left>
            <Button transparent onPress={this.onHeaderButtonPress.bind(this)}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
              <Text style={styles.text}> 
                This is the header component
              </Text>
          </Body>
          <Right />
        </Header>
    );
  }
}

HeaderComponent.propTypes = {
    stateCallback: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {      
  },
  text: {
    //marginLeft: 20,
    //paddingTop: 60,
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 120,
  },
});
