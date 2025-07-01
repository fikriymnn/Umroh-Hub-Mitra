import React, { useState } from 'react'
import { facilities_umum, hotel_facilities } from '../../types/Hotels';
import { addHotel } from '../../services/hotelServices';

const useAddHotel = () => {
    const [fasilitasUmum, setFasilitasUmum] = useState<string[]>([]);
    const [fasilitasKamar, setFasilitasKamar] = useState<string[]>([]);
    const [inputUmum, setInputUmum] = useState('');
    const [inputKamar, setInputKamar] = useState('');
    const [hotelName, setHotelName] = useState('');
    const [hotelType, setHotelType] = useState('');
    const [roomType, setRoomType] = useState('');
    const [address, setAddress] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [descriptionHotel, setDescriptionHotel] = useState('');
    const [facilitiesHotel, setFacilitiesHotel] = useState<hotel_facilities[]>([]);
    const [facilitiesUmum, setFacilitiesUmum] = useState<facilities_umum[]>([]);

    const risetForm = () => {
        setFasilitasUmum([]);
        setFasilitasUmum([]);
        setInputUmum('');
        setInputKamar('');
        setHotelName('');
        setHotelType('');
        setRoomType('');
        setAddress('');
        setImageUrl('');
        setDescriptionHotel('');
        setFacilitiesHotel([]);
        setFacilitiesUmum([]);
    };

    async function handleSave() {
        const payload = {
            hotel_name: hotelName,
            hotel_type: hotelType,
            room_type: roomType,
            address: 'Bandung',
            image_url: 'example',
            description: descriptionHotel,
            facilities_hotel: facilitiesHotel,
            facilities_general: facilitiesUmum,
        };

        try {
            console.log(payload);
            
            const res = await addHotel(payload);
            alert(`Berhasil kirim data hotel`);
            console.log(res);
            risetForm();
        } catch (error) {
            alert(`Gagal kirim data hotel`);
            console.error(`Error: ${error}`);
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = e.target;
    
        if (checked) {
            setFacilitiesHotel((prev) => [...prev,{description: value}]);
            setFacilitiesUmum((prev) => [...prev,{description: value}]);
        } else { 
            setFacilitiesHotel((prev) => prev.filter((item) => item.description !== value));
            setFacilitiesUmum((prev) => prev.filter((item) => item.description !== value));
        }
    };

    return {
        fasilitasUmum, setFasilitasUmum,
        fasilitasKamar, setFasilitasKamar,
        inputUmum, setInputUmum,
        inputKamar, setInputKamar,
        hotelName, setHotelName,
        hotelType, setHotelType,
        roomType, setRoomType,
        address, setAddress,
        imageUrl, setImageUrl,
        descriptionHotel, setDescriptionHotel,
        facilitiesHotel, setFacilitiesHotel,
        facilitiesUmum, setFacilitiesUmum,
        handleSave,
        handleCheckboxChange
    };
};

export default useAddHotel;