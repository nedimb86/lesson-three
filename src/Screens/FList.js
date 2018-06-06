import React from 'react'
import {FlatList} from 'react-native'
import {data} from '../utils/data'

import {Card} from '../Components/Card'

const FList = () => (
  <FlatList
    data={data}
    renderItem={({item}) => <Card key={item.username} img={item.img} name={item.name}
                                  phone={item.phone} email={item.email} website={item.website} />}
    />
);

export default FList;