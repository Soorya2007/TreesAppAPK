import React from 'react';
import {StyleSheet,Text,View,Button,TouchableOpacity,Header,Image,TextInput} from 'react-native';
import AppHeader from '../components/AppHeader';
import firebase from 'firebase';
import db from '../config'
export default class CutScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      reasonForCuttingTree : ''
    }
  }
  updateReason=()=>{
    db.collection('users').add({
      'reasonToCutTree' : this.state.reasonForCuttingTree,
    })
  }

  render(){
    return(
      <View style={{backgroundColor:'#1dff00'}}>
      <View>
      <Text style={StyleSheet2.header}>Planting Trees</Text>
      <Image
      source={require("../assets/backArrow.png")}
      style={StyleSheet2.imageStyle}/>
      <Text>   </Text>
      <TouchableOpacity 
      onPress={() => this.props.navigation.goBack()}
      style={StyleSheet2.button}><Text style={StyleSheet2.buttonTxt}>Back</Text></TouchableOpacity>
      </View>
      <View style={StyleSheet2.textView}>
      <Text>One of the disadvantages brought about by deforestation is the destruction of the natural habitat of animals and birds living in the forests. With continuous cutting down of trees, wild animals and birds that use these trees as their homes find themselves with nowhere to go. This has also exposed them to danger from hunters and poachers. Consequently, birds migrate to other places looking for home and they sometimes die in the process from natural causes and predators. This also reduces the number of these birds and animals, making extinction possible.
      </Text>
      <Text>   </Text>
      <Text>
      With lesser trees to slow down the fall of water coming from the mountains during strong typhoons and to absorb water as well, flooding and overflowing of rivers can result to these which can lead to loss of property and lives. Moreover, with one of the methods of this practice is through burning trees, forest fires can happen. Not only does this put the lives of wild animals in danger but it can also reach the houses nearby and lead to thousands of dollars of property damage.
      </Text>
      <Text>   </Text>
      <Text>
      Deforestation can also put a dent in the field of science and medicine. If deforestation worsens, this would mean there will be lesser trees and plants which are also sources of medicine. With the careless burning of trees, even plants that can be used as alternative medicines can be affected. 
      </Text>
      <Text>   </Text>
      <Text>
     The abrupt and irreversible consequences of global deforestation can certainly put the existence of human beings and the whole world at risk.
      </Text>
      <Text>   </Text>
      <Text>
      Trees extract water from the soil and release it to the atmosphere. These add to the moisture in the air and also trap precipitation. With no trees to transpire water, the soil will dry up and this can lead to drought especially in the summer months
      </Text>

      <Text>   </Text>
      <Text>   </Text>
      <Text>   </Text>
      <Text>   </Text>
      <Text
      style={{
        fontWeight:"bold",
        textAlign:'center'
      }}>This is optional</Text>
      <Text style={{textAlign:'center'}}>  | </Text>
      <Text style={{textAlign:'center'}}>  | </Text>
      <Text style={{textAlign:'center'}}> V</Text>
      <TextInput
      style={StyleSheet2.txtInput}
      multiline
      placeholder="Why did you cut the tree?"
      onChangeText={(text)=>{
        this.setState({
          reasonForCuttingTree:text
        })
        }
      }
      />
      <Text> </Text>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity
      onPress={()=>{
        this.updateReason,
        alert("Reason Successfully Submitted")
      }}
      >
      <Text
      >
      Submit
      </Text>
      </TouchableOpacity>
      </View>
      </View>
    )
  }
}

const StyleSheet2 = StyleSheet.create({
    header:{
      color:'0018f9',
      textAlign:'center',
      backgroundColor:'yellow',
      fontSize:20,
      fontWeight:"bold",
      height:30,
    },
    button:{
      border:3,
      borderColor:'#001bff',
      //backgroundColor:'#ff0000',
      marginTop:-40,
      marginLeft:20,
      width:40,
      height:35,
      alignItems:'center'
    },
    buttonTxt:{
      color:'#827e78',
      fontWeight:"bold",
      textAlign:'center',
      display:'inline',
      textShadowColor: '1px 1px 2px violet, 0 0 25px #5b85f8, 0 0 5px #121219'
    },
    imageStyle:{
      width:30,
      height:20,
      marginTop:-24
    },
    textView:{
      backgroundColor:'#1dff00'
    },
    txtInput:{
      backgroundColor:"#ed4040",
      border:30,
      height:100,
      borderTopColor:'#f23a3a',
      borderBottomColor:'#f23a3a',
      borderLeftColor:'#00ffd0',
      borderRightColor:'#00ffd0',
      margin:30
    }
})