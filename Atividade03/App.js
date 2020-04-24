import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return ( 
    
    <View style={ [styles.container, styles.titulo] }>
       <View></View>
    </View>   
 );

  console.log("Chamou a função App()!");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    color: 'red'
  }
});
