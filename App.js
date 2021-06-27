import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions, ScrollView, ImageBackground, TouchableHighlight } from 'react-native';
import { useFonts, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold } from '@expo-google-fonts/rubik'

const windowWidth = Dimensions.get('window').width - 40;
const windowHeight = Dimensions.get('window').height;
const dims = {
  tileWidth: windowWidth * .47,
  tileHeight: windowWidth * 47 / 130,
  tileMargin: windowWidth * .05,
}

function tileGen() {
  let tiles = [];
  for (let i = 0; i < 12; i++) {
    tiles.push(
      <TouchableOpacity style={[styles.tile, { backgroundColor: '#fbe46e', }]}>
        <Text style={font.tile}>Practice a Yoga Pose</Text>
      </TouchableOpacity>)
  };
  return tiles;
};

// const windowHeight = Dimensions.get('window').height;

function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });


  if (!fontsLoaded) { return <View />; }

  return (

    <View>
      <ScrollView>
        <View>
          <ImageBackground source={require('./assets/header-background.png')} style={{ width: '100%' }}>
            <View style={styles.nav}>
              <Image style={{ width: 36, height: 36, }} source={require('./assets/tato.png')} />
              <Text style={[font.title, { margin: 20 }]}>Pomotato</Text>
            </View>
            <View style={{ paddingLeft: 20, }}>
              <Text style={font.today}>Today's Activities</Text>
              <View style={styles.row}>
                <ScrollView horizontal>
                  {/* START replace Dimensionswith API element */}
                  <TouchableOpacity style={[styles.tile, { marginRight: dims.tileMargin, backgroundColor: '#fbe46e', }]}>
                    <Text style={font.tile}>Practice a Yoga Pose</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.tile, { marginRight: dims.tileMargin, backgroundColor: '#fbe46e', }]}>
                    <Text style={font.tile}>Practice a Yoga Pose</Text>
                  </TouchableOpacity>
                  {/* END replace with API element */}
                  {/* <TouchableOpacity style={[styles.tile, { backgroundColor: '#DDD', borderWidth: 4, borderColor: '#919191', borderStyle: 'dashed' }]}>
                    <Text style={[font.tile, { textAlign: 'center' }]}> + </Text>
                  </TouchableOpacity> */}
                </ScrollView>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={{ padding: 20, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={font.allActivities}>All Activities</Text>
            <View style={styles.callToAction}>
              <Text style={font.callToAction}>Add item</Text>
            </View>
          </View>

          <View style={styles.browse}>

            {/* generates activities tiles from database */}
            {tileGen()}

          </View>
        </View>

      </ScrollView>
      <Text style={{ backgroundColor: '#000' }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;


const font = StyleSheet.create({
  title: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 16,
  },

  today: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 24,
    padding: 10,
  },
  allActivities: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 20,
    paddingVertical: 10,
  },
  tile: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 16,
  },
  category: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 13,
  },
  callToAction: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 14,
  },
})


const styles = StyleSheet.create({
  nav: {
    width: '100%',
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  tile: {
    width: dims.tileWidth,
    height: dims.tileHeight,
    marginVertical: dims.tileMargin,
    padding: 10,
    // aspectRatio: 130 / 100,
    borderRadius: 8,
    justifyContent: "center",
  },
  row: {
    flexDirection: 'row',
    height: dims.tileHeight + 40,
  },
  browse: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  callToAction: {
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#191919',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height: windowHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontFamily: 'Rubik',
    color: '#191919',
    // justifyContent: 'center',
  }
});