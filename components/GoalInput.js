import React, {useState}from 'react';

import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }

      const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('');
      }

    return (
        <Modal visible={props.visible} animationType="slide">
         <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" 
                style={styles.textInput} 
                onChangeText={goalInputHandler} 
                value={enteredGoal}/>
            <View style={styles.buttonStyle}>
                <View style={styles.buttonSize}>
                <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                </View>
                <View style={styles.buttonSize}>
                <Button title='ADD' onPress={ addGoalHandler }/>
                </View>
            </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      },
      textInput: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10
      },
      buttonStyle: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: "space-around"
      },
      buttonSize: {
          width: '40%'
      }
})

export default GoalInput;