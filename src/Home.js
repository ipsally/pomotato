import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, ImageBackground, TouchableHighlight } from 'react-native';
import { styles, dims, font } from './styles';
import allActivities from './db';

function HomeScreen({ navigation }) {

  function browseGen() {
    let tiles = [];
    for (let i = 0; i < 12; i++) {
      tiles.push(
        <TouchableOpacity style={[styles.tile, { backgroundColor: '#fbe46e', }]} onPress={() => navigation.navigate('Activity')}>
          <Text style={font.tile}>Practice a Yoga Pose</Text>
        </TouchableOpacity>)
    };
    return tiles;
  };

  function todayGen() {
    let tiles = [];
    
    for (let i = 0; i < 12; i++) {
      tiles.push(
        <TouchableOpacity style={[styles.tile, { marginRight: dims.tileMargin/2, backgroundColor: '#fbe46e', }]} onPress={() => navigation.navigate('Activity')}>
          <Text style={font.tile}>Practice a Yoga Pose</Text>
        </TouchableOpacity>)
    };
    return tiles;
  };
  return (

    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground source={require('../assets/header-background.png')} style={{ width: '100%' }}>
            <View style={{ padding: 20, }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={font.today}>Today's List</Text>
                <TouchableHighlight style={styles.callToAction} onPress={() => navigation.navigate('Today')}>
                  <Text style={font.callToAction}>See All</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.row}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {/* START replace Dimensionswith API element */}
                  {/* <TouchableOpacity style={[styles.tile, { marginRight: dims.tileMargin, backgroundColor: '#fbe46e', }]}>
                    <Text style={font.tile}>Practice a Yoga Pose</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.tile, { marginRight: dims.tileMargin, backgroundColor: '#fbe46e', }]}>
                    <Text style={font.tile}>Practice a Yoga Pose</Text>
                  </TouchableOpacity> */}
                  {/* END replace with API element */}
                  {/* generates activities tiles from database */}
                  {todayGen()}
                </ScrollView>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={{ padding: 20, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={font.allActivities}>All Activities</Text>
            <TouchableHighlight style={styles.callToAction} onPress={() => { }}>
              <Text style={font.callToAction}>Add item</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.browse}>

            {/* generates activities tiles from database */}
            {browseGen()}

          </View>
        </View>

      </ScrollView>
      {/* <Text style={{ backgroundColor: '#000' }}>Open up App.js to start working on your app!</Text> */}
    </View>
  );
}

export default HomeScreen;
