import axios from "axios";
import { Partner } from "../types/Partners";

export const getMe = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/mitras/me`, {
        withCredentials: true
    });
};

export const updatePartner = async (id: number, data: {
    name: string;
    siuppiu: string;
    company_name: string;
    address: string;
    website: string;
    email: string;
}) => {
    return await axios.put(`${import.meta.env.VITE_PUBLIC_URL}/mitras/${id}`, data);
};
