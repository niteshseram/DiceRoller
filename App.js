import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      uri: require('./src/images/dice1.png'),
      uri2: require('./src/images/dice3.png')
    };
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6 )+1;
  }
  playButtonPressed = () => {
    let rNumber = this.getRandomValue();
    let rNumber2= this.getRandomValue();
    switch (rNumber) {
      case 1:
        this.setState({uri: require('./src/images/dice1.png')})
        break;

      case 2:
        this.setState({uri: require('./src/images/dice2.png')})
        break;
      case 3:
        this.setState({uri: require('./src/images/dice3.png')})
        break;
      case 4:
        this.setState({uri: require('./src/images/dice4.png')})
        break;
      case 5:
        this.setState({uri: require('./src/images/dice5.png')})
        break;
      case 6:
        this.setState({uri: require('./src/images/dice6.png')})
        break;
    
      default:
        this.setState({uri: require('./src/images/dice1.png')})
        break;
    }


    switch (rNumber2) {
      case 1:
        this.setState({uri2: require('./src/images/dice1.png')})
        break;

      case 2:
        this.setState({uri2: require('./src/images/dice2.png')})
        break;
      case 3:
        this.setState({uri2: require('./src/images/dice3.png')})
        break;
      case 4:
        this.setState({uri2: require('./src/images/dice4.png')})
        break;
      case 5:
        this.setState({uri2: require('./src/images/dice5.png')})
        break;
      case 6:
        this.setState({uri2: require('./src/images/dice6.png')})
        break;
    
      default:
        this.setState({uri2: require('./src/images/dice3.png')})
        break;
    }

  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image
          style={styles.image} 
          source ={ this.state.uri }
          />
          <Image
          style={styles.image} 
          source ={ this.state.uri2 }
          />
        </View>
        
        <TouchableOpacity
        onPress={this.playButtonPressed}
        >
          <Text style={styles.gamebutton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1287A5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gamebutton:{
    marginTop: 150,
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    backgroundColor: "#47535E",
    borderColor: "#ffffff",

  },
  imagecontainer:{
    flexDirection: "row"
  },
  image :{
    width: 200,
    height:200
  }
});
