import React, { useEffect, useState } from 'react'
import { getAllPackageMitra } from '../../services/packagesServices';
import { Package } from '../../types/Package';

const usePackage = () => {
    const [packages, setPackages] = useState<Package[]>([]);

    useEffect(() => {
        async function fetchPackage() {
            try {
                const res = await getAllPackageMitra();
                console.log(res);
                setPackages(res.data.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchPackage();
    }, []);

    return {packages};
};

export default usePackage;