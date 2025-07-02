import axios from "axios";

export async function getMe () {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/mitras/me`, {
        withCredentials: true
    });
};

export async function updatePartner (id: number, data: {
    name: string;
    siuppiu: string;
    company_name: string;
    address: string;
    website: string;
    email: string;
}) {
    return await axios.put(`${import.meta.env.VITE_PUBLIC_URL}/mitras/${id}`, data);
};
