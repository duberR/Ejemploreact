import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Vista1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Vista2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Vista3</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   flexDirection:'column'
  },
  text: {
    color: '#ff1744'

  },
  box1:{
    flex:1,
    backgroundColor:'#ffc107'
  },
  box2:{
    flex:1,
    backgroundColor:'#0d47a1'
  },
  box3:{
    flex:1,
    backgroundColor:'#d50000'
  }
});
