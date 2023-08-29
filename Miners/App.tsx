/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
const uri ='https://media.istockphoto.com/id/143918313/es/foto/excavator-en-solar-de-construcci%C3%B3n.jpg?s=612x612&w=0&k=20&c=xN1K2Okh0-ToXDq2iOXRxJBGZufxIgQCl94nP_w8c-g=';
const log = 'https://img.freepik.com/vector-premium/dibujo-dibujos-animados-minero_29937-8158.jpg?w=2000';
const App = () => {
  return (
<View style = {styles.container}>
    <Image source={{uri}} style ={[styles.image, StyleSheet.absoluteFill]} />
    <ScrollView contentContainerStyle ={{
      flex:1,
      width: '100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center',
    }}>
      <View style={styles.login}>
    <Image source={{uri: log}} style={styles.log}/>
    <View>
      <Text style={{fontSize:17, fontWeight:'400', color:'white'}}>Correo Electrónico</Text>
      <TextInput style={styles.input} placeholder='pepitoPerez@ejemplo.com' />
      </View>  
      <View>
      <Text style={{fontSize:17, fontWeight:'400', color:'white'}}>Contraseña</Text>
      <TextInput style={styles.input} placeholder='********'  secureTextEntry={true}/>
      </View> 
        <TouchableOpacity style ={styles.button}>
          <Text style={{fontSize:17, fontWeight:'400', color: 'white'}}> Ingresar </Text>
          </TouchableOpacity>  
          <TouchableOpacity style ={styles.button}>
          <Text style={{fontSize:17, fontWeight:'400', color: 'white'}}> Registrarse </Text>
          </TouchableOpacity>  
    </View>
    </ScrollView>
  </View>
  );
};
const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image : {
    width: '100%',
    height:'100%',
    resizeMode: 'cover',
  },
  login: {
width:350,
height:500,
borderColor: '#fff',
backgroundColor: '#E9D06190',
borderWidth:2,
borderRadius:20,
padding: 10,
alignItems: 'center',
  },
  log: {
    width: 100,
    height:100,
    borderRadius:50,
    borderColor: '#fff',
    borderWidth:1,
    marginVertical:30,
  },
 input:{
width:250,
height: 40,
borderColor:'#fff',
borderWidth:2,
borderRadius:10,
padding:10,
marginVertical: 10, 
backgroundColor: '#ffffff90',
marginBottom:20,
 },
 button:{
  width:250,
  height:40,
  borderRadius:10,
  backgroundColor:'#D7E1E180',
  alignItems:'center',
  justifyContent:'center',
  marginVertical: 10,

 },
});
export default App;
