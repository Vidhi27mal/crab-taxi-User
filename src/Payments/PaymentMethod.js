import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../Theme/ThemeContext';

const PaymentMethod = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()
        }
      >
        <Icon
          name="close"
          size={28}
          color={"red"}
          style={{ borderWidth: 2, borderColor: theme.primary, padding: 4 }}
        />
        <Text style={[styles.headerText, { color: theme.primary }]}>
          Payment Method
        </Text>
      </TouchableOpacity>

      <View>
        <Text style={[styles.middleText, { color: theme.text }]}>
          Choose One
        </Text>

        <TouchableOpacity
          style={[
            styles.item,
            { borderColor: theme.primary }
          ]}
          onPress={() => navigation.navigate("BankAccount")}
        >
          <Text style={[styles.itemText, { color: theme.text }]}>
            Bank Transfer
          </Text>
          <Icon
            name="card-outline"
            size={24}
            color={theme.primary}
          />
        </TouchableOpacity>

 
        <TouchableOpacity
          style={[
            styles.item,
            { borderColor: theme.primary }
          ]}
          onPress={() => navigation.navigate("DebitCard")}
        >
          <Text style={[styles.itemText, { color: theme.text }]}>
            Debit Card
          </Text>
          <Icon
            name="card-outline"
            size={24}
            color={theme.primary}
          />
        </TouchableOpacity>


        <TouchableOpacity
          style={[
            styles.item,
            { borderColor: theme.primary }
          ]}
        >
          <Text style={[styles.itemText, { color: theme.text }]}>
            E - Transfer
          </Text>
          <Icon
            name="swap-horizontal-outline"
            size={24}
            color={theme.primary}
          />
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },

  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },

  middleText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  itemText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default PaymentMethod;