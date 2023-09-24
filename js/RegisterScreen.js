import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Auth } from 'aws-amplify';


function MainScreen({ navigation }) {

    const [count, setCount] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordconfirm, setPasswordconfirm] = useState(null);
    const [email, setEmail] = useState(null);
    const [error, setError] = useState(null); // Declare the error state variable

    async function signIn() {
        try {
            const user = await Auth.signIn(username, password);
            console.log('user:', user);
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email
                },
                autoSignIn: {
                    enabled: true,
                }
            });
            console.log(user);
            signIn(username, password);
            navigation.navigate('budget');
        } catch (error) {
            console.log('error signing up:', error);
            setError(error.message); // Set the error message
        }
    }
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={{ fontWeight: '900', fontSize: 28, color: "#6fbbf2", marginTop: 135, }}>회원가입</Text>
            </View>

            <View style={styles.one}>
                <Text style={{ fontWeight: '900', fontSize: 14, color: "#6fbbf2" }}>아이디</Text>
                <TextInput placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} style={[styles.input, { paddingLeft: 10 }]} />

                <Text style={{ fontWeight: '900', fontSize: 14, color: "#6fbbf2", marginTop: 15, }}>비밀번호</Text>
                <TextInput placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={[styles.input, { paddingLeft: 10 }]} />

                <Text style={{ fontWeight: '900', fontSize: 14, color: "#6fbbf2", marginTop: 15, }}>비밀번호 확인</Text>
                <TextInput placeholder="Password Confirm" value={passwordconfirm} onChangeText={(text) => setPasswordconfirm(text)} secureTextEntry={true} style={[styles.input, { paddingLeft: 10 }]} />

                <Text style={{ fontWeight: '900', fontSize: 14, color: "#6fbbf2", marginTop: 15, }}>이메일</Text>
                <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} style={[styles.input, { paddingLeft: 10 }]} />
                
            </View>

            {error && (
                <Text style={{ color: 'red', paddingHorizontal:35, paddingVertical:10 }}>{error}</Text>
            )}

            <StatusBar style="auto" />

            <TouchableOpacity onPress={() => signUp()} activeOpacity={0.6} style={{ opacity: 0.8, marginTop: 20, }}>
                <LinearGradient
                    colors={['#81d8f6', '#62cef4', '#5fc7f1', '#6fbbf2', '#79b4f3', '#74a6f3']}
                    start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                    style={{ height: 45, width: 325, borderRadius: 15, marginTop: 25, marginBottom: 5 }}>
                    <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', fontWeight: '900', marginTop: 13, }}>회원가입</Text>
                </LinearGradient>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('login', { click: count })} style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ color: "grey", }}>로그인 페이지로 돌아가기</Text>
            </TouchableOpacity>


        </View>
    );

} export default MainScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'column',
        marginTop: 12
    },
    detail: {
        backgroundColor: "white",
        flexDirection: 'Low',
        //alignItems:'center',
        bordercolor: 'black'
    },
    one: {
        backgroundColor: 'white',
        marginTop: 50,

        
    },
    input: {
        backgroundColor: '#f4f4f4',
        marginVertical: 5,
        width: 325,
        height: 45,
        fontSize: 16,
        fontWeight: '600',
        borderRadius: 15,
    },

    btn: {
        flex: 1,
        backgroundColor: "#078C74",
        paddingVertical: 15,
        marginLeft: 10,
        width: 300,
        borderRadius: 15,
        marginTop: 10,
    },


});