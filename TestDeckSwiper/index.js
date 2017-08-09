import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../img/blue.jpg'),
  },{
    text: 'Card Two',
    name: 'Two',
    image: require('../img/circles.jpg'),
  },{
    text: 'Card Three',
    name: 'Three',
    image: require('../img/geometric.jpg'),
  },{
    text: 'Card Four',
    name: 'Four',
    image: require('../img/stars.jpg'),
  },
];

export default class TestDeckSwiper extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={styles.card}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={item.image} style={styles.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={styles.icon} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {      
  },
  card: {
    elevation: 3
  },
  image: {
    height: 300, 
    flex: 1
  },
  icon: {
    color: '#ED4A6A'
  }
});
