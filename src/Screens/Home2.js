import React, {Component} from 'react'
import {View, TouchableOpacity, TextInput, Text, AsyncStorage} from 'react-native';
import {STORAGE} from "../utils/consts";
import styles from '../utils/styles';

class Home2 extends Component {
  state={
    value: '',
    saved: false,
  };

  onChange = (value) => {
    this.setState({value})
  };

  componentWillMount(){
    this.getStorageItem();
  }
  getStorageItem = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE.INPUT_VALUE);
      if (value !== null){
        this.setState({value})
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  setStorageItem = async () => {
    try {
      AsyncStorage.setItem(STORAGE.INPUT_VALUE, this.state.value).then(() => this.setState({saved: true}));
    } catch (error) {
      // Error saving data
      console.log(error)
    }
  };

  render() {
    const {value, saved} = this.state;
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={this.onChange}
          value={value}
        />
        <TouchableOpacity onPress={this.setStorageItem} style={styles.blueBg}>
          <View style={styles.button}>
            <Text style={styles.text}>Save value</Text>
          </View>
        </TouchableOpacity>
        {saved && <Text style={styles.textBlack}>Value has been saved</Text>}
      </View>
    );
  }
};

export default Home2