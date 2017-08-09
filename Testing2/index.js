import React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Content, Text } from 'native-base';

export default class Testing2 extends React.Component {
  constructor(props, context) {
    super(props, context);    
  }

    render() {
    return (
      <Container style={styles.container}>       
        <Content>
          <Text> 
             Testing 2
          </Text>
        </Content>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {      
  },
});
