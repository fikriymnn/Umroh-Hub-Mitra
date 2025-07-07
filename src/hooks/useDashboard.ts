import { useEffect, useState } from 'react'
import { getDataDashboardMitra, statistikMitra } from '../services/dashboardServices';
import { ChartData, Dashboard, MonthlyStatistics } from '../types/Dashboard';
import { MasterHotel } from '../types/Hotels';
import { getAllHotels } from '../services/hotelServices';
import { isAxiosError } from 'axios';

const useDashboard = () => {
    const [datas, setDatas] = useState<Dashboard>();
    const [hotels, setHotels] = useState<MasterHotel[]>([]);
    const [income, setIncome] = useState<MonthlyStatistics[]>([]);
    const [chartData, setChartData] = useState<ChartData>();
    const [selectedYear, setSelectedYear] = useState("");

    const monthName = [
        "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", 
        "Agu", "Sep", "Okt", "Nov", "Des"
    ];

    useEffect(() => {
        fetchData();
        fetchIncome();
        fetchChartData();
    }, [selectedYear]);
    
    useEffect(() => {
        fetchHotel();
    });
    
    const fetchData = async () => {
        try {
            const res = await getDataDashboardMitra();
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

                const mappedData = rawData.map((item: MonthlyStatistics) => ({
                    month: monthName[item.month - 1],
                    totalSubTotal: Number(item.totalSubTotal),
                    totalPackage: item.totalPackage
                }));

                setIncome(mappedData);
            }
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    const fetchHotel = async () => {
        try {
            const res = await getAllHotels();
            setHotels(res.data);
        } catch (error) {
            if (isAxiosError(error)) {
                console.log(`Error: ${error}`);
            }
        }
    };

    const fetchChartData = async () => {
        try {
            if (selectedYear) {
                const res = await statistikMitra(selectedYear);
                console.log(res);
                setChartData(res.data.data);
            }
        } catch (error) {
            if (isAxiosError(error)) {
                console.log(`Error: ${error}`);
            }
        }
    }

    return {
        datas, setDatas,
        income, setIncome,
        hotels, setHotels,
        chartData, setChartData,
        selectedYear, setSelectedYear
    };
};

export default useDashboard;