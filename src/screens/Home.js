import { View, Text , Button , TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Home SCREEN</Text>
      
      <TouchableOpacity
  style={{ backgroundColor: '#2ECC71', padding: 15, marginTop: 40 }}
  onPress={() => navigation.navigate('BankAccount')}
>
  <Text>Open Bank Account Page</Text>
</TouchableOpacity>
<TouchableOpacity
style={{ backgroundColor: '#2ECC71', padding: 15, marginTop: 40 }}
onPress={() => navigation.navigate('DebitCard')}>
    <Text>Open the card detail</Text>

</TouchableOpacity>
<TouchableOpacity
  style={{ backgroundColor:'#2ECC71', padding:15, borderRadius:12, marginTop:20 }}
  onPress={() => navigation.navigate('HelpAndSupport')}
>
  
</TouchableOpacity>


<TouchableOpacity
  style={{ backgroundColor:'#2ECC71', padding:15, borderRadius:12, marginTop:20 }}
  onPress={() => navigation.navigate('Inbox')}
>
  
</TouchableOpacity>

    </View>
  );
}