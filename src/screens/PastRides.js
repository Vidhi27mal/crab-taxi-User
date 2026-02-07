import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Touchable } from 'react-native'


const PastRides = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate("Activity")}>
        <Icon name="close" style={styles.closeIcon} />
        <Text style={styles.headerText}>Past Rides</Text>
      </TouchableOpacity>
        <View>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>Past Rides 1</Text>
                <Icon name="notifications-outline" style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>Past Rides 2</Text>
                <Icon name="notifications-outline" style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>Past Rides 3</Text>
                <Icon name="notifications-outline" style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>Past Rides 4</Text>
                <Icon name="notifications-outline" style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>Past Rides 5</Text>
                <Icon name="notifications-outline" style={styles.iconStyle} />
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    },
    header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    },
    closeIcon: {
   fontSize: 30,
   color: 'red',
   fontWeight: '700',
   borderWidth: 3,
    borderColor: '#00bf63',
    },
    headerText: {
    flex: 1,
    paddingHorizontal: 70,
    fontSize: 20,
    fontWeight: '700',
    color: '#00bf63',
   },
   item : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 3,
    borderColor: '#00bf63',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderBottomColor: '#00bf63',
    borderBottomWidth: 3,

   },
    itemText: {
    fontSize: 18,
    fontWeight: '600',
    },
    iconStyle: {
    fontSize: 26,
    color: '#00bf63',
    }

})
export default PastRides