import { useEffect, useState } from "react";
import { getAllOrder } from "../../services/orderServices";
import axios from "axios";
import { Order } from "../../types/Order";

const useOrder = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        async function fetchOrder() {
            try {
                const res = await getAllOrder();
                console.log(res);
                setOrders(res.data.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(`Error: ${error.response?.data.message}`);
                }
            }
        };

        fetchOrder();
    }, []);

    return {
        orders, setOrders,
        active, setActive,
    };
};

export default useOrder;