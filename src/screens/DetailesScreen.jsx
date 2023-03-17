import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
  linkText: {
    fontSize: 20,
    marginTop: 10,
    textDecorationLine: 'underline',
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
        <Image style={styles.image} resizeMode="cover" source={{ uri: item.animeImg }} />
      </SharedElement>
      <SharedElement id={`item.${item.id}.animeTitle`}>
        <Text style={styles.text}>{item.animeTitle}</Text>
      </SharedElement>
      <SharedElement id={`item.${item.id}.releasedDate`}>
        <Text style={styles.text}>{`Relise date: ${item.releasedDate}`}</Text>
      </SharedElement>
      <SharedElement id={`item.${item.id}.animeUrl`}>
        <Text style={styles.linkText} onPress={() => Linking.openURL(item.animeUrl)}>
          You can watch this anime here.
        </Text>
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
      id: `item.${item.id}.animeImg`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.title`,
      animation: 'fade',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.releasedDate`,
      animation: 'fade',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.animeUrl`,
      animation: 'fade',
      resize: 'clip',
    },
  ];
};

export default DetaileScreen;
