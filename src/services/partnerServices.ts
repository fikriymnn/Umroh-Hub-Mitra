import axios from "axios";
import { Partner } from "../types/Partners";

export const getMe = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/mitras/me`, {
        withCredentials: true
    });
};
