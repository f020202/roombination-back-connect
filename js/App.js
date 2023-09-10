import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator , StackNavigationProp } from '@react-navigation/stack';
import { AntDesign, Feather, Ionicons, FontAwesome, Entypo  } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image, Button, StatusBar } from 'react-native';
import { getFocusedRouteNameFromRoute} from '@react-navigation/native';

import LoginScreen from './LoginScreen'; 
import BudgetScreen from './BudgetScreen'; 
import ColorScreen from './ColorScreen'; 
import StyleScreen from './StyleScreen'; 
import FurnitureScreen from './FurnitureScreen'; 

import HomeScreen from './HomeScreen'; 
import HeartScreen from './HeartScreen';
import MypageScreen from './MypageScreen'; 

import RcmdScreen from './RcmdScreen'; 
import ResetScreen from './ResetScreen';
import SignupScreen from './signupScreen';
import SettingScreen from './SettingScreen';

import BudgetScreen_2 from './BudgetScreen_2'; 
import ColorScreen_2 from './ColorScreen_2'; 
import FurnitureScreen_2 from './FurnitureScreen_2'; 

import RegisterScreen from './RegisterScreen'; 
import PasswordScreen from './PasswordScreen'; 

//일단은 ignore 해놓기
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Sending']);

const Stack = createStackNavigator();

function App({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="signup" component={SignupScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="budget" component={BudgetScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="color" component={ColorScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="style" component={StyleScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="furniture" component={FurnitureScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="setting" component={SettingScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="budget2" component={BudgetScreen_2}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="color2" component={ColorScreen_2}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="furniture2" component={FurnitureScreen_2}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="register" component={RegisterScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="password" component={PasswordScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="main" component={Root}
        options={{
          headerShown:false,
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


const Tab = createBottomTabNavigator();

const Root = () => {
  return (
        <Tab.Navigator>
            <Tab.Screen name="mainhome" component={HomeStackScreen} 
            options= {({ route }) => ({
              tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                console.log(routeName)
                if (routeName === 'rcmd') {
                  return { display: "none" }
                }
                else if (routeName === 'reset') {
                  return { display: "none" }
                }
              })(route),
              headerShown:false,
              unmountOnBlur:true,
              tabBarLabel: '홈',
              animationEnabled: false,
              tabBarIcon: ({focused}) => (<Ionicons name="home" size={24} color="black" style={{color:focused ? '#4e9bde' :'#BDBDBD', marginTop:14,}}/>)
            })}/>

            <Tab.Screen name="heart" component={HeartScreen} 
            options={{
              tabBarIcon: ({focused}) => (<FontAwesome name="heart" size={23} color="black" style={{color:focused ? '#4e9bde' :'#BDBDBD', marginTop:14,}}/>),
              tabBarLabel: '찜',
              title:'',
              headerLeft:()=>
                <View>
                  <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>찜</Text>
                </View>,
           }}/>

            <Tab.Screen name="mypage" component={MypageScreen} 
            options={{
              tabBarIcon: ({focused}) => (<Ionicons name="person" size={24} color="black" style={{color:focused ? '#4e9bde' :'#BDBDBD', marginTop:14,}}/>),
              tabBarLabel: '마이페이지',
              title:'',
              headerLeft:()=>
                <View>
                  <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>마이페이지</Text>
                </View>,
             }}/>

        </Tab.Navigator>
  );
};


const HomeStack = createStackNavigator();

function HomeStackScreen({navigation}){
  return(
      <HomeStack.Navigator>
        <Stack.Screen name="home" component={HomeScreen}
        options={{
          title:'',
          headerShown:false,
          headerLeft:()=>
            <View>
              <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>홈</Text>
            </View>,
        }}
        />

        <Stack.Screen name="rcmd" component={RcmdScreen}
        options={{
          title:'',
          headerShown:false,
          headerLeft:()=>
            <View>
              <Entypo name="chevron-left" size={24} color="#424242" style={{marginLeft:20, marginBottom:5,}} />
            </View>,
        }}
        />

        <Stack.Screen name="reset" component={ResetScreen}
        options={{
          headerShown:false,
        }}
        />
      </HomeStack.Navigator>
  )
}

export default App;