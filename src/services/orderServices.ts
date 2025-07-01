import axios from "axios"

export const getAllOrder = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOrdermitra`, {
        withCredentials: true
    });
};

export const getOneOrder = async (id: number | string) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOneOrder/${id}`, {
        withCredentials: true
    });
};
