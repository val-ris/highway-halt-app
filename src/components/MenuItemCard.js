// Component to display a menu item
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MenuItemCard({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});
