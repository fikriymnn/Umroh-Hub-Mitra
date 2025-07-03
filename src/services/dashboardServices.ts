import axios from "axios";

export async function getDataDashboardMitra () {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getDataSahboardMitra`, {
        withCredentials: true
    });
};

export async function statistikMitra (year: string) {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/sttMitra/${year}`, {
        withCredentials: true
    });
};