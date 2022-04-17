import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import griddata from './griddata'
import { FlatGrid } from 'react-native-super-grid';

const { width, height } = Dimensions.get('window')

const Gridcont = () => {
  return (
    <FlatGrid
      itemDimension={130}
      data={griddata}
      style={styles.gridView}
      staticDimension={420}
      // fixed
      // spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer,styles.color(item.color)]}>
          <Text style={[styles.itemName]}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
          <Text style={styles.itemCode}>{item.codetwo}</Text>
        </View>
      )}
    />
  )
}

export default Gridcont

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    // width: '60%'
  },
  color:(color) => ({
    backgroundColor: color,
  }),
  itemContainer: {
    justifyContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#81E2D7',
    borderRadius: 8,
    padding: 10,
    height: 150,
    width: width/2.2,
    margin: 1,
  },
  itemName: {
    fontSize: 120,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    opacity: 0.3,
  },
  itemCode: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
  },
});