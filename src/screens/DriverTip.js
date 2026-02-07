import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

  const DriverTip = ({ navigation }) => {
  const [selectedTip, setSelectedTip] = useState(null);
  const [coupon, setCoupon] = useState('');

  const tips = ['15%', '25%', '50%', 'No Tip'];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Surprise Driver</Text>

      <Text style={styles.title}>Add Tip</Text>

      {tips.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.tipBox,
            selectedTip === item && styles.selectedTip,
          ]}
          onPress={() => setSelectedTip(item)}
        >
          <Text
            style={[
              styles.tipText,
              selectedTip === item && { color: '#fff' },
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.selectBtn}>
        <Text style={styles.btnText}>Select</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Have Coupon?</Text>

      <TextInput
        placeholder="Paste coupon code"
        value={coupon}
        onChangeText={setCoupon}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.confirmBtn}
        onPress={() =>
          navigation.navigate('Summary', {
            selectedTip,
            coupon,
          })
        }
      >
        <Text style={styles.btnText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  title: { fontSize: 16, marginVertical: 10 },
  tipBox: {
    borderWidth: 2,
    borderColor: '#00bf63',
    borderRadius: 10,
    padding: 15,
    marginVertical: 6,
  },
  selectedTip: { backgroundColor: '#00bf63' },
  tipText: { fontSize: 16, color: '#000' },
  selectBtn: {
    backgroundColor: '#00bf63',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
  confirmBtn: {
    backgroundColor: '#00bf63',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#000', 
    fontSize: 17, 
    fontWeight: 'bold' 
  },
  input: {
    borderWidth: 2,
    borderColor: '#00bf63',
    borderRadius: 10,
    padding: 12,
  },
});

export default DriverTip;
