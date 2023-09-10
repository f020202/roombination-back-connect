import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'


function MainScreen({ navigation }) {

    const saveItem = () => {
        Alert.alert(
        "저장",
        "저장되었습니다!",
        [
          {
            text: "확인",
            onPress: () => console.log("저장완료"),
          },
        ],
        { cancelable: false }
        );
      };
    

  return (

    <View style={styles.container}>

      <View style={styles.ask1}>
        <Text style={styles.askcolor}>전체 예산을</Text>
        <Text style={styles.askcolor}>알려주세요</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          returnKeyType="done"
          placeholder="250,000" />
        <Text style={{ fontSize: 38, color: "#ACABAB", marginTop: 36.5, fontWeight: "400", marginLeft:10 }}>원</Text>
      </View>
      <View style={styles.box2}></View>



      <View style={{ flex: 0.7, marginTop: 250, alignItems: 'flex-end', }}>

        <TouchableOpacity onPress={() => saveItem()} activeOpacity={0.5} style={{ opacity: 0.7 }}>
          <LinearGradient
            colors={['#81d8f6', '#62cef4', '#5fc7f1', '#6fbbf2', '#79b4f3', '#74a6f3']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            style={{ height: 47, width: 100, borderRadius: 15, marginTop: 10, marginBottom: 5 }}>
            <Text style={{ color: 'white', fontSize: 18, textAlignVertical: "center", textAlign: 'center', fontWeight: '900', marginTop: 15, }}>저장하기</Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    </View>
  );

} export default MainScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  ask1: {
    flex: 0.3,
    justifyContent: "center",
    marginTop: 250,
    marginBottom: 20,
  },
  askcolor: {
    fontSize: 28,
    fontWeight: "900",
  },
  textInput: {
    borderColor: 'white',
    fontSize: 40,
    marginTop: 30,
  },
  box: {
    marginBottom: 10,
  },
  box2: {
    backgroundColor: "#5e5e5e",
    opacity: 0.2,
    height: 1.2,
    marginRight: 122,
    marginTop: 3,
  },
  button: {
    flex: 1.4,
    marginLeft: 286,
  }
})
