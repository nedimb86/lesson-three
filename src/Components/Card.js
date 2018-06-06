import React, {Component} from 'react'
import {Image, Text} from 'react-native'
import {Card as MCard} from 'react-native-material-ui';

class Card extends Component {
  componentDidMount() {
    console.log('Mounting component')
  }
  render() {
    const {username, img, name, email, phone, website} = this.props;
    return (
      <MCard key={username}>
        <Image source={{uri: img}} style={{height: 200}}/>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{phone}</Text>
        <Text>{website}</Text>
      </MCard>
    );
  }
}

export {Card};