import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
/* import firebase from "firebase/app";
import "firebase/auth"; */

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.home}>Home </Text>
      <TouchableOpacity activeOpacity={.6} style={styles.btncover} /* onPress={() => firebase.auth().signOut()} */>
      <Text style={styles.logout}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    flex:1, 
    justifyContent:'center',
    alignItems:'center'
  },

  home : {
    fontFamily:'OpenSans-Medium',
  },  
  logout : {
    backgroundColor:'#ffb36d',
    color:'#fff',
    fontFamily:'OpenSans-Bold',
    textAlign:'center',
    padding:15,
    borderRadius:10,
  },
  btncover: { 
    textAlign:'center',
    width:'80%',
    marginVertical:10,
    
  },
})