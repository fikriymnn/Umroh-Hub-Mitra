import { useEffect, useState } from 'react'
import { getAllPackageMitra } from '../../services/packagesServices';
import { Package } from '../../types/Package';

const usePackage = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                console.log(`Filter: ${filter}`);
                
                const res = await getAllPackageMitra(filter);
                console.log(res);
                setPackages(res.data.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchPackage();
    }, [filter]);

    return {
        packages, setPackages,
        filter, setFilter
    };
};

export default usePackage;