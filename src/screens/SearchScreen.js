import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import { logger } from "react-native-logs";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    let log = logger.createLogger();
    const searchApi = async () => {
        try {
            const response = await yelp.post('/GetAPIKey/chornii', 
                'Rhenj567'
            )
            setResults('Logged in successfull');
            log.debug(response.data);
        } catch (err) {
            setResults('Wrong login/password');
            console.log(err);
        }
    }

    return <View>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={searchApi}
        />
        {results ? <Text>{results}</Text> : null}
        {/* <Text>{term}</Text> */}
        <Text>We have found {results.length} resultss</Text>
    </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;