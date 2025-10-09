import { useEffect, useState } from "react";
import { getAllOrder } from "../../services/orderServices";
import axios from "axios";
import { Order } from "../../types/Order";

const useOrder = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [active, setActive] = useState(false);
    const [filter, setFilter] = useState('Semua');

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const category = filter === 'Semua' ? undefined : filter;
                const res = await getAllOrder(category);
                console.log(res);
                setOrders(res.data.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(`Error: ${error.response?.data.message}`);
                }
            }
        };

        fetchOrder();
    }, [filter]);

    return {
        orders, setOrders,
        active, setActive,
        filter, setFilter
    };
};

export default useOrder;