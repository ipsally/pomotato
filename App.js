import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Image } from 'react-native';
import { useFonts, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold } from '@expo-google-fonts/rubik'
import { styles, dims, font} from './src/styles';
import HomeScreen from './src/Home';
import Activity from './src/Activity';
import Today from './src/Today';

const Stack = createStackNavigator();

function LogoTitle() {
  return (<View style={styles.nav}>
    <Image style={{ width: 36, height: 36, }} source={require('./assets/tato.png')} />
    <Text style={font.title}>Pomotato</Text>
  </View>)
}

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
        <Stack.Screen name="Home" component={HomeScreen} options={{ header: props => <LogoTitle {...props} /> }} />
        <Stack.Screen name="Activity" component={Activity} options={{ header: props => <LogoTitle {...props} /> }} />
        <Stack.Screen name="Today" component={Today} options={{ header: props => <LogoTitle {...props} /> }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

  );

}

export default App;
