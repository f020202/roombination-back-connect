import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

function MainScreen({ navigation }) {

  const [count, setCount] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.all}>
      <View style={styles.header}>
        <Text style={{ fontWeight: '900', fontSize: 45, color: "#6fbbf2", marginTop: 215, }}>Roombi.</Text>
      </View>

      <View style={styles.detail}>
        <Text style={{ fontWeight: '800', fontSize: 14, color: "lightgrey", }}>
          당신에게 필요한 맞춤 인테리어
        </Text>
      </View>

      <View style={styles.one}>
        <TextInput placeholder={'Username'}
          style={styles.input} />
        <TextInput placeholder={'password'}
          style={styles.input} />
      </View>

      <StatusBar style="auto" />

      <TouchableOpacity onPress={() => navigation.navigate('budget', { click: count })} activeOpacity={0.6} style={{ opacity: 0.8 }}>
        <LinearGradient
          colors={['#81d8f6', '#62cef4', '#5fc7f1', '#6fbbf2', '#79b4f3', '#74a6f3']}
          start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
          style={{ height: 45, width: 325, borderRadius: 15, marginTop: 25, marginBottom: 5 }}>
          <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', fontWeight: '900', marginTop: 13, }}>로그인</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row',marginTop: 40, }}>
        <Text style={{color:"grey", }}>회원이 아니신가요?</Text>
        <Text style={{color:"#01A9DB",fontWeight: 'bold',  }} onPress={() => navigation.navigate('register')}> 회원가입 하기</Text>
      </View>
      <View style={{ flexDirection: 'row',marginTop: 5, }}>
        <Text style={{color:"grey", }}>비밀번호를 잊으셨나요?</Text>
        <Text style={{color:"#01A9DB",fontWeight: 'bold',  }} onPress={() => navigation.navigate('password')}> 비밀번호 찾기</Text>
      </View>


      </View>

      
    </View>
  );

} export default MainScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  all: {
    backgroundColor: '#FFFFFF',
    alignItems:'center'
  },
  header: {
    flexDirection: 'column',
    //alignItems:'center',
    marginTop: 12
  },
  detail: {
    backgroundColor: "white",
    flexDirection: 'Low',
    //alignItems:'center',
    bordercolor: 'black'
  },
  one: {
    backgroundColor: 'white',
    marginTop: 60,
  },
  input: {
    backgroundColor: '#f4f4f4',
    marginTop: 10,
    width: 325,
    height: 45,
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 15,
    textAlign: 'center'
  },

  btn: {
    flex: 1,
    backgroundColor: "#078C74",
    paddingVertical: 15,
    marginLeft: 10,
    width: 300,
    borderRadius: 15,
    marginTop: 10,
  },


});