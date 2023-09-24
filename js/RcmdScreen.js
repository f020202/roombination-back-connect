import React, { Component } from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, RefreshControl, View, ScrollView, Image, navigation, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

import desk from '../assets/rcmd/1desk.jpg';
import closet from '../assets/rcmd/1sidetable.jpg';
import stand from '../assets/rcmd/1light.jpg';
import chair from '../assets/rcmd/chair.webp';


function MainScreen() {

  const route = useRoute();
  const { data } = route.params;

  let [ind, setind] = useState(0);


  function return_pricesum(d, i) {
    var target = d[i]

    // 3자리 단위로 쉼표를 추가하여 가격을 포맷
    if (typeof target.price_sum === 'number') {
      target.price_sum = target.price_sum.toLocaleString();
    }

    return target.price_sum
  }


  function return_image(d, i, n) {
    var target = d[i]
    var url = ''
    switch (n) {
      case 1:
        url = target.product_id1.Image_URL;
        break;
      case 2:
        url = target.product_id2.Image_URL;
        break;
      case 3:
        url = target.product_id3.Image_URL;
        break;
      case 4:
        url = target.product_id4.Image_URL;
        break;
      default:
        url = target.product_id1.Image_URL;
        break;
    }
    return url
  }


  function return_category(d, i, n) {
    var target = d[i]
    var category = ''
    switch (n) {
      case 1:
        category = target.product_id1.Category_Num;
        break;
      case 2:
        category = target.product_id2.Category_Num;
        break;
      case 3:
        category = target.product_id3.Category_Num;
        break;
      case 4:
        category = target.product_id4.Category_Num;
        break;
      default:
        category = target.product_id1.Category_Num;
        break;
    }

    switch (category) {
      case 1:
        return '침대';
      case 2:
        return '소파';
      case 3:
        return '책상';
      case 4:
        return '의자';
      case 5:
        return '옷장';
      case 6:
        return '선반';
      case 7:
        return '수납장';
      case 8:
        return '러그';
      case 9:
        return '조명';
      default:
        return ''; // 알 수 없는 카테고리
    }


  }


  function return_price(d, i, n) {
    var target = d[i]
    var price = ''
    switch (n) {
      case 1:
        price = target.product_id1.Price;
        break;
      case 2:
        price = target.product_id2.Price;
        break;
      case 3:
        price = target.product_id3.Price;
        break;
      case 4:
        price = target.product_id4.Price;
        break;
      default:
        price = target.product_id1.Price;
        break;
    }

    // 3자리 단위로 쉼표를 추가하여 가격을 포맷
    if (typeof price === 'number') {
      price = price.toLocaleString();
    }

    return price
  }


  const saveItem = () => {
    Alert.alert(
      "추가",
      "찜 목록에 추가되었습니다!",
      [
        {
          text: "확인",
          onPress: () => console.log("추가완료"),
        },
      ],
      { cancelable: false }
    );
  };


  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      setind(ind + 1);
    }, 1000);

    console.log('refreshed');
  };

  return (


    <View style={styles.container}>

      <StatusBar style="block"></StatusBar>

      <View style={styles.ask1}>
        <Text style={styles.askcolor}>당신만을 위한</Text>
        <Text style={styles.askcolor}>추천 인테리어입니다</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              onRefresh();
            }} />}>
        {/* 
        <Text>가져온 데이터는: {route.params.data[0].product_id1.Price}</Text>
        <Text>가져온 이미지는: {route.params.data[0].product_id1.Image_URL}</Text>
        <Image style={styles.image} source={{ uri: return_image(data, ind, 1) }} /> */}

        <View style={styles.day}>
          <Image style={styles.image} source={{ uri: return_image(data, ind, 1) }} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>{return_category(data, ind, 1)}</Text>
            <Text style={styles.recdtxt3}>{return_price(data, ind, 1)}</Text>
          </View>
        </View>

        <View style={styles.day}>
          <Image style={styles.image} source={{ uri: return_image(data, ind, 2) }} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>{return_category(data, ind, 2)}</Text>
            <Text style={styles.recdtxt3}>{return_price(data, ind, 2)}</Text>
          </View>
        </View>

        <View style={styles.day}>
          <Image style={styles.image} source={{ uri: return_image(data, ind, 3) }} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>{return_category(data, ind, 3)}</Text>
            <Text style={styles.recdtxt3}>{return_price(data, ind, 3)}</Text>
          </View>
        </View>

        <View style={styles.day}>
          <Image style={styles.image} source={{ uri: return_image(data, ind, 4) }} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>{return_category(data, ind, 4)}</Text>
            <Text style={styles.recdtxt3}>{return_price(data, ind, 4)}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>
            <Text>total </Text>
            <Text style={{ fontSize: 28, fontWeight: "900" }}>{return_pricesum(data, ind)}</Text>
          </Text>

          <TouchableOpacity onPress={() => saveItem()}>
            <AntDesign name="heart" size={35} color="#FA5882" style={{ marginTop: 30, marginLeft: 90, }} />
          </TouchableOpacity>
        </View>


      </ScrollView>
    </View>

  );

} export default MainScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  ask1: {
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  askcolor: {
    fontSize: 26,
    fontWeight: "900",
  },
  day: {
    flexDirection: 'row',
    backgroundColor: "#F2F2F2",
    marginTop: 12,
    height: 120,
  },
  colorname: {
    fontSize: 20,
    fontWeight: "900",
    justifyContent: "space-between",
    marginLeft: 20
  },
  price: {
    flexDirection: "row",
    padding: 25,
    fontSize: 20,
    marginBottom: 50,
  },
  image: {
    marginLeft: 30,
    marginVertical: '3%',
    height: 95,
    width: 95,
    borderRadius: 5,
  },
  recdtxt: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 17,
    fontWeight: "800",
    color: "#424242"
  },
  recdtxt2: {
    marginLeft: 20,
    marginTop: 2,
    fontSize: 11,
    fontWeight: "500",
  },
  recdtxt3: {
    marginLeft: 20,
    marginTop: 2,
    fontSize: 20,
    fontWeight: "800",
  },
  icon: {
    paddingHorizontal: 45,
  }
})