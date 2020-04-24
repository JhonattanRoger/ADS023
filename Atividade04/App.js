import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TelaFlex from './screens/TelaFlex';
import TelaFlex from './screens/TelaFlexDirection';

export default function App() {
  return (
    <View style={styles.container} TelaFlexDirection>
     <Header>Meu App</Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },
});
