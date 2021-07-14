import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { styles, dims, font } from './styles';
import * as SQLite from 'expo-sqlite';
import Category from './Category';


function HomeScreen({ navigation }) {

  function filterGen(categories) {
    return categories.map(
        category => (<TouchableHighlight style={[styles.category]} onPress={() => alert(category.name)} >
            <Text style={font.$H4}>{category.label}</Text>
        </TouchableHighlight>))
  };

  function browseGen() {

    let tiles = [];
    for (let i = 0; i < 6; i++) {
      tiles.push(
        <TouchableOpacity style={[styles.tile, { backgroundColor: '#fbe46e', }]} onPress={() => navigation.navigate('Activity')}>
          <Text style={font.$H4}>Practice a Yoga Pose</Text>
        </TouchableOpacity>)
    };
    return tiles;
  };

  function todayGen() {
    let tiles = [];

    for (let i = 0; i < 12; i++) {
      tiles.push(
        <TouchableOpacity style={[styles.tile, { marginRight: dims.tileMargin / 2, backgroundColor: '#fbe46e', }]} onPress={() => navigation.navigate('Activity')}>
          <Text style={font.$H4}>Practice a Yoga Pose</Text>
        </TouchableOpacity>)
    };
    return tiles;
  };
  return (

    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground source={require('../assets/header-background.png')} style={{ width: '100%' }}>
      <View style={styles.nav}>
    <Image style={{ width: 36, height: 36, }} source={require('../assets/tato.png')} />
    <Text style={font.$H3}>Pomotato</Text>
  </View>
            <View style={{ padding: 20, }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={font.$H1}>Today's List</Text>
                <TouchableHighlight style={styles.callToAction} onPress={() => navigation.navigate('Today')}>
                  <Text style={font.$H6}>See All</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.row}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {todayGen()}
                </ScrollView>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={{ margin: 20}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20}}>
            <Text style={font.$H2}>All Activities</Text>
            <TouchableHighlight style={styles.callToAction} onPress={() => navigation.navigate('New')}>
              <Text style={font.$H6}>Add item</Text>
            </TouchableHighlight>
          </View>

          {/* /////////////////////////////////////// */}
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.filters, { width: '100%', justifyContent: 'flex-start' }]}>
              {filterGen(Category.filter(category => category.type == 'theme'))}
            </View>
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.filters, { width: '100%', justifyContent: 'flex-start' }]}>
              {filterGen(Category.filter(category => category.type == 'mood'))}
            </View>
            {/* <View style={[styles.filters, { width: '100%', justifyContent: 'flex-start' }]}>
              {filterGen($moods)}
            </View> */}
          </ScrollView>


          
        <View style={styles.browse}>

            {/* generates activities tiles from database */}
            {browseGen()}

          </View>
        </View>
                    <TouchableOpacity style={[styles.activityCallToAction, { backgroundColor: '#000'}]} onPress={() => alert(`New activity saved!`)}>
                        <Text style={[font.$H6, { color: '#fff' }]}>Save New Activity</Text>
                    </TouchableOpacity>
      </ScrollView>
      {/* <Text style={{ backgroundColor: '#000' }}>Open up App.js to start working on your app!</Text> */}
    </View>
  );
}

export default HomeScreen;
