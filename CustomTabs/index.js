import React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Content, Header, Tab, Tabs } from 'native-base';
import HeaderComponent from '../HeaderComponent';
import Testing1 from '../Testing1';
import Testing2 from '../Testing2';
import Testing3 from '../Testing3';
import Testing4 from '../Testing4';
import Testing5 from '../Testing5';

export default class CustomTabs extends React.Component {
  constructor(props, context) {
    super(props, context); 
    this.state = {
      stateCallback: props.stateCallback,
    };
  }

  changeLoadState() {
    this.state.stateCallback();
  }

  render() {
    return (
      <Container>
        <HeaderComponent stateCallback={this.changeLoadState.bind(this)} />
        <Content>            
            <Tabs style={styles.mainTab}>
                <Tab heading="Test 1">
                    <Testing1 />
                </Tab>
                <Tab heading="Test 2">
                    <Testing2 />
                </Tab>
                <Tab heading="Test 3">
                    <Testing3 />
                </Tab>
                <Tab heading="Test 4">
                    <Testing4 />
                </Tab>
                <Tab heading="Test 5">
                    <Testing5 />
                </Tab>
            </Tabs>
        </Content>
      </Container>
    );
  }
}

CustomTabs.propTypes = {
    stateCallback: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {      
  },
  mainTab: {
    
  },
});
