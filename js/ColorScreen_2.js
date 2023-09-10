import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'



import wood from '../assets/color/wood.jpg';


function MainScreen({ navigation }) {


  const [overlay1, setOverlay1] = useState(false);
  const [overlay2, setOverlay2] = useState(false);
  const [overlay3, setOverlay3] = useState(false);
  const [overlay4, setOverlay4] = useState(false);
  const [overlay5, setOverlay5] = useState(false);
  const [overlay6, setOverlay6] = useState(false);

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
    <View style={styles.container2}>

      <View style={styles.dask1}>
        <Text style={styles.daskcolor}>좋아하는 색과 재질을</Text>
        <Text style={styles.daskcolor}>알려주세요</Text>
        <Text style={styles.daskcolortiny}>여러개를 선택해도 좋아요!</Text>
      </View>

      <View style={styles.dday2}>
        <View style={styles.dday}>
          <TouchableOpacity style={styles.dparent} onPress={() => toggleOverlay1()}>
            <View style={{ width: '100%', height: '100%', borderRadius: 100, backgroundColor: '#fb7e7e' }} />
            {overlay1 && <View style={styles.dchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.dparent} onPress={() => toggleOverlay2()}>
            <View style={{ width: '100%', height: '100%', borderRadius: 100, backgroundColor: '#a9eea9' }} />
            {overlay2 && <View style={styles.dchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.dparent} onPress={() => toggleOverlay3()}>
            <View style={{ width: '100%', height: '100%', borderRadius: 100, backgroundColor: '#81DAF5' }} />
            {overlay3 && <View style={styles.dchildOverlay} />}
          </TouchableOpacity>
        </View>


        <View style={{ flexDirection: 'row', margin: 20}}>
          <Text style={{marginLeft:15}}>레드</Text>
          <Text style={{marginLeft:85}}>그린</Text>
          <Text style={{marginLeft:85}}>블루</Text>
        </View>


        <View style={styles.dday}>
          <TouchableOpacity style={styles.dparent} onPress={() => toggleOverlay4()}>
            <View style={{ width: '100%', height: '100%', borderRadius: 100, backgroundColor: '#F2F2F2' }} />
            {overlay4 && <View style={styles.dchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.dparent} onPress={() => toggleOverlay5()}>
            <View style={{ width: '100%', height: '100%', borderRadius: 100, backgroundColor: '#2E2E2E' }} />
            {overlay5 && <View style={styles.dchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.dparent} onPress={() => toggleOverlay6()}>
            <Image source={wood} style={styles.dchildImage} />
            {overlay6 && <View style={styles.dchildOverlay} />}
          </TouchableOpacity>
        </View>


        <View style={{ flexDirection: 'row', margin: 20}}>
          <Text style={{marginLeft:15}}>화이트</Text>
          <Text style={{marginLeft:75}}>블랙</Text>
          <Text style={{marginLeft:85}}>우드</Text>
        </View>

      </View>

      <View style={{ alignItems: 'flex-end', marginTop: 100, }}>
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
  container2: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "white"
  },
  dask1: {
    justifyContent: "center",
    marginTop: 180,
  },
  daskcolor: {
    fontSize: 28,
    fontWeight: "900",
  },
  daskcolortiny: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "400",
  },
  dday: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dday2: {
    marginTop: 30,
  },
  dcolorname: {
    fontSize: 15,
    fontWeight: "500",
    justifyContent: "space-between",
  },
  dimage: {
    marginTop: 10,
    marginLeft: 8,
    height: 85,
    width: 85,
    borderRadius: 100,
  },
  button: {
    flex: 0.7,
    marginLeft: 286,
  },
  dparent: {
    marginTop: 10,
    marginLeft: 8,
    height: 85,
    width: 85,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  dchildImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  dchildOverlay: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    backgroundColor: 'black',
    opacity: 0.4,
    position: 'absolute'
  },
})