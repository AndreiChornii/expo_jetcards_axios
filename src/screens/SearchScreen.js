<script src="http://localhost:8097"></script>

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import SearchBar from "../components/SearchBar";
import ButtonBar from "../components/ButtonBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [pass, setPass] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const titleText = "JET CARDS Service - Sign in";

    return <View style={styles.container}>
        <View style={styles.middle}>
            <View style={styles.header}>
                <Text style={styles.titleText}>
                    {titleText}
                </Text>
            </View>
            <View style={styles.content}>
                <View style={styles.contentelement}>
                    <Image
                        style={styles.image}
                        source={require("../img/smile.png")}
                    />

                    <SearchBar
                        term={term}
                        onTermChange={setTerm}
                        placeholder="Login"
                        secureTextEntry = {false}
                    />

                </View>
                <View style={styles.contentelement}>
                    <Image
                        style={styles.image}
                        source={require("../img/lock.png")}
                    />

                    <SearchBar
                        term={pass}
                        onTermChange={setPass}
                        placeholder="Password"
                        secureTextEntry = {true}
                    />
                </View>
                <View style={styles.rez}>
                    <ResultsList
                        results={results}
                        errorMessage={errorMessage}
                    />
                    <ButtonBar
                        color="lightgrey"
                        onLogin={() => searchApi(term, pass)}
                    />
                </View>

            </View>
        </View>
        <View>

        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
    },
    middle: {
        flex: 0.90,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        alignItems: "center",

    },
    header: {
        flex: 0.25,
        backgroundColor: "#de2768",
        borderRadius: 5,
        position: "relative",
        width: "75%",
        justifyContent: 'center',
        marginTop: -40
    },
    content: {
        flex: 0.75,
        // backgroundColor: "green",
        justifyContent: "space-around",
        width: "90%"
        // alignItems: "center"
    },
    titleText: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff"
    },
    contentelement: {
        borderWidth: 1,
        borderColor: "#fff",
        flexDirection: "row",
        justifyContent: "flex-start",
        borderRadius: 10
    },
    image: {
        resizeMode: "cover",
        height: 25,
        width: 25,
        marginRight: 25,
        // borderWidth: 1,
        // borderColor: 'brown',
        alignSelf: "center"
    },
    rez: {
        alignItems: "center",
        justifyContent: "flex-start",
        flex:0.6
    }
});

export default SearchScreen;