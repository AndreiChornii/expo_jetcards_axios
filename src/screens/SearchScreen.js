import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import ButtonBar from "../components/ButtonBar";
import yelp from "../api/yelp";
import { logger } from "react-native-logs";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [pass, setPass] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    let log = logger.createLogger();
    const searchApi = async () => {
        try {
            const response = await yelp.post('/GetAPIKey/chornii', 
                'Rhenj567'
            )
            setResults('Logged in successfull');
            setErrorMessage('');
            log.debug(response.data);
        } catch (err) {
            setErrorMessage('Wrong login/password');
            setResults('');
            console.log(err);
        }
    }

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
            onLogin={searchApi}
        />
        {results ? <Text>{results}</Text> : null}
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {/* <Text>{term}</Text> */}
        <Text>We have found {results.length} resultss</Text>
    </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;