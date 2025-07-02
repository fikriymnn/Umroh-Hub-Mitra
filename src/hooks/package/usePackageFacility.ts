import React, { useEffect, useState } from 'react'
import { savePackageFasility } from '../../utils/storage';
import { useNavigate } from 'react-router';
import { MasterLocationDeparture, Transportation } from '../../types/Package';
import { getAllLocation } from '../../services/packagesServices';

const usePackageFacility = () => {
    const navigate = useNavigate();
    const [facilities, setFacilities] = useState('');
    const [airLine, setAirLine] = useState('');
    const [airPlane, setAirPlane] = useState('');
    const [locationList, setLocationList] = useState<MasterLocationDeparture[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<number | undefined>(undefined);
    const [transportation, setTransportation] = useState<Transportation[]>([]);
    const [inputTransportation, setInputTransportation] = useState("");

    useEffect(() => {
        const fetchLocationDeparture = async () => {
            try {
                const res = await getAllLocation();
                console.log(res);
                setLocationList(res.data.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchLocationDeparture();
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
        
            const target = e.currentTarget;
            const posisi = target.selectionStart;
            const sebelum = facilities.slice(0, posisi);
            const sesudah = facilities.slice(posisi);
        
            const barisSebelum = sebelum.split("\n").pop() || "";
        
            const barisFix = barisSebelum.trim().startsWith("-")
                ? sebelum.replace(/-([^-\n]*)$/, "•$1")
                : sebelum;
        
            const hasilBaru = barisFix + "\n• " + sesudah;
        
            setFacilities(hasilBaru);
        }
    };

    const handleAddTransportation = () => {
        if (inputTransportation.trim() !== "") {
            const newItem: Transportation = {
                description: inputTransportation.trim()
            };
            setTransportation(prev => [...prev, newItem]);
            setInputTransportation("");
        }
    };

    const handleSave = () => {
        const parsedFacilities = facilities
            .split('\n')
            .map((item) => item.trim())
            .filter((item) => item.startsWith('•'))
            .map((item) => ({ description: item.slice(1).trim() }));

        const payload = {
            facilities: parsedFacilities,
            airline: airLine,
            airplane: airPlane,
            id_location_departure: selectedLocation,
            transportation
        }

        try {
            savePackageFasility(payload);
            alert('Berhasil simpan fasilitas paket');
            navigate('/Package/AddPackage/DetailHotel');
        } catch (error) {
            alert('Gagal simpan data fasilitas paket');
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
        facilities, setFacilities,
        airLine, setAirLine,
        airPlane, setAirPlane,
        locationList, setLocationList,
        selectedLocation, setSelectedLocation,
        transportation, setTransportation,
        inputTransportation, setInputTransportation,
        handleAddTransportation,
        handleKeyDown,
        handleSave,
        handleBack
    };
};

export default usePackageFacility;