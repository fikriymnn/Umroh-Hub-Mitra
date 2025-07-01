import { useEffect, useRef, useState } from 'react'
import { AddPackge } from '../../types/Package';
import { clearPackageData, getPackageCover, getPackageFasility, getPackageHotel, getPackageSchedules } from '../../utils/storage';
import { addPackage } from '../../services/packagesServices';
import axios from 'axios';
import { useNavigate } from 'react-router';
import exampleImage from "../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png"

const usePreviewPackage = () => {
    const navigate = useNavigate();
    const [packages, setPackages] = useState<AddPackge>();
    const [currentPage, setCurrentPage] = useState(1);
    const itemPages = 4;
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
    };

    const schedule = packages?.schedules?.flatMap((schedule: any) =>
        schedule.details.map((activity: any) => ({
            hari: schedule.title,
            image: schedule.image_url,
            aktivitas: activity.activity,
            catatan: activity.note,
            waktu: activity.time,
        }))
    ) || [];

    const totalPages = Math.ceil((schedule?.length || 0) / itemPages);
    const startIndex = (currentPage - 1) * itemPages
    const currentItems = schedule.slice(startIndex, startIndex + itemPages)

    const images = [
        exampleImage,
        exampleImage,
        exampleImage
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const sliderRef = useRef<any>(null);

    const formatHarga = (itung: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(itung);
    };

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return {
        packages, setPackages,
        currentPage, setCurrentPage,
        packageCover,
        packageFasility,
        packageHotel,
        packageSchedules,
        handleSubmit,
        itemPages,
        totalPages,
        currentItems,
        images,
        settings,
        sliderRef,
        formatHarga,
        next,
        previous
    };
};

export default usePreviewPackage;