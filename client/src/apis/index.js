import axios from 'axios';
const API = axios.create({
    baseURL: `https://ktichen-singingapple.herokuapp.com`
})

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const getAllKitchens = async () => {
    try {
        const { data } = await API.get('/kitchen', config)
        console.log(data);
        return data;
    } catch (error) {

    }
}

export const getKitchenById = async (id) => {
    try {
        const { data } = await API.get(`/kitchen/${id}`, config)
        return data;
    } catch (error) {

    }
}