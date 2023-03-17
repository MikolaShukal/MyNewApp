import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SharedElement } from 'react-navigation-shared-element';

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    paddingTop: 80,
  },
  image: {
    height: 600,
    width: 400,
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    top: 90,
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const DetaileScreen = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={styles.itemContainer}>
      <SharedElement id={`item.${item.id}.thumbnailUrl`}>
        <Image style={styles.image} resizeMode="cover" source={{ uri: item.url }} />
      </SharedElement>
      <SharedElement id={`item.${item.id}.title`}>
        <Text style={styles.text}>{item.title}</Text>
      </SharedElement>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="close-circle-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

DetaileScreen.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.id}.thumbnailUrl`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.title`,
      animation: 'fade',
      resize: 'clip',
    },
  ];
};

export default DetaileScreen;
