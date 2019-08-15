import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        color: 'white'
      }
})

export default GoalItem