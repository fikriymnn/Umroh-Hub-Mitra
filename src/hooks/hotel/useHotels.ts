import React, { useEffect, useState } from 'react'
import { Hotel, MasterHotel } from '../../types/Hotels';
import { getAllHotels } from '../../services/hotelServices';
import { useNavigate } from 'react-router';

const useHotels = () => {
    const navigate = useNavigate();
    const [hotels, setHotels] = useState<MasterHotel[]>([]);

    useEffect(() => {
        async function fetchHotel() {
            try {
                const res = await getAllHotels();
                console.log(res);
                setHotels(res.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchHotel();
    }, []);

    const handleAddHotel = () => {
        navigate('/Package/Hotel/AddHotel');
      };

    return {
        hotels, setHotels,
        handleAddHotel
    };
};

export default useHotels;