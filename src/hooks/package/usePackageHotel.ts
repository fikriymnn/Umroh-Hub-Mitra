import { useEffect, useState } from 'react'
import { MasterHotel } from '../../types/Hotels';
import { getAllHotels } from '../../services/hotelServices';
import { savePackageHotel } from '../../utils/storage';
import { useNavigate } from 'react-router';

const usePackageHotel = () => {
    const navigate = useNavigate();
    const [hotelList, setHotelList] = useState<MasterHotel[]>([]);
    const [selectedHotel, setSelectedHotel] = useState<MasterHotel[]>([]);

    useEffect(() => {
        const fecthHotel = async () => {
            try {
                const res = await getAllHotels();
                console.log(res);
                setHotelList(res.data)
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fecthHotel();
    }, []);

    const handleSelectedHotel = (hotel: MasterHotel) => {
        if (hotel) {
            const isAlreadySelected = selectedHotel.some(h => h.id === hotel.id);
            if (!isAlreadySelected) {
                setSelectedHotel(prev => [...prev, hotel]);
            }
        }
    };

    const handleSave = () => {
        const payload = selectedHotel?.map(hotel => ({
            id_hotel: hotel?.id,
            description: hotel?.description
        }));

        try {
            savePackageHotel(payload);
            alert('Berhasil kirim data hotel');
            navigate('/Package/AddPackage/TravelDuration');
        } catch (error) {
            alert('Gagal kirim data hotel');
            console.error(`Error: ${error}`);
        }
    };

    const handleBack = () => {
        try {
            navigate(-1);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    return {
        hotelList, setHotelList,
        selectedHotel, setSelectedHotel,
        handleSelectedHotel,
        handleSave,
        handleBack
    };
};

export default usePackageHotel;