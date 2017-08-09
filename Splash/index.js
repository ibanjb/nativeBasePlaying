import React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Login from '../Login';

export default class Splash extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stateCallback: props.stateCallback,
    }
  }

  changeLoadState() {
    this.state.stateCallback();
  }

  render() {    
    return (
      <Container>
        <Header style={styles.header}>
           <Image source={splashImage} style={styles.backgroundImage}>
                <Login stateCallback={this.changeLoadState.bind(this)} />
            </Image>
        </Header>
      </Container>
    );
  }
}

Splash.propTypes = {
    stateCallback: React.PropTypes.func.isRequired,
};

const splashImage = require('../img/splash.jpg');      
const styles = StyleSheet.create({
  header: {    
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'transparent',
    height: null,
    width: null,
  },
  backgroundImage: {    
    flex: 1,
    resizeMode: 'cover',
    height: Dimensions.get('window').height,    
  },
});
