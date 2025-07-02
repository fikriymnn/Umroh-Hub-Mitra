import axios from "axios"

export async function getAllOrder () {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOrdermitra`, {
        withCredentials: true
    });
};

export async function getOneOrder (id: number | string) {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOneOrder/${id}`, {
        withCredentials: true
    });
};
