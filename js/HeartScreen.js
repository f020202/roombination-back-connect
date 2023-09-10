import React, { Component } from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Dimensions, View, ScrollView, Image, navigation, TouchableOpacity, Styles } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

import chair from '../assets/heart/chair.webp';

import imagePath1 from '../assets/heart/bed.jpg';
import imagePath2 from '../assets/heart/desk.jpg';
import imagePath3 from '../assets/heart/chair.jpg';
import imagePath4 from '../assets/heart/sofa.jpg';
import imagePath5 from '../assets/heart/cabinet.jpg';
import imagePath6 from '../assets/heart/shelf.jpg';
import imagePath7 from '../assets/heart/closet.jpg';
import imagePath8 from '../assets/heart/light.jpg';
import imagePath9 from '../assets/heart/rug.jpg';

import imagePath1_1 from '../assets/heart/1desk.jpg';
import imagePath1_2 from '../assets/heart/1light.jpg';
import imagePath1_3 from '../assets/heart/1sidetable.jpg';

import imagePath2_1 from '../assets/heart/2bed.jpg';

import imagePath3_1 from '../assets/heart/3table.jpg';
import imagePath3_2 from '../assets/heart/3chair.jpg';
import imagePath3_3 from '../assets/heart/3light.jpg';
import imagePath3_4 from '../assets/heart/3plant.jpg';

import imagePath4_2 from '../assets/heart/4sidetable.jpg';



function MainScreen({navigation})  {

  return (
    <View style={styles.container}>

      <View style={styles.day1}>
      <AntDesign name="heart" size={23} color="#FA5882" style={styles.icon} />
       <ScrollView horizontal
       showsHorizontalScrollIndicator={false}>
         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath1_1}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>책상</Text>
          <Text style={styles.recdtxt3}>121,200</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath1_3}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>협탁</Text>
          <Text style={styles.recdtxt3}>58,000</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath1_2}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>스탠드</Text>
          <Text style={styles.recdtxt3}>33,500</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={chair}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>의자</Text>
          <Text style={styles.recdtxt3}>23,500</Text>
         </View>
       </ScrollView>
      </View>

      <View style={{flex:0.05,backgroundColor:'#F6F5F5'}}/>


      <View style={styles.day}>
      <AntDesign name="heart" size={23} color="#FA5882" style={styles.icon} />
       <ScrollView horizontal       
       showsHorizontalScrollIndicator={false}>
         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath2_1}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>침대</Text>
          <Text style={styles.recdtxt3}>223,500</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath2}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>책상</Text>
          <Text style={styles.recdtxt3}>89,900</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath8}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>조명</Text>
          <Text style={styles.recdtxt3}>23,000</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath9}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>러그</Text>
          <Text style={styles.recdtxt3}>31,300</Text>
         </View>
       </ScrollView>
      </View>

      <View style={{flex:0.05,backgroundColor:'#F6F5F5'}}/>


      <View style={styles.day}>
      <AntDesign name="heart" size={23} color="#FA5882" style={styles.icon} />
       <ScrollView horizontal       
       showsHorizontalScrollIndicator={false}>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath3_1}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>테이블</Text>
          <Text style={styles.recdtxt3}>27,200</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath3_2}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>의자</Text>
          <Text style={styles.recdtxt3}>23,500</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath3_3}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>스탠드</Text>
          <Text style={styles.recdtxt3}>30,500</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath3_4}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>식물</Text>
          <Text style={styles.recdtxt3}>31,900</Text>
         </View>
       </ScrollView>
      </View>

      <View style={{flex:0.05,backgroundColor:'#F6F5F5'}}/>


      <View style={styles.day}>
      <AntDesign name="heart" size={23} color="#FA5882" style={styles.icon} />
       <ScrollView horizontal       
       showsHorizontalScrollIndicator={false}>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath4_2}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>협탁</Text>
          <Text style={styles.recdtxt3}>29,900</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath8}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>조명</Text>
          <Text style={styles.recdtxt3}>23,000</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath3_4}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>식물</Text>
          <Text style={styles.recdtxt3}>31,900</Text>
         </View>

         <View style={{paddingHorizontal:10}}>
         </View>

         <View style={{flexDirection:"column"}}>
          <Image style={styles.image} source={imagePath9}/>
          <Text style={styles.recdtxt}>IKEA</Text>
          <Text style={styles.recdtxt2}>러그</Text>
          <Text style={styles.recdtxt3}>31,300</Text>
         </View>
       </ScrollView>
      </View>

    </View>
    );

  }export default MainScreen;




  const styles = StyleSheet.create({
    bottom1:{
        flex:0.01,
        backgroundColor:"#D4D4D4",
        width:500
      },
    recomend: {
      backgroundColor: '#5882FA',
      width:350,
      height:210,
      borderRadius:30,
      alignItems: 'center', 
      justifyContent: 'center',
      marginTop:160,
    },
    category: {
      marginTop:15,
      flex:0.17,
      width:350,
      flexDirection: 'row'
  
    },
    categorydetail:{
      backgroundColor:'#5882FA',
      width:65,
      borderRadius:10,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    categorydetail2:{
      backgroundColor:'#5882FA',
      width:65,
      marginLeft:10,
      borderRadius:10,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    catefont:{
      color:'white',
      fontWeight:'800',
      fontSize:20,
    },
    container:{
      flex:1,
      backgroundColor:"white"
    },
    ask1:{
      flex:0.5,
      justifyContent:"center",
      marginTop:80,
      paddingHorizontal:30,
    },
    askcolor:{
      fontSize:34,
      fontWeight:"900",
    },
    day:{
      flex:1,
      flexDirection: 'row',
      marginTop:9,
      height:100,
      backgroundColor:"white"
    },
    day1:{
      flex:1,
      flexDirection: 'row',
      height:100,
      backgroundColor:"white"
    },
    price:{
      flexDirection:"row",
      flex:0.8,
      marginTop:13,
      fontSize:20,
      paddingHorizontal:30,
      backgroundColor:"#F2F2F2",
    },
    image:{
      marginTop:5,
      height: 90, 
      width: 90,
      borderRadius:5,
    },
    recdtxt:{
      marginTop:8,
      fontSize:15,
      fontWeight:"800",
      color:"#424242"
    },
    recdtxt2:{
      fontSize:10,
      fontWeight:"500",
    },
    recdtxt3:{
      fontSize:16,
      fontWeight:"800",
    },
    icon:{
      marginLeft:20,
      marginRight:20,
      paddingVertical:70,
    }
  });
