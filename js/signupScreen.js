import React, { Component } from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Dimensions, View, ScrollView, Image, navigation, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import desk from '../assets/rcmd/1desk.jpg';
import closet from '../assets/rcmd/1sidetable.jpg';
import stand from '../assets/rcmd/1light.jpg';
import chair from '../assets/rcmd/chair.webp';


function MainScreen({navigation})  {
  return (

      <View style={styles.container}>

      <StatusBar style="block"></StatusBar>

      <View style={styles.ask1}>
        <Text style={styles.askcolor}>당신만을 위한</Text>
        <Text style={styles.askcolor}>추천 인테리어입니다</Text>
      </View>

      <ScrollView>
        
        <View style={styles.day}>
          <Image style={styles.image} source={desk}/>
          <View style={{flexDirection:"column"}}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>책상</Text>
            <Text style={styles.recdtxt3}>121,200</Text>
          </View> 
        </View>

        <View style={styles.day}>
          <Image style={styles.image} source={closet}/>
          <View style={{flexDirection:"column"}}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>수납장</Text>
            <Text style={styles.recdtxt3}>58,000</Text>
          </View> 
        </View>

        <View style={styles.day}>
          <Image style={styles.image} source={stand}/>
          <View style={{flexDirection:"column"}}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>조명</Text>
            <Text style={styles.recdtxt3}>33,500</Text>
          </View> 
        </View>

        <View style={styles.day}>
          <Image style={styles.image} source={chair}/>
          <View style={{flexDirection:"column"}}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>의자</Text>
            <Text style={styles.recdtxt3}>23,500</Text>
          </View> 
        </View>


      </ScrollView>

      <Text style={styles.price}>
        <Text>총  </Text>
        <Text style={{fontSize:35,fontWeight:"900"}}>236,200                            </Text>
        <TouchableOpacity>
        <AntDesign name="heart" size={35} color="#FA5882" />
        </TouchableOpacity>
        
      </Text>
    </View>

    );

  }export default MainScreen;



  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"white"
    },
    ask1:{
      flex:4,
      justifyContent:"center",
      marginTop:40,
      marginBottom:30,
      paddingHorizontal:30,
    },
    askcolor:{
      fontSize:34,
      fontWeight:"900",
    },
    day:{
      flex:0.7,
      flexDirection: 'row',
      backgroundColor:"#F2F2F2",
      marginTop:10,
      height:140,
    },
    colorname:{
      fontSize:20,
      fontWeight:"900",
      justifyContent:"space-between",
      marginLeft:20
    },
    price:{
      flexDirection:"row",
      flex:10,
      marginTop:5,
      fontSize:20,
      paddingHorizontal:30,
    },
    image:{
      marginLeft:30,
      marginTop:16,
      height: 110, 
      width: 110,
      borderRadius:5,
    },
    recdtxt:{
      marginLeft:20,
      marginTop:37,
      fontSize:22,
      fontWeight:"800",
      color:"#424242"
    },
    recdtxt2:{
      marginLeft:20,
      marginTop:2,
      fontSize:16,
      fontWeight:"500",
    },
    recdtxt3:{
      marginLeft:20,
      marginTop:2,
      fontSize:25,
      fontWeight:"800",
    },
    icon:{
      paddingHorizontal:45,
    }
  })