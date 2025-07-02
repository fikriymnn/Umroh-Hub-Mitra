import { useState, useEffect } from "react"
import { Partner } from "../types/Partners"
import { getMe, updatePartner } from "../services/partnerServices"
import { useNavigate } from "react-router";

const useUpdateAccount = () => {
    const navigate = useNavigate();
    const [partner, setPartner] = useState<Partner>();
    const [name, setName] = useState('');
    const [siuppiu, setSiuppiu] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchPartner = async () => {
            try {
                const res = await getMe();
                console.log(res);
                const partnerData = res.data.data;
    
                setPartner(partnerData);
                setName(partnerData.name);
                setSiuppiu(partnerData.siuppiu);
                setCompany(partnerData.company_name);
                setAddress(partnerData.address);
                setWebsite(partnerData.website);
                setEmail(partnerData.email);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchPartner();
    }, []);

    const handleUpdate = async () => {
        if (!partner?.id) return;
        try {
            await updatePartner(partner.id, {
                name,
                siuppiu: siuppiu,
                company_name: company,
                address,
                website,
                email
            });

            alert('Data berhasil diperbarui!');
            navigate('/AccountDetail');
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    return {
        partner, setPartner,
        name, setName,
        siuppiu, setSiuppiu,
        company, setCompany,
        address, setAddress,
        website, setWebsite,
        email, setEmail,
        handleUpdate
    };
};

export default useUpdateAccount;
