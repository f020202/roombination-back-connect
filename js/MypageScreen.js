import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

import share from '../assets/mypage/list.png';
import shopping from '../assets/mypage/shopping.png';


function MainScreen({ route })  {

  //const { click } = route.params;

  return (
          <View style={styles.container}>

            <View style={styles.fst}>
               <View style={{flexDirection:'row',marginTop:3}}>
               <Ionicons name="person-circle-outline" size={63} color="#424242" style={{marginTop:20, marginLeft:10}} />
               <View style={{backgroundColor:'#ffffff',flex:1, marginTop:30,marginBottom:17,borderRadius:7,}}>
                 <Text style={{fontSize:21, backgroundColor: '#ffffff', marginLeft:13, margin:5, fontWeight:'600'}}>Email</Text>
                 <Text style={{fontWeight:'600',fontSize:14,marginTop:2,color:'gray',marginLeft:13,marginTop:2,}}>Platform</Text>
               </View>
               </View>
            </View>

          <View style={{height:1,backgroundColor:'#F2F2F2',marginLeft:30, marginRight:30, marginTop:20,}}></View>

{/* 
          <View style={styles.scd}>

          <View style={{flexDirection:'row',marginTop:28}}>
          <TouchableOpacity  onPress={()=>navigate('ShareScreen')} style={{backgroundColor:'#F2F2F2',borderRadius:50, width:75,height:75, marginLeft:90, }}>
               <Image source={share} style={{height: 35, width: 32, marginLeft:22, marginTop:20,}}/>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=>navigate('BuyScreen')} style={{backgroundColor:'#F2F2F2',borderRadius:50, width:75,height:75, marginLeft:80, }}>
               <Image source={shopping} style={{height: 35, width: 32, marginLeft:22, marginTop:20,}}/>
          </TouchableOpacity>

          </View>


        </View> */}


        </View>
    );

  }export default MainScreen;



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    Text:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    fst:{
      backgroundColor:'white',
      paddingHorizontal:10,
    },
    scd:{
      flex:2.4,
    },
    thrd:{
      flex:0.8,
    }
  });
