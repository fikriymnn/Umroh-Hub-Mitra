import { useEffect, useState } from "react";
import { getAllOrder } from "../../services/orderServices";
import axios from "axios";
import { Order } from "../../types/Order";

const useOrder = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [active, setActive] = useState(false);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const res = await getAllOrder(filter);
                console.log(res);
                setOrders(res.data.data.data);
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