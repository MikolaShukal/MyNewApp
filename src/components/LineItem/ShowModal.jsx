import React from 'react';
import { Image, Modal, StyleSheet, Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    justifyContent: 'center',
    marginTop: 200,
    margin: 20,
    backgroundColor: '#F5E9CF',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  image: {
    height: 500,
    width: '100%',
  },
});

const ShowModal = ({ item, modalVisible, hide }) => (
  <View style={styles.centeredView}>
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalView}>
        <Image style={styles.image} source={{ uri: item.url }} />
        <Pressable style={styles.button} onPress={hide}>
          <Ionicons name="arrow-down-circle-outline" color="black" size={30} />
        </Pressable>
      </View>
    </Modal>
  </View>
);

export default ShowModal;
