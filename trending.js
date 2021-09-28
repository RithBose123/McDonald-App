
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  Button,
  Image,
  TextInput
} from 'react-native';
import firebase from 'firebase';
import Constants from 'expo-constants';
let rith = 200;
let menu = require('./menu.json');
import Food from './foodCard';
import { RFValue } from 'react-native-responsive-fontsize';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default class Trending extends Component {
  constructor(props){
    super(props)
    this.state={
  burger:0,
  frenchFries:0,
  mcSaver:0,
address:""
    }
  }

 async addBurgerAction(){
  await firebase.database().ref("/Added/"+firebase.auth().currentUser.uid+"/burger/")
  .set({
    burger:this.state.burger+=1
   } ).then(function(data){

   })
 }
 async burgerAction(){
  await firebase.database().ref("/Added/"+firebase.auth().currentUser.uid+"/burger/")
  .set({
    burger:this.state.burger-=1
   } ).then(function(data){

   })
 }
 async addFrenchFriesAction(){
  await firebase.database().ref("/Added/"+firebase.auth().currentUser.uid+"/FrenchFries/")
  .set({
    frenchFries:this.state.frenchFries+=1
   }).then(function(data){

   })
 }
  render() {

    return (
      <View style={{ backgroundColor: 'red',flex:1 }}>
        <SafeAreaView
          style={{
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 18,
          }}
        />
        <Text style={{ color: 'white', fontSize: 50, textAlign:"center" }}>
          McDonald's
        </Text>
   
         
      
          
        <ScrollView >
        <View style={{marginBottom:10,borderWidth:4,flex:0.9 }} >
      <Image source={{uri:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1600759909/Item/3620.jpg"}} style={{height:90,width:90}} />
      <Text style={{fontSize:20,color:"white"}}>burger                      200₹</Text>
      <Text style={{fontSize:10,color:"white"}}>very tasty</Text>
      <Button title="Add" color="black" onPress={()=>{
        this.addBurgerAction()
       food=this.state.burger
      }} />
       <Button title="decrease" color="black" onPress={()=>{
     this.burgerAction()
      }} />

      </View>
      <View style={{marginBottom:10,borderWidth:4 }} >
      <Image source={{uri:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1600759909/Item/3620.jpg"}} style={{height:90,width:90}} />
      <Text style={{fontSize:20,color:"white"}}>french fries                200₹</Text>
      <Text style={{fontSize:10,color:"white"}}>very tasty</Text>
      <Button title="Add" color="yellow" onPress={()=>{
        this.addFrenchFriesAction();
      }} />
      </View>
      <View style={{marginBottom:10,borderWidth:4 }} >
      <Image source={{uri:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1600759909/Item/3620.jpg"}} style={{height:90,width:90}} />
      <Text style={{fontSize:20,color:"white"}}>Burger                      200₹</Text>
      <Text style={{fontSize:10,color:"white"}}>very tasty</Text>
      <Button title="Add" color="yellow" fontSize />
      </View>
      <View style={{marginBottom:10,borderWidth:4 }} >
      <Image source={{uri:"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1600759909/Item/3620.jpg"}} style={{height:90,width:90}} />
      <Text style={{fontSize:20,color:"white"}}>Burger                      200₹</Text>
      <Text style={{fontSize:10,color:"white"}}>very tasty</Text>
      <Button title="Add" color="yellow" fontSize />
      </View>
      </ScrollView>
      </View>
    );
  }
}
