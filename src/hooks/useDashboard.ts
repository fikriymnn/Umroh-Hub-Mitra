import { useEffect, useState } from 'react'
import { getDataDashboardMitra, statistikMitra } from '../services/dashboardServices';
import { Dashboard, Income } from '../types/Dashboard';

const useDashboard = () => {
    const [datas, setDatas] = useState<Dashboard>();
    const [chartData, setChartData] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");

    const monthName = [
        "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", 
        "Agu", "Sep", "Okt", "Nov", "Des"
    ];

    useEffect(() => {
        fetchData();
        fetchIncome();
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
            if (selectedYear) {
                const res = await statistikMitra(selectedYear);
                console.log(res);
                const rawData = res.data.data.monthlyStatistics;

                const mappedData = rawData.map((item: Income) => ({
                    bulan: monthName[item.month - 1],
                    pendapatan: Number(item.totalSubTotal)
                }));

                setChartData(mappedData);
            }
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    return {
        datas, setDatas,
        chartData, setChartData,
        selectedYear, setSelectedYear
    };
};

export default useDashboard;