import React, { useState } from 'react'
import { hotel_facilities } from '../../types/Hotels';
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
    const [facilities, setFacilities] = useState<hotel_facilities[]>([]);

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
        setFacilities([]);
    };

    async function handleSave() {
        const payload = {
            hotel_name: hotelName,
            hotel_type: hotelType,
            room_type: roomType,
            address: 'Bandung',
            image_url: 'example',
            description: descriptionHotel,
            facilities,
        };

        try {
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
            setFacilities((prev) => [...prev,{description: value}]);
        } else { 
            setFacilities((prev) => prev.filter((item) => item.description !== value));
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
        facilities, setFacilities,
        handleSave,
        handleCheckboxChange
    };
};

export default useAddHotel;