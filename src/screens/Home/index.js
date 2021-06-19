import React from 'react';
import { SafeAreaView, ImageBackground, Text, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Pressable style={styles.searchButton} onPress={() => {}}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Para onde você desejar ir?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}
      >
        <Text style={styles.title}>Para onde vamos?</Text>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttoText}>Explore lugares próximos!</Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
