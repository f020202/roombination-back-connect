import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import { LinearGradient } from 'expo-linear-gradient'
import { useRoute } from '@react-navigation/native';


import wood from '../assets/color/wood.jpg';


function MainScreen({ navigation }) {

  //Budget에서 받아온 데이터
  const route = useRoute();
  const { input_budget } = route.params;

  const [progressValue, setProgressValue] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProgressValue(0.3);
    }, 0); // 1초 후에 0.3으로 변경 (원하는 시간으로 조절 가능)
  }, []); // 빈 배열을 두어 한 번만 실행되도록 설정

  useEffect(() => {
    setTimeout(() => {
      setProgressValue(0.6);
    }, 100); // 1초 후에 0.3으로 변경 (원하는 시간으로 조절 가능)
  }, []); // 빈 배열을 두어 한 번만 실행되도록 설정

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

  const isNoOverlaySelected = () => {
    return !overlay1 && !overlay2 && !overlay3 && !overlay4 && !overlay5 && !overlay6;
  };

  const handleNextPress = () => {
    const selectedOverlaysCount = 
    (overlay1 ? 1 : 0) +
    (overlay2 ? 1 : 0) +
    (overlay3 ? 1 : 0) +
    (overlay4 ? 1 : 0) +
    (overlay5 ? 1 : 0) +
    (overlay6 ? 1 : 0);

  if (selectedOverlaysCount === 0) {
    // 선택한 overlay가 없을 때 텍스트를 나타내기 위해 상태를 업데이트
    setShowMessage(true);
    return; // 이동하지 않음
  }
  
    // 선택한 overlay가 1개 이상인 경우 다음 화면으로 이동
    navigation.navigate('furniture');
  };
  
  



  return (
    <View style={styles.container2}>
      <Progress.Bar progress={progressValue} width={330} color="#99bdef" style={{ marginTop: 100 }} />
      <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 12, color: "#99bdef" }} >60%</Text>

      <View style={styles.dask1}>
        <Text style={styles.daskcolor}>좋아하는 색과 재질을</Text>
        <Text style={styles.daskcolor}>알려주세요</Text>
        <Text style={styles.daskcolortiny}>여러개를 선택해도 좋아요!</Text>
      </View>

      <Text>입력데이터: {input_budget}</Text>

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


        <View style={{ flexDirection: 'row', margin: 20 }}>
          <Text style={{ marginLeft: 15 }}>레드</Text>
          <Text style={{ marginLeft: 85 }}>그린</Text>
          <Text style={{ marginLeft: 85 }}>블루</Text>
        </View>


        <View style={styles.dday}>
          <TouchableOpacity style={styles.dparent} onPress={() => toggleOverlay4()}>
            <View style={{ width: '100%', height: '100%', borderRadius: 100, backgroundColor: '#F2F2F2' }} />
            {overlay4 && <View style={styles.dchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.dparent} onPress={() => toggleOverlay5()}>
            <View style={{ width: '100%', height: '100%', borderRadius: 100, backgroundColor: '#636363' }} />
            {overlay5 && <View style={styles.dchildOverlay} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.dparent} onPress={() => toggleOverlay6()}>
            <Image source={wood} style={styles.dchildImage} />
            {overlay6 && <View style={styles.dchildOverlay} />}
          </TouchableOpacity>
        </View>


        <View style={{ flexDirection: 'row', margin: 20 }}>
          <Text style={{ marginLeft: 15 }}>화이트</Text>
          <Text style={{ marginLeft: 75 }}>블랙</Text>
          <Text style={{ marginLeft: 85 }}>우드</Text>
        </View>

      </View>

      {showMessage && isNoOverlaySelected() && (
        <Text style={{ color: 'red' }}>1개 이상 선택해주세요.</Text>
      )}

      <View style={{ alignItems: 'flex-end', marginTop: 60, }}>
        <TouchableOpacity onPress={handleNextPress} activeOpacity={0.5} style={{ opacity: 0.7 }}>
          <LinearGradient
            colors={['#81d8f6', '#62cef4', '#5fc7f1', '#6fbbf2', '#79b4f3', '#74a6f3']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            style={{ height: 47, width: 100, borderRadius: 15, marginTop: 10, marginBottom: 5 }}>
            <Text style={{ color: 'white', fontSize: 18, textAlignVertical: "center", textAlign: 'center', fontWeight: '900', marginTop: 15, }}>다음으로</Text>
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
    marginTop: 60,
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




