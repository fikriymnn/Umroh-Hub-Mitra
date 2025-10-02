import { useEffect, useState } from 'react'
import { PackageDetail } from '../../types/Package';
import { useNavigate, useParams } from 'react-router';
import { getOnePackageMitra } from '../../services/packagesServices';
import axios from 'axios';

const useDetailPackage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState<PackageDetail>();
    const [currentPage, setCurrentPage] = useState(1);
    const itemPages = 4;

    const schedule = data?.detailPackage?.package_schedules?.flatMap((schedule: any) =>
        schedule.detail_activities.map((activity: any) => ({
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

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                if (id) {
                    const res = await getOnePackageMitra(id);
                    console.log(res);
                    setData(res.data.data);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(`Error: ${error.response?.data.message}`);
                }
            }
        };

        fetchPackage();
    }, []);

    const handleCLick = (id: number) => {
        try {
            navigate(`/Package/${id}/Listed-Pilgrims`);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    return {
        data, setData,
        currentPage, setCurrentPage,
        itemPages,
        totalPages,
        currentItems,
        handleCLick
    };
};

export default useDetailPackage;