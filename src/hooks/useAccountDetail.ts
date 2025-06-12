import { useState, useEffect } from "react";
import { Partner } from "../types/Partners";
import { getMe } from "../services/partnerServices";

const useAccountDetail = () => {
    const [partner, setPartner] = useState<Partner>();

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await getMe();
                setPartner(res.data.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            } 
        }

        fetchUser();
    }, []);

    return {partner};
}

export default useAccountDetail;
