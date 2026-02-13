import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from '../Theme/ThemeContext'

const initialMessages = [
  { id: '1', name: 'Adeline Palmerston', message: 'Thank you' },
  { id: '2', name: 'Daniel Gallego', message: "Wow, that's amazing" },
  { id: '3', name: "Juliana Silva", message: "Nice works" },
  { id: '4', name: "Pedro Fernandes", message: "OK, see you tomorrow" },
  { id: '5', name: "Korina Villanueva", message: "I am fine, how about you?" },
]

const MessagesScreen = ({ navigation }) => {

  const { theme } = useContext(ThemeContext)

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
            color={theme.primary}
            style={{ marginRight: 10 }}
          />
        )}

        <View style={{ flex: 1 }}>
          <Text style={[styles.name, { color: theme.primary }]}>
            {item.name}
          </Text>
          <Text style={[styles.message, { color: theme.text }]}>
            {item.message}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={28} color="red" />
        </TouchableOpacity>

        <Text style={[styles.headerText, { color: theme.primary }]}>
          Messages
        </Text>

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Icon name="ellipsis-vertical" size={24} color={theme.text} />
        </TouchableOpacity>
      </View>

      {/* Message Box */}
      <View style={[styles.box, { borderColor: theme.primary }]}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() =>
            <View style={[styles.divider, { backgroundColor: theme.border }]} />
          }
        />
      </View>

      {/* Bottom Delete Bar */}
      {selectMode && selectedIds.length > 0 && (
        <View style={[styles.bottomBar, { backgroundColor: theme.primary }]}>
          <TouchableOpacity onPress={deleteSelected}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Menu Modal */}
      <Modal transparent visible={menuVisible} animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <View style={[styles.menuBox, { backgroundColor: theme.card }]}>
            <TouchableOpacity
              onPress={() => {
                setSelectMode(true)
                setMenuVisible(false)
              }}
            >
              <Text style={[styles.menuItem, { color: theme.text }]}>
                Select
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={deleteAll}>
              <Text style={[styles.menuItem, { color: 'red' }]}>
                Delete All
              </Text>
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
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },

  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 33,
    fontWeight: '700',
    marginRight: 28,
  },

  box: {
    flex: 1,
    borderWidth: 2,
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
  },

  message: {
    fontSize: 14,
    marginTop: 4,
  },

  divider: {
    height: 1,
  },

  bottomBar: {
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