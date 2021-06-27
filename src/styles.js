import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width - 40;
const windowHeight = Dimensions.get('window').height;

export const dims = {
  tileWidth: windowWidth * .47,
  tileHeight: windowWidth * 47 / 130,
  tileMargin: windowWidth * .05,
}  

export const font = StyleSheet.create({
  title: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 16,
    marginHorizontal: 20,
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


export const styles = StyleSheet.create({
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
    justifyContent: 'center',
    height: dims.tileHeight + 20,
    overflow: 'hidden',
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
    backgroundColor:'#fff',
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

