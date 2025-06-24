import axios from "axios";
import { MasterHotel } from "../types/Hotels";

export const addHotel = async (hotel: MasterHotel) => {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/hotels`,
        hotel,
        {withCredentials: true}
    );
};

export const getAllHotels = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/hotels/getHotelMitra`, {
        withCredentials: true
    });
};