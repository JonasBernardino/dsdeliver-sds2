import { OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import React from 'react';
import { StyleSheet, Image, Text, View}from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

function Header() {

    const navigation = useNavigation();

    const handleOnPress = () =>{
        navigation.navigate('Home')
    }
    return (
        <TouchableNativeFeedback onPress={handleOnPress}>
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
            <Text style={styles.text}>DS Delivery</Text>

        </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA5C5C',
        height: 90,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent:"center",
    },
    text:{
        lineHeight:25,
        marginLeft:15,
        fontWeight:'bold',
        color: '#FFF',
        fontSize: 18,
        letterSpacing: -0.24,
        fontFamily:'OpenSans_700Bold'
        
    }
});
export default Header;