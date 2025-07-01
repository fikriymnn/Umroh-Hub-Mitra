import axios from 'axios'
import { Partner } from '../types/Partners'

export const login = async (partner: Partner) => {
    console.log(partner);
    console.log(import.meta.env.VITE_PUBLIC_URL);
    
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/auth/login/mitra`,
        partner,
        {withCredentials: true}
    );
};

export const logOut = async () => {
    await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/auth/logout`);
};
