import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, ImageBackground, TouchableHighlight } from 'react-native';
import { styles, dims, font } from './styles';

function Today({ navigation }) {

    function todayGen() {
        let tiles = [];

        for (let i = 0; i < 12; i++) {
            tiles.push(
                <TouchableOpacity style={[styles.tile, { marginRight: dims.tileMargin / 2, backgroundColor: '#fbe46e', }]} onPress={() => navigation.navigate('Activity')}>
                    <Text style={font.tile}>Practice a Yoga Pose</Text>
                </TouchableOpacity>)
        };
        return tiles;
    };
    return (

        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ padding: 20, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={font.today}>Today's List</Text>
                        </View>
                        <View style={styles.browse}>

                            {/* generates activities tiles from database */}
                            {todayGen()}

                        </View>
                    </View>
                </View>
            </ ScrollView>
        </View >
    );
}

export default Today;
