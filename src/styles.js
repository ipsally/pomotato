import { StyleSheet, Dimensions,  } from 'react-native';

export const windowWidth = Dimensions.get('window').width - 40;
export const windowHeight = Dimensions.get('window').height;

export const dims = {
    tileWidth: windowWidth * .47,
    tileHeight: windowWidth * 47 / 130,
    tileMargin: windowWidth * .05,
}

export const font = StyleSheet.create({
    $H1: {
        fontFamily: 'Rubik_700Bold',
        fontSize: 24,
    },
    $H2: {
        fontFamily: 'Rubik_700Bold',
        fontSize: 20,
    },
    $H3: {
        fontFamily: 'Rubik_700Bold',
        fontSize: 16,
    },
    $H4: {
        fontFamily: 'Rubik_500Medium',
        fontSize: 16,
    },
    $H5: {
        fontFamily: 'Rubik_500Medium',
        fontSize: 13,
    },
    $H6: {
        fontFamily: 'Rubik_500Medium',
        fontSize: 14,
    },
    $H7: {
        fontFamily: 'Rubik_400Regular',
        fontSize: 14,
    },
})


export const styles = StyleSheet.create({
    filters: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        overflow: 'hidden',
    },
    category: {
        paddingHorizontal: 10,
        margin: 3,
        height: 30,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E0E0E0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    browse: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    tile: {
        width: dims.tileWidth,
        height: dims.tileHeight,
        marginVertical: dims.tileMargin,
        padding: 10,
        borderRadius: 8,
        justifyContent: "center",
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: dims.tileHeight + 20,
        overflow: 'hidden',
    },
    callToAction: {
        paddingHorizontal: 10,
        height: 33,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#191919',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    activityCallToAction: {
        flex: 1,
        margin: 20,
        paddingHorizontal: 10,
        height: 33,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    nav: {
        width: '100%',
        margin: 20,
        height: 60,
        marginBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    footer: { 
        alignSelf: 'flex-end',
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around',
        position: 'absolute',
        height: 80,
        left: 0,
        backgroundColor: '#fff',
        width: '100%', 
    },
    container: {
        height: windowHeight,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
});

