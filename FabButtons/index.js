import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, View, Button, Icon, Fab, Text, Badge,  Form, Item, Input, Label, Left, Body, Right, Title, Subtitle  } from 'native-base';

export default class FabButtons extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: false,
    };
  }

  fabVisibility() {
    this.setState({ 
        active: !this.state.active 
    });
  }

  render() {
    return (  
      <Container>
       <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' style={{color: 'red'}} />
            </Button>
          </Left>
          <Body>
            <Title>Title</Title>
            <Subtitle> Subtitle </Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content>
            <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
        <View style={styles.mainView}>
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={styles.fab}
                style={styles.fab}
                position="bottomRight"
                onPress={this.fabVisibility.bind(this)}>

                <Icon name="share" />

                <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-whatsapp" />
                </Button>

                <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="logo-facebook" />
                </Button>
                
                <Button style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="mail" />
                </Button>
            </Fab>
        </View>        
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {      
  },
  mainView: {
    flex: 1,    
  },
  fab: {
    backgroundColor: '#5067FF',
  },
  logoWhatsapp: {
    backgroundColor: '#34A34F',
  },
  logoFacebook: {
    backgroundColor: '#3B5998',
  },
  logoEmail: {
    backgroundColor: '#DD5144',
  },
});