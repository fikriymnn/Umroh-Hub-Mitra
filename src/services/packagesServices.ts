import axios from "axios"

export const getAllPackageMitra = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/packageMitra`,
        {withCredentials: true}
    );
};