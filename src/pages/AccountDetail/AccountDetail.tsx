import React, { useState, useEffect } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import dashboardIcon from "../../assets/icons/Home.svg";
import CardProfile from "../../components/CardProfile";
import useAccountDetail from "../../hooks/useAccountDetail";
import { Partner } from "../../types/Partners";
import { getMe } from "../../services/partnerServices";
import { Link } from "react-router";

const AccountDetail: React.FC = () => {
  const { partner } = useAccountDetail();

  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={dashboardIcon} alt="dashboard icon" className="w-[20px] h-[20px]" />
          <h1 className="text-primary-blue font-medium">Detail Akun</h1>
        </div>
        {partner && (
          <div className="w-full flex flex-col mt-[56px] h-full items-center">
            <div className="relative bg-gradient-to-r from-[#0C4E87] to-[#183453] h-[145px] shadow-[0px_10px_19px] shadow-black/25 rounded-[14px] w-7/12 overflow-hidden">
              {/* Background Image Vector */}
              <CardProfile partner={partner} />
            </div>

            <div className="w-10/12 h-full mt-[33px] gap-4">
              <div className="bg-white shadow-[-1px_6px_19px] shadow-black/25 w-full pt-[20px] px-[45px] pb-[33px] grid grid-cols-3">
                <div className="flex flex-col space-y-[19px] ">
                  <div className="">
                    <h1 className="capitalize font-medium text-[#414141]">Nama mitra</h1>
                    <h1 className="capitalize font-medium text-[19px]">{partner.name}</h1>
                  </div>
                  <div className="">
                    <h1 className="capitalize font-medium text-[#414141]">Nomor izin</h1>
                    <h1 className="capitalize font-medium text-[19px]">{partner.siuppiu}</h1>
                  </div>
                  <div className="">
                    <h1 className="capitalize font-medium text-[#414141]">penilaian</h1>
                    <h1 className="capitalize font-medium text-[19px]">50</h1>
                  </div>
                </div>
                <div className="flex flex-col space-y-[19px]">
                  <div className="">
                    <h1 className="capitalize font-medium text-[#414141]">Nama perusahaan</h1>
                    <h1 className="capitalize font-medium text-[19px]">{partner.company_name}</h1>
                  </div>
                  <div className="">
                    <h1 className="capitalize font-medium text-[#414141]">lokasi</h1>
                    <h1 className="capitalize font-medium text-[19px]">{partner.address}</h1>
                  </div>
                  <div className="">
                    <h1 className="capitalize font-medium text-[#414141]">rating</h1>
                    <h1 className="capitalize font-medium text-[19px]">50</h1>
                  </div>
                </div>
                <div className="flex flex-col space-y-[19px]">
                  <div className="">
                    <h1 className="capitalize font-medium text-[#414141]">website</h1>
                    <h1 className="capitalize font-medium text-[19px]">{partner.website}</h1>
                  </div>
                  <div className="">
                    <h1 className="capitalize font-medium text-[#414141]">email</h1>
                    <h1 className="capitalize font-medium text-[19px]">{partner.email}</h1>
                  </div>
                  <div className="mt-10">
                    <Link to={`/AccountDetail/${partner.id}`}>
                      <button className="bg-[#013293] rounded-[5px] font-medium text-[19px] text-white py-[12px] w-6/12">Edit</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default AccountDetail;
