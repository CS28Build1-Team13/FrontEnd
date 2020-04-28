import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://quarantine-camp.herokuapp.com/',
        headers: {
            'Authorization': `Token ${token}`,
        }
    });
};

export default axiosWithAuth;