import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PzDfM_1S3RmBSESAHoI0nuPEdsYBWs0yzano33P-pVHmk-lgafYJApoD4rLxK2F5dASr1ipq8pA5sczkajHGbL2seMetfTdrnuk7Pj2NG2v65uUtl4HYN6EJ1jyqYXYx'
    }
});

