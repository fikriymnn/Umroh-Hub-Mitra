import axios from "axios"

export async function getAllOrder(category_name: string | undefined) {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOrderMitra/?category_name=${category_name}`, {
        withCredentials: true
    });
};

export async function getOneOrder (id: number | string) {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOneOrder/${id}`, {
        withCredentials: true
    });
};
