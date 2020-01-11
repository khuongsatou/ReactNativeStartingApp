import React from 'react';
import { StyleSheet,View,Text,Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}){
    const pressHandler = ()=>{
        navigation.goBack();
    }

    return (
        <View>
            <Text style={globalStyles.container}>
               { navigation.getParam('title') }
            </Text>
            <Button title="back to home screen.." onPress={pressHandler}/>
        </View>
    )
}
