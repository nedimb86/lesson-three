import React, {Component} from 'react'
import {ScrollView, View, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight, TextInput, Text} from 'react-native';
import {SCREENS} from "../utils/consts";
import styles from '../utils/styles';

class Home extends Component {
  state={
    value: ''
  };

  onChange = (value) => {
    this.setState({value})
  };

  render() {
    const {navigation: {push, replace}} = this.props;
    const {value} = this.state;
    return (
      <ScrollView>
        <TouchableHighlight onPress={() => push(SCREENS.SVIEW)} style={styles.blueBg}>
          <View style={styles.button}>
            <Text style={styles.text}>Simple View</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => push(SCREENS.SCVIEW)} style={styles.redBg}>
          <View style={styles.button}>
            <Text style={styles.text}>Scroll View</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={() => push(SCREENS.FLIST)} style={styles.blueBg}>
          <View style={styles.button}>
            <Text style={styles.text}>Flat List</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableNativeFeedback onPress={() => push(SCREENS.SLIST)} style={styles.redBg}>
          <View style={styles.button}>
            <Text style={styles.text}>Section List</Text>
          </View>
        </TouchableNativeFeedback>
        <TextInput
          style={styles.input}
          onChangeText={this.onChange}
          value={value}
        />
      </ScrollView>
    );
  }
};

export default Home