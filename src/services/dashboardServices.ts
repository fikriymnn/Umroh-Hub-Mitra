import axios from "axios";

export const getDataDashboardMitra = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getDataSahboardMitra`, {
        withCredentials: true
    });
};

export const statistikMitra = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/sttMitra`, {
        withCredentials: true
    });
};