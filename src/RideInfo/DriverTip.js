import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const BASE_PRICE = 40;
const COUPON_DISCOUNT = 5;

const SurpriseDriver = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Surprise Driver</Text>

      <Text style={styles.section}>Add Tip</Text>

      {[15, 25, 50, 0].map((tip) => (
        <TouchableOpacity
          key={tip}
          style={[
            styles.tipBox,
            selectedTip === tip && styles.activeTip,
          ]}
          onPress={() => setSelectedTip(tip)}
        >
          <Text
            style={[
              styles.tipText,
              selectedTip === tip && styles.activeText,
            ]}
          >
            {tip === 0 ? "No Tip" : `${tip}%`}
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.section}>Have Coupon?</Text>

      <View style={styles.couponRow}>
        <TextInput
          placeholder="Enter coupon"
          style={styles.input}
          value={coupon}
          onChangeText={setCoupon}
        />
        <TouchableOpacity style={styles.applyBtn} onPress={applyCoupon}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>

      {couponApplied && (
        <View style={styles.successBox}>
          <Text style={styles.successText}>
            Coupon Applied Successfully
          </Text>
        </View>
      )}

      <TouchableOpacity style={styles.totalBox} onPress={() => navigation.navigate("PaymentMethod")}>
        <Text style={styles.totalText}>TOTAL PRICE</Text>
        <Text style={styles.amount}>${calculateTotal()}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SurpriseDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  section: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 20,
  },
  tipBox: {
    borderWidth: 2,
    borderColor: "#00bf63",
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  activeTip: {
    backgroundColor: "#00bf63",
  },
  tipText: {
    fontSize: 16,
    color: "#000",
  },
  activeText: {
    color: "#000",
    fontWeight: "600",
  },
  couponRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
  },
  applyBtn: {
    marginLeft: 10,
    backgroundColor: "#00bf63",
    padding: 12,
    borderRadius: 6,
  },
  applyText: {
    color: "#000",
    fontWeight: "600",
  },
  successBox: {
    backgroundColor: "#00bf63",
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
  },
  successText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "500",
  },
  totalBox: {
    backgroundColor: "#00bf63",
    marginTop: 50,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    color: "#000",
    fontWeight: "600",
  },
  amount: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
  },
});