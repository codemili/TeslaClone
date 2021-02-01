import styles from './styles'
import React from 'react'
import { Dimensions, FlatList, View} from 'react-native'
import cars from './cardata';
import CarItem from '../CarItem';

export default function CarList(){
    return (
      <View style={styles.container}>
        <FlatList
          data={cars}
          showsVerticalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'normal'}
          snapToInterval={Dimensions.get('window').height}
          renderItem={({item}) => <CarItem cars={item} />}
        />
      </View>
    );
}