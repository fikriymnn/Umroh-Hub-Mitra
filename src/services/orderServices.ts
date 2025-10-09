import axios from "axios"

export async function getAllOrder (category_name: string | undefined) {
    const baseUrl = `${import.meta.env.VITE_PUBLIC_URL}/getOrdermitra`;
    const url = category_name ? `${baseUrl}?category_name=${category_name}` : baseUrl;
    return await axios.get(url, {withCredentials: true});
};

export async function getOneOrder (id: number | string) {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOneOrder/${id}`, {
        withCredentials: true
    });
};
