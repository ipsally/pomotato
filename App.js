import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Image } from 'react-native';
import { useFonts, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold } from '@expo-google-fonts/rubik'
import { styles, font} from './src/styles';
import HomeScreen from './src/Home';
import Activity from './src/Activity';
import Today from './src/Today';
import New from './src/New';
import Timer from './src/Timer';
// import base from './src/db';

const Stack = createStackNavigator();

  <View style={styles.nav}>
    <Image style={{ width: 36, height: 36, }} source={require('./assets/tato.png')} />
    <Text style={font.$H3}>Pomotato</Text>
  </View>

function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });
  if (!fontsLoaded) { return <View />; }

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerStyle: {height: 0}}} />
        <Stack.Screen name="Activity" component={Activity} options={{ headerStyle: {height: 0}}} />
        <Stack.Screen name="Today" component={Today} options={{ headerStyle: {height: 0}}} />
        <Stack.Screen name="New" component={New} options={{ headerStyle: {height: 0}}} />
        <Stack.Screen name="Timer" component={Timer} options={{ headerStyle: {height: 0}}} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

  );

}

export default App;
