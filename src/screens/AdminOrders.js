// Admin Orders screen implementation
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getOrders } from '../services/orders';
import MenuItemCard from '../components/MenuItemCard';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const fetched = await getOrders();
      setOrders(fetched);
    };
    fetchOrders();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MenuItemCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
