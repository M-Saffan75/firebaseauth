import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import "firebase/auth";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Login = ({navigation}) => {
  
  const [values, setValues] = useState({
    email: "",
    pwd: "",
  })

  function handleChange(text, eventName) {
    setValues(prev => {
      return {
        ...prev,
        [eventName]: text
      }
    })
  }

  function Login () {

    const [email,pwd] = values
    firebase.auth().signInWithEmailAndPassword(email, pwd)
      .then(() => {
        navigation.replace('Home')
      })    

      .catch((error) => {
        alert(error.message);
      });
  }
  const [hidePass, setHidePass] = React.useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          onChangeText={text => handleChange(text, "email")}
          style={styles.textInput}
          placeholderTextColor='grey'
        />
        <View style={styles.viewfont}>
          <TextInput
            placeholder='Password'
            onChangeText={text => handleChange(text, "pwd")}
            style={styles.textInputpassword}
            secureTextEntry={hidePass ? true : false}
            placeholderTextColor='grey'
          />

          <View style={styles.icon}>
            <FontAwesome5 name={hidePass ? 'eye-slash' : 'eye'} onPress={() => setHidePass(!hidePass)} style={styles.icon} />
          </View>

        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.Backbtn} activeOpacity={.6} onPress={() => Login()}>
          <Text style={styles.btn} >Login</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.line} onPress={() => navigation.navigate("SignUp")}>Dont havnt account ?</Text>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    flex: 1,

  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {

    color: '#ffb36d',
    fontSize: 18,
  },
  viewfont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    borderColor: '#ffb36d',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  textInput: {
    borderColor: '#ffb36d',
    borderBottomWidth: 2,
    width: '80%',
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 5,
    letterSpacing: .5,
    color: '#000',
    paddingBottom: 5,
    fontFamily: 'OpenSans-Medium',

  },

  textInputpassword: {
    paddingBottom: 5,
    paddingHorizontal: 0,
    width: '90%',
    color: '#000',
  },
  Backbtn: {
    backgroundColor: '#ffb36d',
    width: '80%',
    color: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    padding: 12,
    textAlign: 'center',
    marginVertical: 10,
  },
  btn: {
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    letterSpacing: .7,
    fontFamily: 'OpenSans-Bold',

  },
  account: {
    marginVertical: 10,
    color: '#000',
    letterSpacing: .9,
    textAlign: 'center'
  },
  line: {
    paddingVertical: 20,
    color: '#1b1b1b',
    textAlign: 'center',
    fontFamily: 'OpenSans-Medium',
    letterSpacing: .6,
  },
})