import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import axios from 'axios';

import chair from '../assets/home/chair.png';
import money from '../assets/home/money.png';
import palette from '../assets/home/palette.png';
import bed from '../assets/home/bed.png';

function MainScreen({ navigation }) {

  const error1 = false;
  const error2 = false;

  const hard_userinfo = 'test_username';
  const hard_fp = [1, 3, 8, 9] //침대, 책상, 러그, 조명
  const hard_cp = [1, 2, 3] //black, white, wood
  const hard_money = 455000;


  function generate(user, fp, cp, money, error1, error2) {
    // error1와 error2가 둘다 false라면 발동
    if (!error1 & !error2) {
      console.log('generate 함수가 호출되었습니다.');

      //axios라는 라이브러리로 api call을 날리는 거임, 추가 설치 아마도 필요

      axios.post('http://43.201.25.85:5000/combination/getcombination_cached',
        {
          // 이 부분은 post 메소드의 input을 지정함. 
          user_id: user,
          furniture_preference: fp,
          color_preference: cp,
          money: money
        },
        // 헤더는 json형식임을 지정함. 바꾸지 않아도 댐
        {
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
          }
        }
      )
        //response 메세지가 온다면 then이 발동
        .then(function (response) {
          //response는 반환된 response message를 뜻함. response.data로 response message의 본문, 즉 가구조합 json을 가져올 수 있음 
          var r = response.data
          console.log("");
          console.log("RESPONSE : " + r[0].product_id1.Image_URL);
          console.log("");
          // Result.js 페이지로 이동! 그리고 state는 이동하면서 상태 정보 또한 같이 넘기는건데, data를 response.data로 넘기므로싸
          // 가구조합 json 정보를 페이지 이동하면서 같이 넘겨주는 거임
          // movePage('/result', { state: { data: r } })
          navigation.navigate('rcmd', { data: r });
        })
        //에러날 경우
        .catch(function (error) {
          console.log("");
          console.log("ERROR : " + JSON.stringify(error));
          console.log("");
        });
    }
  }


  return (
    <View style={{ flex: 10, alignItems: 'center', backgroundColor: "#F7F7F7", }}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ marginTop: 110, marginLeft: 10, }}>
          <Text style={styles.hello}>Username님</Text>
          <Text style={styles.hello}>안녕하세요</Text>
        </View>

        <TouchableOpacity style={{ backgroundColor: "white", width: 360, height: 190, marginTop: 30, borderRadius: 30, }}
          onPress={() => {
            generate(hard_userinfo, hard_fp, hard_cp, hard_money, error1, error2);
          }}
          activeOpacity={0.5}>
          <Text style={{ fontSize: 20, fontWeight: '700', marginLeft: 25, marginVertical: 25, }}>추천 받기</Text>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#f7f7f7', width: 90, height: 90, marginLeft: 25, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={chair} style={{ width: 60, height: 60, }} />
            </View>

            <View>
              <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 25, marginTop: 20, }}>기존 설정으로</Text>
              <Text style={{ fontSize: 22, fontWeight: '700', marginLeft: 25, }}>새로운 추천 받기</Text>
            </View>

          </View>
        </TouchableOpacity>


        <View style={{ marginTop: 30, marginLeft: 10}}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: '#353535' }}>설정 변경</Text>
        </View>


        <TouchableOpacity style={[styles.set_background, {marginTop:18}]}
          onPress={() => navigation.navigate('budget2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 15}}>
            <View style={styles.set_circle_background}>
              <Image source={money} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={styles.set_main_text}>예산 </Text>
              <Text style={styles.set_side_text}>300,000원</Text>
            </View>
          </View>
          
        </TouchableOpacity>


        <TouchableOpacity style={styles.set_background}
          onPress={() => navigation.navigate('color2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 15}}>
            <View style={styles.set_circle_background}>
              <Image source={palette} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={styles.set_main_text}>색 / 재질</Text>
              <Text style={styles.set_side_text}>레드 그린 우드</Text>
            </View>
          </View>
          
        </TouchableOpacity>

        <TouchableOpacity style={[styles.set_background, {marginBottom:50,}]}
          onPress={() => navigation.navigate('furniture2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 15}}>
            <View style={styles.set_circle_background}>
              <Image source={bed} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={styles.set_main_text}>가구 </Text>
              <Text style={styles.set_side_text}>침대 책상 의자 소파</Text>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>

  );

} export default MainScreen;


const styles = StyleSheet.create({
  recomend: {
    backgroundColor: '#74a6f3',
    width: 350,
    height: 210,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 160,
  },
  hello: {
    fontSize: 22, fontWeight: "700", color: '#353535'
  },
  set_background: {
    backgroundColor: "white", width: 360, height: 100, marginTop: 15, borderRadius: 30
  },
  set_circle_background: {
    backgroundColor: '#f7f7f7', width: 70, height: 70, marginLeft: 25, borderRadius: 50, alignItems: 'center', justifyContent: 'center' 
  },
  set_main_text:{
    fontSize: 20, fontWeight: '700', marginLeft: 15, marginTop: 15
  },
  set_side_text:{
    fontSize: 13, fontWeight: '300', marginLeft: 15
  },
  category: {
    marginTop: 15,
    flex: 0.6,
    width: 350,
    flexDirection: 'row'

  },
  categorydetail: {
    backgroundColor: '#74a6f3',
    width: 65,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categorydetail2: {
    backgroundColor: '#74a6f3',
    width: 65,
    height: 40,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catefont: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20,
  },
  bottom1: {
    flex: 0.01,
    marginTop: 290,
    backgroundColor: "#D4D4D4",
    width: 500
  },
  bottom2: {
    marginTop: 20
  },
})  
