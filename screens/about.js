import React from 'react';
import { StyleSheet,View,Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function About(){
    return (
        <View>
            <Text style={globalStyles.container}>
                About
            </Text>
        </View>
    )
}
