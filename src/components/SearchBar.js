import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, placeholder }) => {
    return <View style={styles.inputView}>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={onTermChange}
            placeholder={placeholder}
        >
        </TextInput>
    </View>

};

const styles = StyleSheet.create({
    inputView: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey"
    },
    inputView: {
        height: 35,
        margin: 0,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        padding: 0,
        flex: 0.75,
    }
});

export default SearchBar;