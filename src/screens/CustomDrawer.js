import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


const CustomDrawer = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      {/* CLOSE DRAWER */}
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:20}}>
      <TouchableOpacity onPress={ () => navigation.closeDrawer()}
        style={styles.closeBtn}>
        <Icon name="close" size={30} color="red" />
      </TouchableOpacity>

      {/* PROFILE */}
      <Icon name="person" style={styles.profileIcon} />
      </View>
      <Text style={styles.name}>Gourav</Text>

      {/* Menu Items */}
      {["Profile", "Inbox", "Activity", "Wallet", "Help", "Settings"].map(
        (item) => (
          <TouchableOpacity key={item} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
          </TouchableOpacity>
        )
      )}

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.logout}>Log Out</Text>
      </TouchableOpacity>

      {/* Emergency Button */}
      <TouchableOpacity style={styles.emergencyBtn}>
        <Icon name="warning" size={18} color="#fff" />
        <Text style={styles.emergencyText}> Emergency</Text>
      </TouchableOpacity>

      {/* Night Mode */}
      <View style={styles.night}>
        <Icon name="moon" size={20} />
        <Text style={{ marginLeft: 6 }}>NIGHT</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: "#00bf63",
    borderRadius: 10,
  },

  closeBtn: {
    alignSelf: "flex-start",
    borderWidth: 3,
    borderColor: "#00bf63",
  },

  profileIcon: {
    fontSize: 50,
    color: "#00bf63",
    borderWidth: 2,
    borderColor: "#00bf63",
    padding: 10,
    borderRadius: 40,
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#00bf63",
    textAlign: "center",
    marginVertical: 15,
  },

  menuItem: {
    paddingVertical: 12,
  },

  menuText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  logout: {
    fontSize: 18,
    fontWeight: "700",
    color: "red",
    textAlign: "center",
  },

  emergencyBtn: {
    flexDirection: "row",
    backgroundColor: "red",
    padding: 14,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  emergencyText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  night: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    alignItems: "center",
  },
});

export default CustomDrawer