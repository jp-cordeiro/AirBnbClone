import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://content.r9cdn.net/rimg/himg/10/f3/2c/ostrovok-8312746-5c066de3e1015d49b154dd86eebb7d3ec70ac948-646249.jpg'
        }}
      />
      {/* Bed & Bedrroms */}
      <Text style={styles.bedrooms}>1 cama 1 quarto</Text>

      {/* Type & Description */}
      <Text style={styles.description}>Descrição</Text>

      {/* Old price & New price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>R$ 150 </Text>
        <Text style={styles.newPrice}> R$ 100 / noite </Text>
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>R$ 100</Text>
    </View>
  );
};

export default Post;
