import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";
import Icon from "react-native-vector-icons/Ionicons";

const BASE_PRICE = 40;
const COUPON_DISCOUNT = 5;

const SurpriseDriver = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const [selectedTip, setSelectedTip] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const calculateTotal = () => {
    const tipAmount = (BASE_PRICE * selectedTip) / 100;
    let total = BASE_PRICE + tipAmount;

    if (couponApplied) {
      total = total - COUPON_DISCOUNT;
    }
    return total;
  };

  const applyCoupon = () => {
    if (coupon.trim().length > 0) {
      setCouponApplied(true);
    } else {
      setCouponApplied(false);
    }
  };

  const totalPrice = () => {

    setCoupon('')
    setSelectedTip('')
    navigation.navigate('PaymentMethod')
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      
      <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={28} color={theme.primary} />
              </TouchableOpacity>
      
              <Text style={[styles.headerTitle, { color: theme.primary }]}>
                Surprise Driver
              </Text>
      
              <View style={{ width: 28 }} />
            </View>

      <Text style={[styles.section, { color: theme.text }]}>
        Add Tip
      </Text>

      {[15, 25, 50, 0].map((tip) => (
        <TouchableOpacity
          key={tip}
          style={[
            styles.tipBox,
            { borderColor: theme.primary },
            selectedTip === tip && {
              backgroundColor: theme.primary,
            },
          ]}
          onPress={() => setSelectedTip(tip)}
        >
          <Text
            style={[
              styles.tipText,
              { color: selectedTip === tip ? theme.background : theme.text },
            ]}
          >
            {tip === 0 ? "No Tip" : `${tip}%`}
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={[styles.section, { color: theme.text }]}>
        Have Coupon?
      </Text>

      <View style={styles.couponRow}>
        <TextInput
          placeholder="Enter coupon"
          placeholderTextColor={theme.text}
          style={[
            styles.input,
            {
              borderColor: theme.primary,
              color: theme.text,
            },
          ]}
          value={coupon}
          onChangeText={setCoupon}
        />

        <TouchableOpacity
          style={[styles.applyBtn, { backgroundColor: theme.primary }]}
          onPress={applyCoupon}
        >
          <Text style={{ color: theme.background, fontWeight: "600" }}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>

      {couponApplied && (
        <View
          style={[
            styles.successBox,
            { backgroundColor: theme.primary },
          ]}
        >
          <Text style={{ color: theme.text, textAlign: "center" }}>
            Coupon Applied Successfully
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={[styles.totalBox, { backgroundColor: theme.primary }]}
        onPress={totalPrice}
      >
        <Text style={{ color: theme.text, fontWeight: "600" }}>
          TOTAL PRICE
        </Text>

        <Text
          style={{
            color: theme.background,
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          ${calculateTotal()}
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default SurpriseDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 40,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: "600",
    color: "#000",
  },

  section: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 20,
  },

  tipBox: {
    borderWidth: 2,
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },

  tipText: {
    fontSize: 16,
  },

  couponRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
  },

  applyBtn: {
    marginLeft: 10,
    padding: 12,
    borderRadius: 6,
  },

  successBox: {
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
  },

  totalBox: {
    marginTop: 50,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});