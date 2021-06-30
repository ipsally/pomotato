import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles, dims, font } from './styles';


function Timer({ navigation }) {
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
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 80 }} >
                <View style={{ padding: 20, flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={font.$H1}>Call or Message a Friend</Text>
                    </View>
                    <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>TIMER PLACEHOLDER</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={styles.activityCallToAction} onPress={() => navigation.navigate('Timer')}>
                        <Text style={font.$H6}>Reset Timer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.activityCallToAction, { backgroundColor: '#000' }]} onPress={() => navigation.navigate('Timer')}>
                        <Text style={[font.$H6, { color: '#fff' }]}>Start Timer</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'flex-start', margin: 20 }}>
                    <Text style={font.$H3}>Activity Notes</Text>
                    <View style={{ marginVertical: 20, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, padding: 10 }}>
                        <Text style={[font.$H7, { lineHeight: 22 }]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis, repudiandae cumque aperiam culpa delectus, voluptatibus nihil earum minima similique numquam saepe et quos pariatur! Quo ea laborum aliquam </Text>
                    </View>
                    <Text style={font.$H3}>Similar Activities</Text>
                    <View style={styles.row}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {relatedGen()}
                        </ScrollView>
                    </View>
                </View>

            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={[styles.activityCallToAction, { backgroundColor: '#000', alignSelf: 'stretch' }]} onPress={() => alert(`Congrats on finishing!`)}>
                    <Text style={[font.$H6, { color: '#fff' }]}>Complete Activity</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Timer;
