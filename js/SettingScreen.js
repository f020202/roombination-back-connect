import React, { Component } from 'react';
import { Button, StyleSheet, Text, Dimensions, View, ScrollView, Image, navigation, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

import chair from '../assets/home/chair.png';
import gear from '../assets/home/gear.png';
import money from '../assets/home/money.png';
import palette from '../assets/home/palette.png';
import bed from '../assets/home/bed.png';


import imagePath1 from '../assets/furniture/bed.jpg';
import imagePath2 from '../assets/furniture/desk.jpg';
import imagePath3 from '../assets/furniture/chair.jpg';
import imagePath4 from '../assets/furniture/sofa.jpg';
import imagePath5 from '../assets/furniture/cabinet.jpg';
import imagePath6 from '../assets/furniture/shelf.jpg';
import imagePath7 from '../assets/furniture/closet.jpg';
import imagePath8 from '../assets/furniture/light.jpg';
import imagePath9 from '../assets/furniture/rug.jpg';


import imagePath3_1 from '../assets/heart/3table.jpg';
import imagePath3_2 from '../assets/heart/3chair.jpg';
import imagePath3_3 from '../assets/heart/3light.jpg';
import imagePath3_4 from '../assets/heart/3plant.jpg';


import monocle from '../assets/home/monocle.png';




function MainScreen({ navigation }) {

  return (
    <View style={{ flex: 10, alignItems: 'center', backgroundColor: "#F7F7F7", }}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ marginTop: 110, marginLeft: 10}}>
          <Text style={{ fontSize: 35, fontWeight: "700", color: '#353535' }}>설정 변경</Text>
        </View>


        <TouchableOpacity style={{ backgroundColor: "white", width: 360, height: 110, marginTop: 35, borderRadius: 30, }}
          onPress={() => navigation.navigate('budget2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 20}}>
            <View style={{ backgroundColor: '#f7f7f7', width: 70, height: 70, marginLeft: 25, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={money} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={{ fontSize: 23, fontWeight: '700', marginLeft: 15, marginTop: 15}}>예산 </Text>
              <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 15}}>300,000원</Text>
            </View>
          </View>
          
        </TouchableOpacity>


        <TouchableOpacity style={{ backgroundColor: "white", width: 360, height: 110, marginTop: 15, borderRadius: 30, }}
          onPress={() => navigation.navigate('color2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 20}}>
            <View style={{ backgroundColor: '#f7f7f7', width: 70, height: 70, marginLeft: 25, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={palette} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={{ fontSize: 23, fontWeight: '700', marginLeft: 15, marginTop: 15}}>색 / 재질</Text>
              <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 15}}>레드 그린 우드</Text>
            </View>
          </View>
          
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "white", width: 360, height: 110, marginTop: 15, borderRadius: 30, }}
          onPress={() => navigation.navigate('furniture2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 20}}>
            <View style={{ backgroundColor: '#f7f7f7', width: 70, height: 70, marginLeft: 25, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={bed} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={{ fontSize: 23, fontWeight: '700', marginLeft: 15, marginTop: 15}}>가구 </Text>
              <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 15}}>침대 책상 의자 소파</Text>
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
