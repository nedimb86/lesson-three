import React from 'react'
import {SectionList, Text} from 'react-native'
import {sectionData} from '../utils/data'

import {Card} from '../Components/Card'

const SList = () => (
  <SectionList
    renderSectionHeader={({section: {title}}) => (
      <Text style={{fontWeight: 'bold'}}>{title}</Text>
    )}
    sections={sectionData}
    keyExtractor={(item, index) => item + index}
    renderItem={({item, index}) => <Card key={index} img={item.img} name={item.name}
                                  phone={item.phone} email={item.email} website={item.website} />}
  />
);

export default SList;