import axios from "axios";
import { MasterHotel } from "../types/Hotels";

export async function addHotel (hotel: MasterHotel) {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/hotels`,
        hotel,
        {withCredentials: true}
    );
};

export async function getAllHotels () {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/hotels/getHotelMitra`, {
        withCredentials: true
    });
};