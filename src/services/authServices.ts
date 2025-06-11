import axios from 'axios'
import { Partner } from '../types/Partners'

export const login = async (partner: Partner) => {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/auth/login/mitra`,
        partner,
        {withCredentials: true}
    );
};
