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
        console.log(error);
    }
}

export const getKitchenById = async (id) => {
    try {
        const { data } = await API.get(`/kitchen/${id}`, config)
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const addKitchen = async (formData, history) => {
    try {
        const { data } = await API.post('/kitchen/new', formData, config);
        console.log(data);
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}

export const editKitchen = async (formData, history, id) => {
    try {
        const { data } = await API.patch(`/kitchen/${id}`, formData, config);
        console.log(data);
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}