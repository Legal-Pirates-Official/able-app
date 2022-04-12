import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import griddata from './griddata'
import { FlatGrid } from 'react-native-super-grid';


const Gridcont = () => {
  return (
    <FlatGrid
      itemDimension={130}
      data={griddata}
      style={styles.gridView}
      staticDimension={420}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer]}>
          <Text style={styles.itemName}>{item.name}</Text>
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
  },
  itemContainer: {
    justifyContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#81E2D7',
    borderRadius: 15,
    padding: 10,
    height: 150,
    width: 190,
  },
  itemName: {
    fontSize: 120,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: '600',
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