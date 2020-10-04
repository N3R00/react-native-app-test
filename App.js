import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import axios from 'axios';

class App extends Component {
  state = {
    rook: 0
  }

  findRook = async () => {
    let response = await axios.get(`https://appsorteos.herokuapp.com/rook`);
    this.setState({
        rook: response.data
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.findRook}
        >
         <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>
            {this.state.rook._id}
          </Text>
          <Text style={styles.text}>
            {this.state.rook.nome_sorteando}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  text: {
      textAlign: 'center'
  }
})

export default App;
