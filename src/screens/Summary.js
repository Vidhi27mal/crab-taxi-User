import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Summary = ({ route }) => {
  const { selectedTip, coupon, totalPrice } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.headerText}>Surprise Driver</Text>
      </View>

      {/* Add Tip */}
      <Text style={styles.sectionTitle}>Add Tip</Text>

      {['15%', '25%', '50%', 'No Tip'].map((tip) => {
        const isSelected = tip === selectedTip;
        return (
          <View
            key={tip}
            style={[
              styles.tipBox,
              isSelected && styles.tipSelected,
            ]}
          >
            <Text
              style={[
                styles.tipText,
                isSelected && styles.tipTextSelected,
              ]}
            >
              {tip}
            </Text>
            <Text
              style={[
                styles.dollarIcon,
                isSelected && styles.tipTextSelected,
              ]}
            >
              $
            </Text>
          </View>
        );
      })}

      {/* Coupon */}
      <Text style={styles.sectionTitle}>Have Coupon?</Text>

      <View style={styles.couponInput}>
        <Text style={styles.couponText}>{coupon}</Text>
        <Text style={styles.dollarIcon}>$</Text>
      </View>

      {/* Coupon Applied */}
      <View style={styles.couponApplied}>
        <Text style={styles.couponAppliedText}>
          Coupon Applied successfully
        </Text>
        <Text style={styles.checkIcon}>✔</Text>
      </View>

      {/* Total Price */}
      <View style={styles.totalBox}>
        <Text style={styles.totalText}>TOTAL PRICE</Text>
        <Text style={styles.totalAmount}>${totalPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  backArrow: {
    fontSize: 22,
    color: '#0bbf64',
    marginRight: 10,
  },

  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 16,
    marginVertical: 10,
  },

  tipBox: {
    borderWidth: 2,
    borderColor: '#0bbf64',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tipSelected: {
    backgroundColor: '#0bbf64',
  },

  tipText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },

  tipTextSelected: {
    color: '#fff',
  },

  dollarIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0bbf64',
  },

  couponInput: {
    borderWidth: 2,
    borderColor: '#0bbf64',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  couponText: {
    fontSize: 16,
    color: '#000',
  },

  couponApplied: {
    backgroundColor: '#0bbf64',
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  couponAppliedText: {
    color: '#fff',
    fontSize: 16,
  },

  checkIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  totalBox: {
    backgroundColor: '#0bbf64',
    borderRadius: 10,
    padding: 20,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  totalAmount: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});


export default Summary;
