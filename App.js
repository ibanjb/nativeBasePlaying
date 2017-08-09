import React from 'react';
import { Root } from "native-base";
import { StyleSheet, Image, View } from 'react-native';
import CustomTabs from './CustomTabs';
import Splash from './Splash';
import TestDeckSwiper from './TestDeckSwiper';
import FabButtons from './FabButtons';
import HeaderSearchBar from './HeaderSearchBar';
import ToastComponent from './ToastComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  changeLoadState() {
    const loaded = this.state.isLoaded;
    this.setState({
      isLoaded: !loaded,
    });
  }

  renderToastComponent() {
    return (
      <Root>
        <ToastComponent />
      </Root>
    );
  }  

  renderHeaderSearchBar() {
    return (
      <HeaderSearchBar />
    );
  }

  renderFabButtons() {
    return (
      <FabButtons />
    );
  }

  renderTestDeckSwiper() {
    return (
      <TestDeckSwiper />
    );
  }

  renderCustomTabs() {
    return (
      <CustomTabs stateCallback={this.changeLoadState.bind(this)} />
    );    
  }

  renderLoadingScreen() {
    return (
       <Splash stateCallback={this.changeLoadState.bind(this)} />
    );
  }

  render() {
    const isLoaded = this.state.isLoaded;
    if (isLoaded) {
      return this.renderCustomTabs();
    } else {
      return this.renderToastComponent();
    }        
  }
}

const styles = StyleSheet.create({
  splashContainer: {
      height: '100%',
      width: '100%',
      backgroundColor: '#009AFF',
      justifyContent: 'center',
      alignItems: 'center',
  }, 
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 130,
    height: 100,
  }
});
