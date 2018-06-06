import React from 'react'
import {View, TextInput} from 'react-native'


const Settings = ({onChange, value}) => (
  <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={onChange}
        value={value}
      />
  </View>
);

export default Settings;