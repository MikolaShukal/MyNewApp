import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';

import * as React from 'react';
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { capitalize } from '../util/Index';

import SearchIcon from '../../assets/SearchIcon'


export default function HomeScreen () {

    const [photosArray, setPhotosArray] = useState([])
    const [likedArray, setLikedArray] = useState([])
    const [searchArray, setSearchArray] = useState([])
    const [search, setSearch] = useState ('')
  
    useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
        .then(response => response.json())
        .then(json => {
            setSearchArray(json)
            setPhotosArray(json)
        })
        .catch(error => {
          console.error(error)
        });
    },[])  

    const searchByTitleFunction = (text) => {
        if (text) {
            const newData = photosArray.filter( function (item) {
                const itemData = item.title ?
                item.title.toUpperCase()
                : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
        })
            setSearchArray(newData)
            setSearch(text)
        }else {
            setSearchArray(photosArray)
            setSearch(text)
        }
    }

    
  

  console.log(JSON.stringify(likedArray, null, 4))
  
  
    const Item = ({item}) => (
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={{uri: item.thumbnailUrl}}/>
        <Text numberOfLines={1} style={styles.textContainer}>{capitalize(item.title + item.title)}</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={() => console.log(`you liked ${item.title} with id:${item.id}`)}>
            <Ionicons name='heart-outline' color={'red'} size={20}/>
       </TouchableOpacity>
      </View>
    )
    
  
    return (
      <View style={styles.navigatorContainer}>
        <SafeAreaView>
           <View style={styles.searchField}>
            <View style={styles.textInput}>
            <TextInput value={search} onChangeText={(text) => searchByTitleFunction(text)}
             placeholder='Search...' placeholderTextColor={'#FFFFFF75'} 
             autoCapitalize='none'
             autoCorrect={false}
             style={styles.textInputField}/>
            </View>
            <View style={styles.searchIcon}>
           <SearchIcon />
           </View>
           </View>
          <FlatList data={searchArray} ItemSeparatorComponent={<View style={{marginTop: 19}}/>}
          renderItem={({item}) => <Item item={item}/>}
          keyExtractor={({id}) => id.toString()}
          />
        </SafeAreaView>
      </View>
    )
  }

  
  const styles = StyleSheet.create ({
    navigatorContainer: {
      backgroundColor: '#F5E9CF',
    },
    itemContainer: {
        flexDirection:'column',
        backgroundColor: '#E96479',
        borderRadius: 10,
        marginHorizontal: 20,
    },
    textContainer: {
        fontSize:16,
        fontWeight:'600',
        color:'#FFFFFF',
        margin:7
    },
    image: {
        height:177,
        width:'100%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    iconContainer: {
        position: 'absolute',
        right:8,
        top: 8,
        backgroundColor: '#F5E9CF',
        borderRadius:50,
        width:35,
        height:35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchField: {
        borderWidth: 1,
        backgroundColor: '#554D64',
        borderRadius: 53,
        marginHorizontal: 20,
        marginBottom: 22,
        color: '#ffff',
        height: 46
    },
    searchIcon: {
        marginLeft: 12, 
        marginBottom: 13,
        marginTop: 12,
        position: 'absolute'
    },
    textInput: {
        marginLeft: 46,
        marginBottom: 13,
        marginTop:13
    },
    textInputField: {
        color: 'white',
        height: 20,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 19,
        
    }
  })