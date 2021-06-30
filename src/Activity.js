import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles, dims, font } from './styles';

function filterGen(type) {
  return type.map(
    x => (<View style={[styles.category]} onPress={() => alert(x)} >
      <Text style={font.$H4}>{x}</Text>
    </View>))
};

const $otherCategories = ['Social', 'Miracle']

function Activity({ navigation }) {
  function relatedGen() {
    let tiles = [];
  
    for (let i = 0; i < 3; i++) {
      tiles.push(
        <TouchableOpacity style={[styles.tile, { marginRight: dims.tileMargin / 2, backgroundColor: '#fbe46e', }]} onPress={() => navigation.navigate('Activity')}>
          <Text style={font.$H4}>Practice a Yoga Pose</Text>
        </TouchableOpacity>)
    };
    return tiles;
  };

  return (

    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 80}} >
        <View style={{ padding: 20, backgroundColor: 'tomato', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <View style={{ height: 106, justifyContent: 'center' }}>
            <Text style={font.$H1}>Lorem ipsum dolor sit</Text>
          </View>
          <View style={styles.filters}>
            {filterGen($otherCategories)}
          </View>
        </View>
        <View style={{ margin: 20 }}>
          <Text style={font.$H3}>Activity Notes</Text>
        </View>
        <View style={{ marginHorizontal: 20, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, padding: 10 }}>
          <Text style={[font.$H7, { lineHeight: 22 }]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis, repudiandae cumque aperiam culpa delectus, voluptatibus nihil earum minima similique numquam saepe et quos pariatur! Quo ea laborum aliquam </Text>
        </View>
        <View style={{ margin: 20}}>
          <Text style={font.$H3}>Similar Activities</Text>
          <View style={styles.row}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {relatedGen()}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.activityCallToAction} onPress={() => navigation.navigate('Home')}>
          <Text style={font.$H6}>Add to Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.activityCallToAction, { backgroundColor: '#000' }]} onPress={() => navigation.navigate('Timer')}>
          <Text style={[font.$H6, { color: '#fff' }]}>Start Timer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Activity;
