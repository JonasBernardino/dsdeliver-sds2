import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { Alert, StyleSheet, Text, View } from 'react-native';
import OrderCard from '../OrderCard';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import { Order } from '../types';
import {useIsFocused, useNavigation} from '@react-navigation/native';

function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsloading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const fetchData = () =>{
        setIsloading(true);
        fetchOrders()
            .then(response => console.log(setOrders(response.data)))
            .catch(() => Alert.alert('Houve um erro ao buscar os pedidos'))
            .finally(() => setIsloading(false));
    }

    useEffect(() => {
       if (isFocused){
           fetchData();
       }
    }, [isFocused]);

    const handleOnPress = (order: Order) =>{
        navigation.navigate('OrderDetails',{
            order
        });
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text>Buscando pedido...</Text>
                ) : (
                        orders.map(order => (
                            <TouchableWithoutFeedback
                             key={order.id} 
                             onPress = {() => handleOnPress(order)}
                            >
                                <OrderCard order={order} />
                            </TouchableWithoutFeedback>
                        ))
                    )}

            </ScrollView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
    }
});
export default Orders;