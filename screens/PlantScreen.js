import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Header,
  Image,
  TextInput,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import firebase from 'firebase';
import db from '../config';
export default class PlantScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      reasonForPlantTree: '',
    };
  }
  updateReason = () => {
    db.collection('users').add({
      reasonToPlantTree: this.state.reasonForPlantTree,
    });
  };

  render() {
    return (
      <View style={{ backgroundColor: '#1dff00' }}>
        <View>
          <Text style={StyleSheet2.header}>Planting Trees</Text>
          <Image
            source={require('../assets/backArrow.png')}
            style={StyleSheet2.imageStyle}
          />
          <Text> </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={StyleSheet2.button}>
            <Text style={StyleSheet2.buttonTxt}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={StyleSheet2.textView}>
          <Text>
            Many people decide to enrich their gardens by planting trees. Most
            of them do it for the beauty or to provide extra shade in summer
            months. However, there are more benefits from trees than you might
            think. Except for relaxing, connecting us with nature and their
            calming effect, trees do a lot when it comes to the environment.
          </Text>
          <Text> </Text>
          <Text>
            Trees make life nicer. It has been shown that spending time among
            trees and green spaces reduces the amount of stress that we carry
            around with us in our daily lives.
          </Text>
          <Text> </Text>
          <Text>
            Hospital patients have been shown to recover from surgery more
            quickly when their hospital room offered a view of trees
          </Text>
          <Text> </Text>
          <Text>
            Children have been shown to retain more of the information taught in
            schools if they spend some of their time outdoors in green spaces.
          </Text>
          <Text> </Text>
          <Text>
            Trees are often planted as living memorials or reminders of loved
            ones or to commemorate significant events in our lives.
          </Text>

          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            This is optional
          </Text>
          <Text style={{ textAlign: 'center' }}> | </Text>
          <Text style={{ textAlign: 'center' }}> | </Text>
          <Text style={{ textAlign: 'center' }}> V</Text>
          <TextInput
            style={StyleSheet2.txtInput}
            multiline
            placeholder="Why did you plant the tree?"
            onChangeText={(text) => {
              this.setState({
                reasonForPlantTree: text,
              });
            }}
          />
          <Text> </Text>
          <Text></Text>
          <Text></Text>
          <TouchableOpacity
            onPress={() => {
              this.updateReason, alert('Reason Successfully Submitted');
            }}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const StyleSheet2 = StyleSheet.create({
  header: {
    color: '0018f9',
    textAlign: 'center',
    backgroundColor: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
    height: 30,
  },
  button: {
    border: 3,
    borderColor: '#001bff',
    //backgroundColor:'#ff0000',
    marginTop: -40,
    marginLeft: 20,
    width: 40,
    height: 35,
    alignItems: 'center',
  },
  buttonTxt: {
    color: '#827e78',
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'inline',
    textShadowColor: '1px 1px 2px violet, 0 0 25px #5b85f8, 0 0 5px #121219',
  },
  imageStyle: {
    width: 30,
    height: 20,
    marginTop: -24,
  },
  textView: {
    backgroundColor: '#1dff00',
  },
  txtInput: {
    backgroundColor: '#ffff00',
    border: 30,
    height: 100,
    borderTopColor: '#f23a3a',
    borderBottomColor: '#f23a3a',
    borderLeftColor: '#00ffd0',
    borderRightColor: '#00ffd0',
    margin: 30,
  },
});
