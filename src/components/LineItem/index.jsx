import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { capitalize } from '../../util/Index';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    backgroundColor: '#E96479',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  textContainer: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    margin: 7,
  },
  image: {
    height: 177,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: '#F5E9CF',
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function LineItem({ item }) {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.thumbnailUrl }} />
      <Text numberOfLines={1} style={styles.textContainer}>
        {capitalize(item.title + item.title)}
      </Text>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => console.log(`you liked ${item.title} with id:${item.id}`)}
      >
        <Ionicons name="heart-outline" color="red" size={20} />
      </TouchableOpacity>
    </View>
  );
}

export default LineItem;
