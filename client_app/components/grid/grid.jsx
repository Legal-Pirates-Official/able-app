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
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemName}>{item.colan}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}
    />
  )
}

export default Gridcont


// const styles = StyleSheet.create({
//     areatwo: {
//         height: height / 2,
//         alignItems: "center",
//         justifyContent: "center",
//       },
//       abouttitle: {
//         color: "#fff",
//         fontSize: 30,
//         fontWeight: "bold",
//       },
//       aboutview: {
//         height: 50,
//         width: width - 30,
//       },
// })

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});