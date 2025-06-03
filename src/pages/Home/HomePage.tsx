import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import dashboardIcon from "../../assets/icons/Home.svg";
import packageIcon from "../../assets/icons/3d_box_fill.svg";
import orderIcon from "../../assets/icons/group_share.svg";
import rateIcon from "../../assets/icons/Star 166.svg";
import doneIcon from "../../assets/icons/Done_ring_round.svg";
import profileExample from "../../assets/images/profile_placeholder (1).png";
import editIcon from "../../assets/icons/Edit_fill.svg";
import vector from "../../assets/images/Group (1).png";
const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={dashboardIcon} alt="dashboard icon" className="w-[20px] h-[20px]" />
          <h1 className="text-primary-blue font-medium">Dashboard</h1>
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

          <div className="w-7/12 h-full grid grid-cols-2 mt-[57px] gap-4">
            <div className="bg-white shadow-[-1px_6px_19px] shadow-black/25 w-full pt-[42px] pb-[33px] flex flex-col items-center justify-center">
              <div className="flex">
                <div className="w-[80px] h-[70px] border-e-2 border-black flex items-center">

                <img src={packageIcon} alt="package icon" className="w-[61px] h-[61px] " />
                </div>
                <h1 className="text-[40px] flex items-center font-medium text-primary-blue ms-[21px]">10</h1>
             </div>
                <h1 className="capitalize text-[15px] mt-[22px] text-primary-blue">Pesanan saya</h1>
            </div>
            <div className="bg-white shadow-[-1px_6px_19px] shadow-black/25 w-full pt-[42px] pb-[33px] flex flex-col items-center justify-center">
              <div className="flex">
                <div className="w-[80px] h-[70px] border-e-2 border-black flex items-center">

                <img src={orderIcon} alt="order icon" className="w-[61px] h-[61px] " />
                </div>
                <h1 className="text-[40px] flex items-center font-medium text-primary-blue ms-[21px]">10</h1>
             </div>
                <h1 className="capitalize text-[15px] mt-[22px] text-primary-blue">order berjalan</h1>
            </div>
            <div className="bg-white shadow-[-1px_6px_19px] shadow-black/25 w-full pt-[42px] pb-[33px] flex flex-col items-center justify-center">
              <div className="flex">
                <div className="w-[80px] h-[70px] border-e-2 border-black flex items-center">

                <img src={rateIcon} alt="rate icon" className="w-[61px] h-[61px] " />
                </div>
                <h1 className="text-[40px] flex items-center font-medium text-primary-blue ms-[21px]">10</h1>
             </div>
                <h1 className="capitalize text-[15px] mt-[22px] text-primary-blue">Penilaian</h1>
            </div>
            <div className="bg-white shadow-[-1px_6px_19px] shadow-black/25 w-full pt-[42px] pb-[33px] flex flex-col items-center justify-center">
              <div className="flex">
                <div className="w-[80px] h-[70px] border-e-2 border-black flex items-center">

                <img src={doneIcon} alt="done icon" className="w-[61px] h-[61px] " />
                </div>
                <h1 className="text-[40px] flex items-center font-medium text-primary-blue ms-[21px]">10</h1>
             </div>
                <h1 className="capitalize text-[15px] mt-[22px] text-primary-blue">Order selesai</h1>
            </div>
          </div>
        </div>
     </div>
    </DefaultLayout>
  );
};

export default HomePage;
