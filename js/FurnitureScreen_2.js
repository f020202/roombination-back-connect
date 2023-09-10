import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, View, Image, navigation, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import * as Progress from 'react-native-progress';

import imagePath1 from '../assets/furniture/bed.jpg';
import imagePath2 from '../assets/furniture/desk.jpg';
import imagePath3 from '../assets/furniture/chair.jpg';
import imagePath4 from '../assets/furniture/sofa.jpg';
import imagePath5 from '../assets/furniture/cabinet.jpg';
import imagePath6 from '../assets/furniture/shelf.jpg';
import imagePath7 from '../assets/furniture/closet.jpg';
import imagePath8 from '../assets/furniture/light.jpg';
import imagePath9 from '../assets/furniture/rug.jpg';


function MainScreen({ navigation }) {

  const [overlay1, setOverlay1] = useState(false);
  const [overlay2, setOverlay2] = useState(false);
  const [overlay3, setOverlay3] = useState(false);
  const [overlay4, setOverlay4] = useState(false);
  const [overlay5, setOverlay5] = useState(false);
  const [overlay6, setOverlay6] = useState(false);
  const [overlay7, setOverlay7] = useState(false);
  const [overlay8, setOverlay8] = useState(false);
  const [overlay9, setOverlay9] = useState(false);


  const toggleOverlay1 = () => {
    setOverlay1(!overlay1);
  }
  const toggleOverlay2 = () => {
    setOverlay2(!overlay2);
  }
  const toggleOverlay3 = () => {
    setOverlay3(!overlay3);
  }
  const toggleOverlay4 = () => {
    setOverlay4(!overlay4);
  }
  const toggleOverlay5 = () => {
    setOverlay5(!overlay5);
  }
  const toggleOverlay6 = () => {
    setOverlay6(!overlay6);
  }
  const toggleOverlay7 = () => {
    setOverlay7(!overlay7);
  }
  const toggleOverlay8 = () => {
    setOverlay8(!overlay8);
  }
  const toggleOverlay9 = () => {
    setOverlay9(!overlay9);
  }

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

      <StatusBar style="block"></StatusBar>

      <View style={styles.ask1}>
        <Text style={styles.askcolor}>추천받을 가구 4개를</Text>
        <Text style={styles.askcolor}>선택해주세요</Text>

      </View>

      <View style={styles.day2}>
        <View style={styles.day}>

          <TouchableOpacity style={styles.cparent} onPress={() => toggleOverlay1()}>
            <Image style={styles.cchildImage} source={imagePath1} />
            {overlay1 && <View style={styles.cchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.cparent} onPress={() => toggleOverlay2()}>
            <Image style={styles.cchildImage} source={imagePath2} />
            {overlay2 && <View style={styles.cchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.cparent} onPress={() => toggleOverlay3()}>
            <Image style={styles.cchildImage} source={imagePath3} />
            {overlay3 && <View style={styles.cchildOverlay} />}
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: 25 }}>침대</Text>
          <Text style={{ marginLeft: 100 }}>책상</Text>
          <Text style={{ marginLeft: 95 }}>의자</Text>
        </View>


        <View style={styles.day}>
          <TouchableOpacity style={styles.cparent} onPress={() => toggleOverlay4()}>
            <Image style={styles.cchildImage} source={imagePath4} />
            {overlay4 && <View style={styles.cchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.cparent} onPress={() => toggleOverlay5()}>
            <Image style={styles.cchildImage} source={imagePath5} />
            {overlay5 && <View style={styles.cchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.cparent} onPress={() => toggleOverlay6()}>
            <Image style={styles.cchildImage} source={imagePath6} />
            {overlay6 && <View style={styles.cchildOverlay} />}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: 25 }}>소파</Text>
          <Text style={{ marginLeft: 90 }}>수납장</Text>
          <Text style={{ marginLeft: 95 }}>선반</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.cparent} onPress={() => toggleOverlay7()}>
            <Image style={styles.cchildImage} source={imagePath7} />
            {overlay7 && <View style={styles.cchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.cparent} onPress={() => toggleOverlay8()}>
            <Image style={styles.cchildImage} source={imagePath8} />
            {overlay8 && <View style={styles.cchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.cparent} onPress={() => toggleOverlay9()}>
            <Image style={styles.cchildImage} source={imagePath9} />
            {overlay9 && <View style={styles.cchildOverlay} />}
          </TouchableOpacity>
        </View>


        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: 25 }}>옷장</Text>
          <Text style={{ marginLeft: 100 }}>조명</Text>
          <Text style={{ marginLeft: 95 }}>러그</Text>
        </View>

      </View>

      <View style={{ alignItems: 'flex-end', marginTop: 80, }}>
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
    backgroundColor: "white",
    paddingHorizontal: 30,
  },
  ask1: {
    justifyContent: "center",
    marginTop: 130,
    marginBottom: 39,
  },
  askcolor: {
    fontSize: 28,
    fontWeight: "900",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: "black"
  },
  image2: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginLeft: 18,
  },
  day: {
    flexDirection: 'row',
    marginTop: 25
  },
  day2: {
    marginLeft: 10,
  },
  colorname: {
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 9,
    paddingVertical: 15,
  },
  cparent: {
    marginHorizontal: 6.5,
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  cchildImage: {
    width: '80%',
    height: '80%',
    borderRadius: 10,
  },
  cchildOverlay: {
    width: '80%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: 'black',
    opacity: 0.1,
    position: 'absolute'
  },
})  