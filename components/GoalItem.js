import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Button } from 'react-native-web';

function GoalItem(props) {


    return (
        <View style={styles.goalItems} >
            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
        margin: 5,
        backgroundColor: '#5e0acc',
        borderRadius: 5,
    },
    goalText: {
        padding: 10,
        color: 'yellow',
    },
    pressedItem: {
        opacity: 0.5,
    }

});