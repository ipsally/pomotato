import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles, dims, font} from './styles';
function Activity({ navigation }) {

  return (

    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>
          HELLO THIS IS DETAILS PAGE
        </Text>

      </ScrollView>
    </View>
  );
}

export default Activity;
