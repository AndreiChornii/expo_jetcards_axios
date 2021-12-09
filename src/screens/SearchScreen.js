import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import ButtonBar from "../components/ButtonBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [pass, setPass] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return <View>
        <SearchBar
            term={term}
            onTermChange={setTerm}
        />
        <SearchBar
            term={pass}
            onTermChange={setPass}
        />
        <ButtonBar
            onLogin={() => searchApi(term, pass)}
        />
        {term ? <Text>{term}</Text> : null}
        {pass ? <Text>{pass}</Text> : null}
        {results ? <Text>{results}</Text> : null}
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {/* <Text>{term}</Text> */}
        <Text>We have found {results.length} resultss</Text>
    </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;