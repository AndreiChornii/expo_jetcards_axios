import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.jetcs.co/api',
    headers: {
        Accept: 'application/json'
    }
});

