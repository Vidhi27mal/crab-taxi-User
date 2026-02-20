import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../Theme/ThemeContext";

export default function HelpAndSupport({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      {/* HEADER */}
      <TouchableOpacity
             style={styles.header}
             onPress={() => navigation.goBack()}
           >
             <Icon
               name="close"
               size={28}
               color={"red"}
               style={{ borderWidth: 2, borderColor: theme.primary, padding: 4 }}
             />
             <Text style={[styles.headerText, { color: theme.primary }]}>
               Help & Support
             </Text>
           </TouchableOpacity>

      {/* OPTIONS */}
      <View>
        <TouchableOpacity
          style={[
            styles.option,
            { borderColor: theme.primary },
          ]}
          onPress={() => navigation.navigate("PaymentRefundIssue")}
        >
          <Text
            style={[
              styles.optionText,
              { color: theme.text },
            ]}
          >
            Payment / Refund Issue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            { borderColor: theme.primary },
          ]}
          onPress={() => navigation.navigate("RideCancellationIssue")}
        >
          <Text
            style={[
              styles.optionText,
              { color: theme.text },
            ]}
          >
            Ride / Cancellation Issue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            { borderColor: theme.primary },
          ]}
          onPress={() => navigation.navigate("ContactSupport")}
        >
          <Text
            style={[
              styles.optionText,
              { color: theme.text },
            ]}
          >
            Contact Support
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  headerText: {
    flex: 1,
    paddingHorizontal: 30,
    fontSize: 30,
    fontWeight: '700',
  },


  option: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 18,
    marginBottom: 17,
  },

  optionText: {
    fontSize: 18,
    fontWeight: "500",
  },
});