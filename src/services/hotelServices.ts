import axios from "axios";

export const getAllHotels = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/hotels/getHotelMitra`, {
        withCredentials: true
    });
};