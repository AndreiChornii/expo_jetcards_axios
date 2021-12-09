import React from "react";
import { View, TextInput, StyleSheet, Button, TouchableOpacity, Text } from "react-native";

const ButtonBar = ({color, onLogin}) => {

    return <View style={styles.downStyle}>
        <View style = {styles.buttonStyle}>
                <Button 
                    title={`SIGN IN`} 
                    color={color} 
                    onPress={() => onLogin()}
                    
                />
        </View>
        <View>
            <TouchableOpacity>
                    <Text style={styles.appButtonText}>{"Forgot your Login or Password?"}
                    </Text>
                </TouchableOpacity>
        </View>
    </View>
};

const styles = StyleSheet.create({
    buttonStyle: {
        width: 150
    },
    appButtonText: {
        fontSize: 12,
        color: "#de2768",
        // fontWeight: "bold",
        alignSelf: "center",
        // textTransform: "uppercase"
        // width: 30,
        // height: 5
    },
    downStyle: {
        alignItems: "center",
        height: 60,
        justifyContent: "space-between"
    }
});

export default ButtonBar;