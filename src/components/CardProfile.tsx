import React from 'react';
import profileExample from "../assets/images/profile_placeholder (1).png";
import editIcon from "../assets/icons/Edit_fill.svg";
import vector from "../assets/images/Group (1).png";
import { Partner } from '../types/Partners';

const CardProfile = ({ partner }: { partner: Partner }) => {
    return (
        <div className='mt-[20px]'>
            <img
                src={vector}
                alt="background"
                className="absolute top-0 right-0 h-full w-auto opacity-70 object-cover z-0"
            />
            <div className="relative z-10 flex items-center h-full px-[34px] space-x-[24px]">
                <img
                    src={profileExample}
                    alt="profile"
                    className="w-[100px] h-[100px] rounded-full object-cover"
                />
                <div className="flex flex-col justify-center space-y-[9px]">
                    <div className="flex flex-col">

                        <h1 className="text-white font-medium capitalize text-[16px]">
                            {partner.company_name}
                        </h1>
                        <h2 className="text-white text-[10px] capitalize">
                            {partner.name}
                        </h2>
                    </div>
                    <div className="flex flex-col">

                        <h2 className="text-white text-[10px] capitalize">
                            Daftar Sejak
                        </h2>
                        <h2 className="text-white text-[10px] capitalize">
                            20/10/2020
                        </h2>
                    </div>
                </div>
                <div className="flex w-5/12" />
                <div className="flex items-center justify-end">
                    <img
                        src={editIcon}
                        alt="edit icon"
                        className="w-[30px] h-[30px] cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default CardProfile
