import axios from 'axios'
import { Partner } from '../types/Partners'

export async function login (partner: Partner) {
    console.log(partner);
    console.log(import.meta.env.VITE_PUBLIC_URL);
    
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/auth/login/mitra`,
        partner,    
        { withCredentials: true },
    );
    console.log(`$import.meta.env.VITE_PUBLIC_URL}/auth/login/mitra`)
};

export async function logOut () {
    await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/auth/logout`);
};
