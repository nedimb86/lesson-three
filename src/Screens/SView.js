import React from 'react'
import {View} from 'react-native'
import {data} from '../utils/data'

import {Card} from '../Components/Card'

const SView = () => (
    <View>
      {data.map(i => (
        <Card key={i.username}
              img={i.img}
              name={i.name}
              phone={i.phone}
              email={i.email}
              website={i.website}
        />
      ))}

    </View>
  );

export default SView