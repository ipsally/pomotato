import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { styles, dims, font } from './styles';

function New({ navigation }) {

    const $activityLength = ['Short', 'Medium', 'Long']
    const $activityEffort = ['Low Effort', 'High Effort']
    const $categories = [
        'All',
        'Cleaning',
        'Body',
        'Creative',
        'Self-care',
    ]
    const $moods = [
        'Favourites',
        'Mind',
        'Food',
        'Social',
        'Media',
        'Relax&De-stress',
        'Get inspired',
        'Boost energy',
        'Feel productive',
    ]
    function filterGen(type) {
        return type.map(
            x => (<TouchableHighlight style={[styles.category]} onPress={() => console.log(x)} >
                <Text style={font.$H4}>{x}</Text>
            </TouchableHighlight>))
    };
    return (

        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20 }} >
                    {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <View style={{ justifyContent: 'center', borderBottomWidth: 1, height: 60, marginVertical: 20 }}>
                            <TextInput style={font.$H1} placeholder={'Activity name...'}></TextInput>
                        </View>
                    </View>
                    <View style={{ marginVertical: 20, flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <Text style={font.$H3}>Select Tags</Text>
                    </View>
                    <View>
                        <Text style={font.$H6}>Activity Length</Text>
                    </View>
                    <View style={{ marginVertical: 20, flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <View style={styles.filters}>
                            {filterGen($activityLength)}
                        </View>
                    </View>
                    <View>
                        <Text style={font.$H6}>Effort Level</Text>
                    </View>
                    <View style={{ marginVertical: 20, flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <View style={styles.filters}>
                            {filterGen($activityEffort)}
                        </View>
                    </View>
                    <View>
                        <Text style={font.$H6}>Activity Category</Text>
                    </View>
                    <View style={{ marginVertical: 20, flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={[styles.filters, { width: '100%', justifyContent: 'flex-start' }]}>
                                {filterGen($categories)}
                            </View>
                        </ScrollView>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={[styles.filters, { width: '100%', justifyContent: 'flex-start' }]}>
                                {filterGen($moods)}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ marginVertical: 20, flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <Text style={font.$H3}>Activity Note</Text>
                    </View>

                    <View style={{ borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, padding: 10, marginBottom: 80, justifyContent: 'center' }}>
                        <TextInput multiline style={[font.$H7, { lineHeight: 22, paddingTop: 0, minHeight: 125 }]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis, repudiandae cumque aperiam culpa delectus, voluptatibus nihil earum minima</TextInput>
                    </View>
                    {/* </TouchableWithoutFeedback> */}
                </ScrollView>
        </KeyboardAvoidingView>
                <View style={styles.footer}>
                    <TouchableOpacity style={[styles.activityCallToAction, { backgroundColor: '#000', alignSelf: 'stretch' }]} onPress={() => alert(`New activity saved!`)}>
                        <Text style={[font.$H6, { color: '#fff' }]}>Save New Activity</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

export default New;
