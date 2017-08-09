import React from 'react';
import { StyleSheet, Dimensions, TouchableHighlight, View, Text, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Header, Button, Spinner, Form, Item, Input, Label, Thumbnail, Toast } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);    
    this.state = {
      behavior: 'position',    
      showToast: false,
      stateCallback: props.stateCallback,
    };    
  }

  onLoginPress() {
    console.log('onLoginPress');
    this.state.stateCallback();
  }

  render() {
    return (
        <View>          
          <StatusBar hidden={true} />
          <KeyboardAvoidingView behavior={this.state.behavior}>
            <View style={styles.container}>
                <View>
                    <Thumbnail large source={thumbnailImage} style={styles.thumbnail} />
                    <View style={styles.textContainer}>
                        <Text style={styles.mainText} >
                            I’ll build by own theme park. 
                        </Text>
                        <Text style={styles.mainText} >
                        With black jack, and hookers
                        </Text>
                        <Text style={styles.mainText} >
                        In fact, forget the park!
                        </Text>
                    </View>
                </View>
                
                <View style={styles.innerContainer}>
                  <Form>
                    <Item floatingLabel  style={[styles.input, styles.inputName]} > 
                        <Label>
                            Username
                        </Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={[styles.input, styles.inputPassword]}>
                        <Label>
                            Password
                        </Label>
                        <Input />
                    </Item>

                    <TouchableHighlight style={styles.button} onPress={this.onLoginPress.bind(this)}>
                        <Label style={styles.buttonText}> 
                            Login
                        </Label>
                    </TouchableHighlight>
                  </Form>  
                </View>
            </View>
            <Spinner color='#7094db' style={styles.spinner}/>
            <View style={styles.pinContainer}>
                <Ionicons
                    name='md-pin'
                    size={32}
                    style={{ color: '#1f3d7a' }}
                    />
                    <Text style={styles.mainText} >
                        Barcelona, Catalunya
                    </Text>
            </View>
          </KeyboardAvoidingView>
        </View>
    );
  }
}

Login.propTypes = {
    stateCallback: React.PropTypes.func.isRequired,
};

const splashImage = require('../img/splash.jpg');  
const thumbnailImage = require('../img/thumbnail.png');  
const containerMarginTop = ((Dimensions.get('window').height / 2)  - 280);
const spinnerMarginTop = containerMarginTop + 100;
const deviceWidth =  Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {      
    marginTop: containerMarginTop,    
    height: 300,
  },
  innerContainer: {
    marginTop: 50,
  },
  textContainer: {    
    marginTop: 10,    
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth - 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  mainText: {
    color: '#0f1f3d',    
    fontSize: 18,
    fontWeight: '600',    
  },
  pinContainer: {
    marginTop: 10,    
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth - 80,
  },
  spinner: {
    marginTop: spinnerMarginTop,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth - 80,
  },
  label: {
    color: '#7094db',
  },
  thumbnail: {
    marginLeft: (deviceWidth / 2) - 40,
  },
  input: {    
    borderWidth: 1,
    borderColor: '#1f3d7a',
    width: deviceWidth - 80,
    height: 50,    
    marginLeft: 40,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  inputName: {
    marginTop: 50,
  },
  inputPassword: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f3d7a',
  },
  button: {
    height: 45,
    alignItems: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 20,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth - 80,
  },
});
