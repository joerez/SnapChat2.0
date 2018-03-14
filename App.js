import React from 'react';
import { StyleSheet, Text, View, Slider, Image, ScrollView } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }


  render() {
    const {value} = this.state;

    return (
      <View style={styles.container}>
      <Text style={styles.btfo}>DEFINITELY SNAPCHAT</Text>

      <Image
        style={{width: this.state.value * 3, height: this.state.value * 3}}
        source={{uri: 'http://www.stickpng.com/assets/thumbs/584c4c1b1fc21103bb375bab.png'}}
      />

        <Slider
          step={1}
          maximumValue={100}
          onValueChange={this.change.bind(this)}
          value={value}
          style={styles.slider}>
        </Slider>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ee0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passion: {
    fontSize: 50
  },
  slider: {
    position: 'absolute',
    bottom: 10,
    width: 200
  },
  btfo: {
    fontSize: 30,
    textAlign: 'center',
    position: 'absolute',
    top: 200
  },
  scrollit: {
    marginTop: 310,
    height: 100
  },
});
