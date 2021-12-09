import { useState } from 'react';
import yelp from '../api/yelp';
import { logger } from "react-native-logs";

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    let log = logger.createLogger();
    const searchApi = async (searchTerm, searchPass) => {
        try {
            const response = await yelp.post(`/GetAPIKey/${searchTerm}`,
                `${searchPass}`
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

    return [searchApi, results, errorMessage]
};