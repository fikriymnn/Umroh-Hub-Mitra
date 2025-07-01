import { useEffect, useState } from 'react'
import { AddPackge } from '../../types/Package';
import { clearPackageData, getPackageCover, getPackageFasility, getPackageHotel, getPackageSchedules } from '../../utils/storage';
import { addPackage } from '../../services/packagesServices';
import axios from 'axios';
import { useNavigate } from 'react-router';

const usePreviewPackage = () => {
    const navigate = useNavigate();
    const [packages, setPackages] = useState<AddPackge>();
    const packageCover = getPackageCover();
    const packageFasility = getPackageFasility();
    const packageHotel = getPackageHotel();
    const packageSchedules = getPackageSchedules();
    const image = 'example';

    const payload = {
        ...packageCover,
        ...packageFasility,
        id_category_departure: 3,
        duration: 3,
        jamaah_requirements: 'Semua harus memakai baju putih',
        date_departure: '12-02-2020',
        hotel: packageHotel,
        schedules: packageSchedules,
        images: [
            {image_url: image},
            {image_url: image}
        ]
    };

    useEffect(() => {
        async function fetchPackage() {
            try {
                console.log(payload);
                setPackages(payload);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchPackage();
    }, []);

    const handleSubmit = async () => {
        try {
            const res = await addPackage(payload);
            console.log(res);
            alert('Berhasil kirim semua data paket');
            clearPackageData();
            navigate('/Package');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert('Gagal kirim data');
                console.error('Axios error:', error.response?.data?.message);
            }
        }
    }

    return {
        packages, setPackages,
        packageCover,
        packageFasility,
        packageHotel,
        packageSchedules,
        handleSubmit
    };
};

export default usePreviewPackage;