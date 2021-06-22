import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import PlantScreen from './PlantScreen';
import CutScreen from './CutScreen'
import AppHeader from '../components/AppHeader';



export default class DecisionScreen extends React.Component {
  render(){
  
    return(
    <View style={styles.container}>
      <Text>Decision Screen</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('PlantScreen')}>
        <Text style={styles.buttonText}>Plant a Tree</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('CutScreen')}>
        <Text style={styles.buttonText}>Cut a Tree</Text>
      </TouchableOpacity> 
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  /*text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },*/
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

