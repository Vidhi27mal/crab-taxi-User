import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

const initialMessages = [
  { id: '1', name: 'Adeline Palmerston', message: 'Thank you' },
  { id: '2', name: 'Daniel Gallego', message: "Wow, that's amazing" },
  { id: '3', name: "Juliana Silva", message: "Nice works" },
  { id: '4', name: "Pedro Fernandes", message: "OK, see you tomorrow" },
  { id: '5', name: "Korina Villanueva", message: "I am fine, how about you?" },
]

const MessagesScreen = ({ navigation }) => {
  const [messages, setMessages] = useState(initialMessages)
  const [menuVisible, setMenuVisible] = useState(false)
  const [selectMode, setSelectMode] = useState(false)
  const [selectedIds, setSelectedIds] = useState([])

  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const deleteSelected = () => {
    setMessages(prev => prev.filter(item => !selectedIds.includes(item.id)))
    setSelectedIds([])
    setSelectMode(false)
  }

  const deleteAll = () => {
    setMessages([])
    setMenuVisible(false)
  }

  const renderItem = ({ item }) => {
    const selected = selectedIds.includes(item.id)

    return (
      <TouchableOpacity
        style={styles.messageRow}
        onPress={() => {
          if (selectMode) {
            toggleSelect(item.id)
          } else {
            navigation.navigate('ChatScreen', { user: item })
          }
        }}
      >
        {selectMode && (
          <Icon
            name={selected ? 'checkbox' : 'square-outline'}
            size={24}
            color="#00bf63"
            style={{ marginRight: 10 }}
          />
        )}

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>

     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={28} color="red" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Messages</Text>

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Icon name="ellipsis-vertical" size={24} color="#000" />
        </TouchableOpacity>
      </View>

    
      <View style={styles.box}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      </View>

      {selectMode && selectedIds.length > 0 && (
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={deleteSelected}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}

    
      <Modal transparent visible={menuVisible} animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.menuBox}>
            <TouchableOpacity
              onPress={() => {
                setSelectMode(true)
                setMenuVisible(false)
              }}
            >
              <Text style={styles.menuItem}>Select</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={deleteAll}>
              <Text style={[styles.menuItem, { color: 'red' }]}>Delete All</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

    </SafeAreaView>
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
      fontSize: 33,
      color: 'red',
      borderWidth: 2,
      borderColor: '#00bf63',
      borderRadius: 20,
      padding: 4,
    },
    headerText: {
      flex: 1,
      textAlign: 'center',
      fontSize: 33,
      fontWeight: '700',
      color: '#00bf63',
      marginRight: 28,
    },
    box: {
      flex: 1,
      borderWidth: 2,
      borderColor: "#00bf63",
      borderRadius: 14,
      padding: 12,
    },
    messageRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
    },
    name: {
      fontSize: 18,
      fontWeight: "600",
      color: "#00bf63",
    },
    message: {
      fontSize: 14,
      color: "#000",
      marginTop: 4,
    },
    deleteButton: {
      backgroundColor: "red",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      marginTop:-20
    },
    deleteButtonText: {
      color: "#fff",
      fontWeight: "600",
    },
    divider: {
      height: 1,
      backgroundColor: "#d6dad8",
    },
    bottomBar: {
        backgroundColor: '#00bf63',
        padding: 16,
        alignItems: 'center',
      },
      deleteText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
      },
      modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingTop: 60,
        paddingRight: 20,
      },
      menuBox: {
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 140,
        elevation: 5,
      },
      menuItem: {
        padding: 12,
        fontSize: 15,
      },
  })
  
  export default MessagesScreen






