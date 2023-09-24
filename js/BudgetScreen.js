import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';


function MainScreen({ navigation }) {
  const [progressValue, setProgressValue] = useState(0);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorViewRef, setErrorViewRef] = useState(null); // Add this state

  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setProgressValue(0.3);
    }, 100); // 1초 후에 0.3으로 변경 (원하는 시간으로 조절 가능)
  }, []); // 빈 배열을 두어 한 번만 실행되도록 설정

  useEffect(() => {
    if (inputText.trim() !== '') {
      // 입력값이 비어 있지 않은 경우 에러 메시지를 숨깁니다.
      setShowErrorMessage(false);
    }
  }, [inputText]);


  // TouchableOpacity를 눌렀을 때 호출되는 함수
  const handleNextPress = () => {
    if (inputText.trim() === '') {
      // 입력이 비어 있는 경우
      setIsInputEmpty(true);
      setShowErrorMessage(true); // 에러 메시지를 보이도록 설정
    } else {
      // 입력이 비어 있지 않은 경우
      setIsInputEmpty(false);
      setShowErrorMessage(false); // 에러 메시지를 숨기도록 설정
      console.log(inputText)
      // 여기에서 다음 화면으로 이동하거나 다른 작업을 수행할 수 있습니다.
      navigation.navigate('color', {
        input_username: '',
        input_budget: inputText,
        input_cp: [],
        input_fp: [],
      });
    }
  };

  return (
    <View style={styles.container}>
      <Progress.Bar progress={progressValue} width={330} color="#99bdef" style={{ marginTop: 100 }} />
      <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 12, color: '#99bdef' }}>30%</Text>

      <View style={styles.ask1}>
        <Text style={styles.askcolor}>전체 예산을</Text>
        <Text style={styles.askcolor}>알려주세요</Text>
        <Text style={styles.daskcolortiny}>1,000만원 이내로 설정해주세요!</Text>
      </View>

      <Animatable.View
        ref={setErrorViewRef}
        style={{ flexDirection: 'row', alignItems: 'center' }}
        animation={showErrorMessage ? 'shake' : undefined} // Apply the "shake" animation when there's an error
      >

        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          returnKeyType="done"
          placeholder="250,000"
          value={inputText}
          onChangeText={(text) => {
            if (text === '' || (parseInt(text) <= 1000000)) {
              setInputText(text);
              setIsInputEmpty(text.trim() === '');
            }
          }}
        />


        <Text style={{ fontSize: 38, color: '#BDBDBD', marginTop: 31, fontWeight: '400', marginLeft: 10 }}>
          원
        </Text>
      </Animatable.View>

      {showErrorMessage && (
        <Text style={{ marginTop: 5, fontSize: 15, color: 'red' }}>입력값이 비어있습니다</Text>
      )}

      <View style={{ flex: 0.7, marginTop: 250, alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={handleNextPress} activeOpacity={0.5} style={{ opacity: 0.7 }}>
          <LinearGradient
            colors={['#81d8f6', '#62cef4', '#5fc7f1', '#6fbbf2', '#79b4f3', '#74a6f3']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            style={{ height: 47, width: 100, borderRadius: 15, marginTop: 10, marginBottom: 5 }}>
            <Text style={{ color: 'white', fontSize: 18, textAlignVertical: "center", textAlign: 'center', fontWeight: '900', marginTop: 15 }}>다음으로</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  ask1: {
    flex: 0.3,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 150,
  },
  askcolor: {
    fontSize: 28,
    fontWeight: "900",
  },
  textInput: {
    borderColor: 'white',
    fontSize: 40,
    marginTop: 30,
  },
  box: {
    marginBottom: 10,
  },
  box2: {
    backgroundColor: "#5e5e5e",
    opacity: 0.2,
    height: 1.2,
    marginRight: 122,
    marginTop: 3,
  },
  button: {
    flex: 1.4,
    marginLeft: 286,
  },
  daskcolortiny: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "400",
  },
});

export default MainScreen;
