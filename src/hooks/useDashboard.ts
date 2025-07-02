import { useEffect, useState } from 'react'
import { getDataDashboardMitra, statistikMitra } from '../services/dashboardServices';
import { Dashboard } from '../types/Dashboard';

const useDashboard = () => {
    const [datas, setDatas] = useState<Dashboard>();
    const [income, setIncome] = useState();
    const [selectedYear, setSelectedYear] = useState("2025");

    useEffect(() => {
        fetchData();
        fetchIncome
    }, [selectedYear]);
    
    const fetchData = async () => {
        try {
            const res = await getDataDashboardMitra();
            console.log(res);
            setDatas(res.data.data)
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    const fetchIncome = async () => {
        try {
            const res = await statistikMitra();
            console.log(res);
            setIncome(res.data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    return {
        datas, setDatas,
        income, setIncome,
        selectedYear, setSelectedYear
    };
};

export default useDashboard;