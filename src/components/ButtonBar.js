import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const ButtonBar = ({onLogin}) => {
    return <View style={styles.backgroundStyle}>
        <Button onPress={onLogin} title={`SIGN IN`} />
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#FCCCCC',
        height:50,
        borderRadius:5,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: "row",
        // alignItems: "center"
        marginTop: 10
    }
});

export default ButtonBar;