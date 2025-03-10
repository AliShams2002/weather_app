import axios from "axios";

export const apiKey = '8fccb9766f8b0c4fb8b1f3f8a7ce4e7c';

export const jpAxios = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    timeout: '10000',
    timeoutErrorMessage: 'Error: Response time took more than 10 seconds!'
})