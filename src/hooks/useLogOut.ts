import React, { useState } from 'react'
import { logOut } from '../services/authServices';

const useLogOut = () => {
    const [openDropdown, setOpenDropdown] = useState(false);

    async function handleLogOut() {
        try {
            await logOut();
        
            document.cookie = 'token=; Max-Age=0; path=/;';
        
            window.location.href = '/';
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    return {
        openDropdown, setOpenDropdown,
        handleLogOut
    };
};

export default useLogOut;
