import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange }) => {
    return <View style={styles.backgroundStyle}>
        <TextInput
            autoCapitalize = "none"
            autoCorrect={false}
            style={styles.inputStyle} 
            value={term}
            onChangeText={onTermChange}
        >
        </TextInput>
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

    },
    iconStyle:{
        fontSize: 35,
        alignSelf: "center",
        marginLeft: 15,
        marginRight: 15
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        // alignSelf: "center"
        fontSize: 18
    }
});

export default SearchBar;