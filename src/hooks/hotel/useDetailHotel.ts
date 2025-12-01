import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { MasterHotel } from '../../types/Hotels';
import { getDetailHotel } from '../../services/hotelServices';
import { isAxiosError } from 'axios';

const useDetailHotel = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [hotel, setHotel] = useState<MasterHotel>();

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                if (id) {
                    const res = await getDetailHotel(id);
                    console.log(res);
                    setHotel(res.data.data);
                }
            } catch (error) {
                if (isAxiosError(error)) {
                    console.error(`Error: ${error.response?.data.message}`);
                }
            }
        };

        fetchHotel();
    }, []);

    return {
        hotel, setHotel,
        navigate
    };
};

export default useDetailHotel;
