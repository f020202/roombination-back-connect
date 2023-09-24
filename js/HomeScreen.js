import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import axios from 'axios';

import chair from '../assets/home/chair.png';
import money from '../assets/home/money.png';
import palette from '../assets/home/palette.png';
import bed from '../assets/home/bed.png';

import { Auth } from 'aws-amplify';


function MainScreen({ navigation }) {

  const error1 = false;
  const error2 = false;

  // 코그니토에서 불러온 유저 정보
  var cognito_userinfo = Auth.user.username
  const [cognito_budget, setCognito_budget] = useState(null);
  const [cognito_cp, setCognito_cp] = useState(null);
  const [cognito_fp, setCognito_fp] = useState(null);


  // 유저 정보 불러오기 (async 비동기로 구현해줘야댐)
  useEffect(() => {
    async function return_results() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const result = await Auth.userAttributes(user);
        a = result.find(attribute => attribute.Name === 'custom:budget')?.Value;
        b = result.find(attribute => attribute.Name === 'custom:color_preference')?.Value;
        c = result.find(attribute => attribute.Name === 'custom:furniture_preference')?.Value;
        const budgetValue = parseInt(a, 10);
        setCognito_budget(budgetValue);
        setCognito_cp(b);
        setCognito_fp(c);

      } catch (error) {
        console.log(error)
      }
    }
    return_results(); 

    const timer = setTimeout(() => {
      return_results(); 
    }, 1000); 
  
    return () => clearTimeout(timer);
  }, []);


  const [cpList, setCPList] = useState([]);
  const [convertCPList, setConvertCPList] = useState([]);

  const [fpList, setFPList] = useState([]);
  const [convertFPList, setConvertFPList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const result = await Auth.userAttributes(user);

        const cpString = result.find(attribute => attribute.Name === 'custom:color_preference')?.Value;
        const fpString = result.find(attribute => attribute.Name === 'custom:furniture_preference')?.Value;

        const parsedCPList = parseColorPreferences(cpString);
        setCPList(parsedCPList);
        const convertedCPList = convertColorPreferences(parsedCPList);
        setConvertCPList(convertedCPList);

        const parsedFPList = parseFurniturePreferences(fpString);
        setFPList(parsedFPList);
        const convertedFPList = convertFurniturePreferences(parsedFPList);
        setConvertFPList(convertedFPList);


      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
  
    return () => clearTimeout(timer);

  }, []);


  

  // 전달되었는지 확인
  useEffect(() => {
    console.log(cpList, fpList, cognito_budget);
  }, [cpList, fpList, cognito_budget]);

  // cognito(string) 에서 list로 변환
  function parseColorPreferences(cpString) {
    if (cpString === null) {
      return [];
    }
    return cpString.split(',').map(Number);
  }

  // list로 변환한거 원하는 텍스트로 출력
  function convertColorPreferences(list) {
    const colorMap = {
      1: '레드 ',
      2: '그린 ',
      3: '블루 ',
      4: '화이트 ',
      5: '블랙 ',
      6: '우드 ',
    };

    return list.map((cp) => colorMap[cp] || '알 수 없음');
  }

  function parseFurniturePreferences(fpString) {
    if (fpString === null) {
      return [];
    }
    return fpString.split(',').map(Number);
  }

  function convertFurniturePreferences(list) {
    const furnitureMap = {
      1: '침대 ',
      2: '책상 ',
      3: '의자 ',
      4: '소파 ',
      5: '수납장 ',
      6: '선반 ',
      7: '옷장 ',
      8: '조명 ',
      9: '러그 ',
    };

    return list.map((fp) => furnitureMap[fp] || '알 수 없음');
  }



  const hard_userinfo = 'test_username';
  const hard_fp = [1, 3, 8, 9] //침대, 책상, 러그, 조명
  const hard_cp = [1, 2, 3] //black, white, wood
  const hard_money = 455000;


  function generate(user, fp, cp, money, error1, error2) {
    // error1와 error2가 둘다 false라면 발동
    if (!error1 & !error2) {
      console.log('generate 함수 호출');

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
          <Text style={styles.hello}>{cognito_userinfo}님</Text>
          <Text style={styles.hello}>안녕하세요</Text>
        </View>

        <TouchableOpacity style={{ backgroundColor: "white", width: 360, height: 190, marginTop: 30, borderRadius: 30, }}
          onPress={() => {
            generate(cognito_userinfo, fpList, cpList, cognito_budget, error1, error2);
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


        <View style={{ marginTop: 30, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: '#353535' }}>설정 변경</Text>
        </View>


        <TouchableOpacity style={[styles.set_background, { marginTop: 18 }]}
          onPress={() => navigation.navigate('budget2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={styles.set_circle_background}>
              <Image source={money} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={styles.set_main_text}>예산 </Text>
              <Text style={styles.set_side_text}>{cognito_budget}원</Text>
            </View>
          </View>

        </TouchableOpacity>


        <TouchableOpacity style={styles.set_background}
          onPress={() => navigation.navigate('color2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={styles.set_circle_background}>
              <Image source={palette} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={styles.set_main_text}>색 / 재질</Text>
              <Text style={styles.set_side_text}>{convertCPList}</Text>
            </View>
          </View>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.set_background, { marginBottom: 50, }]}
          onPress={() => navigation.navigate('furniture2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={styles.set_circle_background}>
              <Image source={bed} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={styles.set_main_text}>가구 </Text>
              <Text style={styles.set_side_text}>{convertFPList}</Text>
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
  set_main_text: {
    fontSize: 20, fontWeight: '700', marginLeft: 15, marginTop: 15
  },
  set_side_text: {
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
