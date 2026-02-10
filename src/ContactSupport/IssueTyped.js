import React from 'react';
import { View, Text, StyleSheet,TextInput , TouchableOpacity} from 'react-native';

export default function Issuetyped() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Submit Complain</Text>

     
      <View style={styles.card}>
        <View style={styles.row}>
        <Text style={styles.label}>Type Your Issue</Text>
        <TextInput style={styles.input}  placeholder="type Issue" />

        </View>
         </View>

         
      
        
      </View>

  
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#fff', padding:20 },
  title: { fontSize:32, fontWeight:'700', color:'#2ECC71', marginBottom:60, marginTop:20 , textAlign:'center' },

  card: {
    borderWidth:3,
    borderColor:'#2ECC71',
    borderRadius:12,
    padding:15,
    marginBottom:15
  },
  
  label: { color:'black' , fontSize:17 },
  value: { color:'#111', fontWeight:'500' },
  total: { fontWeight:'700', color:'#2ECC71' },

  sectionTitle: { fontWeight:'700', color:'#2ECC71', marginBottom:10 },
  step: { color:'#111', marginBottom:8 }
});