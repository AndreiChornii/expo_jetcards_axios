import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ results, errorMessage }) => {
    return <View>
        {results ? <Text style = {styles.success}>{results}</Text> : null}
        {errorMessage ? <Text style = {styles.wrong}>{errorMessage}</Text> : null}
    </View>
};

const styles = StyleSheet.create({
    success: {
        color: "#42f542"
    },
    wrong: {
        color: "#de2768"
    }
});

export default ResultsList;