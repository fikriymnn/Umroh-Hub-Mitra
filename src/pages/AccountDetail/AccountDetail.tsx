import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import dashboardIcon from "../../assets/icons/Home.svg";
import profileExample from "../../assets/images/profile_placeholder (1).png";
import editIcon from "../../assets/icons/Edit_fill.svg";
import vector from "../../assets/images/Group (1).png";
const AccountDetail: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={dashboardIcon} alt="dashboard icon" className="w-[20px] h-[20px]" />
          <h1 className="text-primary-blue font-medium">Detail Akun</h1>
        </div>
        <div className="w-full flex flex-col mt-[56px] h-full items-center">
          <div className="relative bg-gradient-to-r from-[#0C4E87] to-[#183453] h-[145px] shadow-[0px_10px_19px] shadow-black/25 rounded-[14px] w-7/12 overflow-hidden">
            {/* Background Image Vector */}
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
              <div className="flex flex-col justify-center">
                <h1 className="text-white font-medium capitalize text-[16px]">
                  Umroh Hasanah Hana
                </h1>
                <h2 className="text-white text-[10px] capitalize">
                  PT Hasanah Hana
                </h2>
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

          <div className="w-10/12 h-full mt-[33px] gap-4">
                      <div className="bg-white shadow-[-1px_6px_19px] shadow-black/25 w-full pt-[20px] px-[45px] pb-[33px] grid grid-cols-3">
                          <div className="flex flex-col space-y-[19px] ">
                              <div className="">     
                                <h1 className="capitalize font-medium text-[#414141]">Nama mitra</h1>
                                <h1 className="capitalize font-medium text-[19px]">Umrah Hasanah Hana</h1>
                              </div>
                               <div className="">     
                                <h1 className="capitalize font-medium text-[#414141]">Nomor izin</h1>
                                <h1 className="capitalize font-medium text-[19px]">082882882882</h1>
                              </div>
                               <div className="">     
                                <h1 className="capitalize font-medium text-[#414141]">penilaian</h1>
                                <h1 className="capitalize font-medium text-[19px]">50</h1>
                              </div>
                          </div>
                           <div className="flex flex-col space-y-[19px]">
                              <div className="">     
                                <h1 className="capitalize font-medium text-[#414141]">Nama perusahaan</h1>
                                <h1 className="capitalize font-medium text-[19px]">Umrah Hasanah Hana</h1>
                              </div>
                               <div className="">     
                                <h1 className="capitalize font-medium text-[#414141]">lokasi</h1>
                                <h1 className="capitalize font-medium text-[19px]">082882882882</h1>
                              </div>
                               <div className="">     
                                <h1 className="capitalize font-medium text-[#414141]">rating</h1>
                                <h1 className="capitalize font-medium text-[19px]">50</h1>
                              </div>
                          </div>
                           <div className="flex flex-col space-y-[19px]">
                              <div className="">     
                                <h1 className="capitalize font-medium text-[#414141]">website</h1>
                                <h1 className="capitalize font-medium text-[19px]">Umrah Hasanah Hana</h1>
                              </div>
                               <div className="">     
                                <h1 className="capitalize font-medium text-[#414141]">email</h1>
                                <h1 className="capitalize font-medium text-[19px]">082882882882</h1>
                              </div>
                               <div className="mt-10">     
                                <button className="bg-[#013293] rounded-[5px] font-medium text-[19px] text-white py-[12px] w-6/12">Edit</button>
                              </div>
                          </div>
             </div>
          </div>
        </div>
     </div>
    </DefaultLayout>
  );
};

export default AccountDetail;
