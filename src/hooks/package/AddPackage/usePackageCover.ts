import { useEffect, useState } from 'react'
import { MasterTypeDeparture } from '../../../types/Package';
import { getAllType } from '../../../services/packagesServices';
import { savePackageCover } from '../../../utils/storage';
import { useNavigate } from 'react-router';

const usePackageCover = () => {
    const navigate = useNavigate();
    const [packageName, setPackageName] = useState('');
    const [typeDepartureList, setTypeDepartureList] = useState<MasterTypeDeparture[]>([]);
    const [selectedTypeDeparture, setSelectedTypeDeparture] = useState<number | undefined>(undefined);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quota, setQuota] = useState(0);
    const [requirements, setRequirements] = useState('');
    // const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchTypeDeparture = async () => {
            try {
                const res = await getAllType();
                console.log(res);
                setTypeDepartureList(res.data.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchTypeDeparture();
    }, []);

    const handleSave = () => {
        const payload = {
            package_name: packageName,
            id_type_departure: selectedTypeDeparture,
            description,
            price,
            quota,
            jamaah_requirements: requirements,
            // image_url: "example"
        }

        try {
            savePackageCover(payload);
            console.log(payload);
            alert('Berhasil kirim data');
            navigate('/Package/AddPackage/Fasility')
        } catch (error) {
            alert('Gagal kirim data');
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
        packageName, setPackageName,
        typeDepartureList, setTypeDepartureList,
        selectedTypeDeparture, setSelectedTypeDeparture,
        description, setDescription,
        price, setPrice,
        quota, setQuota,
        requirements, setRequirements,
        // imageUrl, setImageUrl,
        handleSave,
        handleBack
    };
};

export default usePackageCover;