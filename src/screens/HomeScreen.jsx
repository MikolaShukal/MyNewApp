import { StyleSheet, View, SafeAreaView, FlatList, TextInput } from 'react-native';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '../../assets/SearchIcon';
import LineItem from '../components/LineItem';
import { setPhotos } from '../slices/photosSlice';

const styles = StyleSheet.create({
  navigatorContainer: {
    backgroundColor: '#F5E9CF',
  },

  searchField: {
    borderWidth: 1,
    backgroundColor: '#554D64',
    borderRadius: 53,
    marginHorizontal: 20,
    marginBottom: 22,
    color: '#ffff',
    height: 46,
  },
  searchIcon: {
    marginLeft: 12,
    marginBottom: 13,
    marginTop: 12,
    position: 'absolute',
  },
  textInput: {
    marginLeft: 46,
    marginBottom: 13,
    marginTop: 13,
  },
  textInputField: {
    color: 'white',
    height: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 19,
  },
});

export default function HomeScreen() {
  const [photosArray, setPhotosArray] = useState([]);
  const [searchArray, setSearchArray] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then((response) => response.json())
      .then((json) => {
        setSearchArray(json);
        setPhotosArray(json);
        dispatch(setPhotos(json));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchByTitleFunction = (text) => {
    if (text) {
      const newData = photosArray.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearchArray(newData);
      setSearch(text);
    } else {
      setSearchArray(photosArray);
      setSearch(text);
    }
  };

  return (
    <View style={styles.navigatorContainer}>
      <SafeAreaView>
        <View style={styles.searchField}>
          <View style={styles.textInput}>
            <TextInput
              value={search}
              onChangeText={(text) => searchByTitleFunction(text)}
              placeholder="Search..."
              placeholderTextColor="#FFFFFF75"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInputField}
            />
          </View>
          <View style={styles.searchIcon}>
            <SearchIcon />
          </View>
        </View>
        <FlatList
          data={searchArray}
          ItemSeparatorComponent={<View style={{ marginTop: 19 }} />}
          renderItem={({ item }) => <LineItem item={item} />}
          keyExtractor={({ id }) => id.toString()}
        />
      </SafeAreaView>
    </View>
  );
}
