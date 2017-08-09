import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Content, Text } from 'native-base';

export default class Testing1 extends React.Component {
  constructor(props, context) {
    super(props, context);    
  }

  render() {
    const imgBackground = require('../img/background.png');
    return (
      <Container style={styles.container}>       
        <Content>
            <Image source={imgBackground} style={styles.backgroundImage}>
            <Text style={styles.text}> 
              Testing 1
            </Text>
          </Image>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
  text: {
    marginLeft: 20,
    color: '#FAFAFA',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
