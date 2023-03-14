import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import LineItem from '../components/LineItem';

const styles = StyleSheet.create({
  navigatorContainer: {
    backgroundColor: '#F5E9CF',
  },
});

export default function FavoritesScreen() {
  const photos = useSelector((state) => state.photos.favorites);

  return (
    <View style={styles.navigatorContainer}>
      <SafeAreaView>
        <FlatList
          data={photos}
          ItemSeparatorComponent={<View style={{ marginTop: 19 }} />}
          renderItem={({ item }) => <LineItem item={item} />}
          keyExtractor={({ id }) => id.toString()}
        />
      </SafeAreaView>
    </View>
  );
}
