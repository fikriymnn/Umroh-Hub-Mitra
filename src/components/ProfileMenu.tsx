import React from 'react';
import { FaChevronDown, FaUserCircle } from 'react-icons/fa';

type ProfileMenuProps = {
    partner: {
        name?: string;
        image_url?: string;
    };
    openDropdown: boolean;
    setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    handleLogOut: () => void;
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({ partner, openDropdown, setOpenDropdown, handleLogOut }) => {
    return (
        <div className="relative px-4 py-2 flex items-center gap-2 cursor-pointer z-20" onClick={() => setOpenDropdown((prev) => !prev)}>
            <span className="text-[#001A4D] font-semibold">{partner.name}</span>

            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#001A4D]">
                {partner.image_url ? (
                    <img
                        src={
                            partner.image_url.startsWith('http')
                                ? partner.image_url
                                : `${import.meta.env.VITE_PUBLIC_URL}${partner.image_url}`
                        }
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <FaUserCircle className="text-[#001A4D] text-2xl w-full h-full" />
                )}
            </div>

            <FaChevronDown className="text-[#001A4D]" />

            {openDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-lg z-10">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        {partner.name}
                    </div>
                    <ul>
                        <li>
                            <button
                                onClick={handleLogOut}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                Keluar
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ProfileMenu
