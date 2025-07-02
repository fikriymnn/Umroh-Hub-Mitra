import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { useParams } from "react-router";
import { getOneOrder } from "../../services/orderServices";
import axios from "axios";

const useDetailOrder = () => {
    const {id} = useParams();
    const [order, setOrder] = useState<Order>();

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                if (id) {
                    const res = await getOneOrder(id);
                    console.log(res);
                    setOrder(res.data.data);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error(`Error: ${error.response?.data.message}`);
                }
            }
        };

        fetchOrder();
    }, []);

    return {
        order, setOrder
    };
};

export default useDetailOrder;