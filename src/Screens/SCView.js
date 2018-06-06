import React from 'react'
import {ScrollView} from 'react-native'
import {data} from '../utils/data'

import {Card} from '../Components/Card'

const SCView = () => (
  <ScrollView>
    {data.map(i => (
      <Card key={i.username}
            img={i.img}
            name={i.name}
            phone={i.phone}
            email={i.email}
            website={i.website}
      />
    ))}

  </ScrollView>
);

export default SCView