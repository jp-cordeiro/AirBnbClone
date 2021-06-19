import React from 'react';
import { FlatList, View } from 'react-native';
import Post from '../../components/Post';

import dataFeed from '../../../assets/data/feed';

const PostListScreen = () => {
  return (
    <View>
      <FlatList
        data={dataFeed}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
};

export default PostListScreen;
