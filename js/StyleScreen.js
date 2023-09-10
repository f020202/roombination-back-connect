import React, { Component } from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import natural from '../assets/style/natural.png';
import modern from '../assets/style/modern.jpg';
import romantic from '../assets/style/romantic.jpg';
import NEurope from '../assets/style/NorthEurope.png'
import junk from '../assets/style/junk.jpg';
import minimal from '../assets/style/minimal.jpg';


function MainScreen({navigation})  {

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

    return (
      <View style={styles.container}>

      <View style={styles.ask1}>
        <Text style={styles.askcolor}>선호하는 스타일을</Text>
        <Text style={styles.askcolor}>선택해주세요</Text>
      </View>

      <View>
        <View style={styles.day}>
        <TouchableOpacity style={styles.parent} onPress={() => toggleOverlay1()}>
          <Image style={styles.childImage} source={modern}/>
          {overlay1 && <View style={styles.childOverlay} />}
        </TouchableOpacity>

        <TouchableOpacity style={styles.parent} onPress={() => toggleOverlay2()}>
          <Image style={styles.childImage} source={NEurope}/>
          {overlay2 && <View style={styles.childOverlay} />}
        </TouchableOpacity>
        </View>

        <View style={styles.day}>
          <Text style={styles.colorname}>                 모던</Text>
          <Text style={styles.colorname}>                                북유럽</Text>
        </View>

        <View style={styles.day}>
        <TouchableOpacity style={styles.parent} onPress={() => toggleOverlay3()}>
          <Image style={styles.childImage} source={minimal}/>
          {overlay3 && <View style={styles.childOverlay} />}
        </TouchableOpacity>

        <TouchableOpacity style={styles.parent} onPress={() => toggleOverlay4()}>
          <Image style={styles.childImage} source={natural}/>
          {overlay4 && <View style={styles.childOverlay} />}
        </TouchableOpacity>
        </View>

        <View style={styles.day}> 
          <Text style={styles.colorname}>               미니멀</Text>
          <Text style={styles.colorname}>                               내추럴</Text>
        </View> 

        <View style={styles.day}>
        <TouchableOpacity style={styles.parent} onPress={() => toggleOverlay5()}>
          <Image style={styles.childImage} source={romantic}/>
          {overlay5 && <View style={styles.childOverlay} />}
        </TouchableOpacity>

        <TouchableOpacity style={styles.parent} onPress={() => toggleOverlay6()}>
          <Image style={styles.childImage} source={junk}/>
          {overlay6 && <View style={styles.childOverlay} />}
        </TouchableOpacity>
        </View>

        <View style={styles.day}>
          <Text style={styles.colorname}>                로맨틱</Text>
          <Text style={styles.colorname}>                                정크</Text>
        </View>

      </View>

      <View style={{alignItems:'flex-end', marginTop:50,}}>
        <TouchableOpacity onPress={() => navigation.navigate('furniture')} activeOpacity={0.5} style={{opacity:0.7}}>
           <LinearGradient
             colors={['#81d8f6', '#62cef4', '#5fc7f1', '#6fbbf2', '#79b4f3', '#74a6f3']}
             start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
             style={{ height: 47, width: 100, borderRadius: 15, marginTop: 10, marginBottom:5 }}>
              <Text style={{color:'white', fontSize:18, textAlignVertical: "center",  textAlign:'center', fontWeight:'900', marginTop:15,}}>다음으로</Text>
           </LinearGradient>
        </TouchableOpacity>
      </View>
        
    </View>
    );
    
}export default MainScreen;


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    paddingHorizontal:30,
  },
  ask1:{
    justifyContent:"center",
    marginTop:150,
    marginBottom:40,
  },
  askcolor:{
    fontSize:34,
    fontWeight:"900",
  },
  image:{
    height: 130, 
    width: 158,
    borderRadius:10,
    backgroundColor:"black"
    },
  image2:{
    height: 130, 
    width: 158 ,
    borderRadius:10,
    marginLeft:28,
    },
  day:{
    flexDirection: 'row',
  },
  colorname:{
    fontSize:15,
    fontWeight:"500",
    paddingHorizontal:20,
    paddingVertical:13,
  },
  parent: {
    marginHorizontal:12,
    height: 120, 
    width: 148 ,
    borderRadius:15,
  },
  childImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  childOverlay: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    backgroundColor:'black',
    opacity:0.4,
    position:'absolute'
  },
})  