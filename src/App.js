import React from 'react';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import ImgText from './components/ImgText';
import Image from './components/Image';
import Card from './components/Card';
import Banner from './components/Banner';
import Text from './components/Text';
import Footer from './components/Footer';
import Contents from './components/Contents';

//자바스크립트 : 동적인 부분(데이터)
//데이터 입력, 출력(데이터 저정하기, 데이터 불러오기)
//데이터 실행, 제어
//데이터 저장 : 변수, 상수, 배열(1개이상 여러개), 객체(키와 값으로 이루어진 정보 저장)
//데이터 출력 : 변수, 상수, 배열, 객체

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Contents>
        <Slider fonts={['slider__wrap', 'nexon']} />
        <Image skill={['section', 'nexon']} />
        <ImgText skill={['section', 'nexon', 'gray']} />
        <Card skill={['section', 'nexon']} />
        <Banner skill={['section', 'gmarket']} />
        <Text skill={['section', 'nexon']} />
      </Contents>
      <Footer skill={['section', 'nexon', 'gray']} />
    </>
  );
}

export default App;
