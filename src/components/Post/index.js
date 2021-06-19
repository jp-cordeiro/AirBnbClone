import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image
        }}
      />
      {/* Bed & Bedrroms */}
      <Text style={styles.bedrooms}>{post.title}</Text>

      {/* Type & Description */}
      <Text style={styles.description}>{post.type}</Text>

      {/* Old price & New price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>R$ {post.oldPrice} </Text>
        <Text style={styles.newPrice}> R$ {post.newPrice} / noite </Text>
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>R$ {post.totalPrice}</Text>
    </View>
  );
};

export default Post;
