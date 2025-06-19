import React from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import packageIcon from "../../../assets/icons/Vector (3).svg";
// import profileExample from "../../assets/images/profile_placeholder (1).png";
// import vector from "../../assets/images/Group (1).png";
import searchIcon from "../../../assets/icons/Search_alt_light.svg";
import { Link } from "react-router";
const Promo: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={packageIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
          <h1 className="text-primary-blue font-medium">Package</h1>
        </div>
        <div className="w-11/12 grid grid-cols-4 ms-[39px] mt-[30px] h-full items-center">
           <div className="relative">
                                <img
                                src={searchIcon}
                                alt="pass icon"
                                width={22}
                                height={22}
                                className="absolute top-1/4 ms-4"
                              />
                                <input name="search" type="text" placeholder='Cari...' className=' ps-[50px] w-9/12  px-[1%]  h-[40px] rounded-full font-semibold placeholder:text-primary-blue border-1 placeholder:text-[15px] placeholder:font-medium border-[#C0C0C0]'/>
                                </div>
             
              <div className="flex space-x-[35px] col-span-2">
                  <h1 className="font-bold text-[15px] text-primary-blue border-b-4 border-primary-blue">Semua</h1>
                  <h1 className="font-medium text-[15px] text-primary-blue">Paket Reguler</h1>
            <h1 className="font-medium text-[15px] text-primary-blue">Paket Plus</h1>
            <h1 className="font-medium text-[15px] text-primary-blue">Paket Promo</h1>
                  </div>
                  <button className="flex justify-center px-4 py-2 w-fit justify-self-end rounded-full text-white text-sm font-medium bg-gradient-to-r from-[#0066b2] to-[#00d2d3]">
                    <span className="flex whitespace-nowrap items-center justify-center w-5 h-5 rounded-full border border-white text-white text-sm me-2">+</span>
                    Paket Baru
                    </button>

              </div>
           <div className="w-11/12 mt-[39px] ms-[39px] relative">
                      <Link to="/Package/Promo/AddPromo" className="absolute right-0 top-5">
                          <h1 className="text-[15px] font-medium text-primary-blue">Aktifkan Promo di paket lainnya &gt;</h1>
                      </Link>
                  </div>
              <div className="w-11/12 mt-[39px] ms-[39px]">
          <h1 className="text-[32px] font-semibold text-primary-blue">Paket Sedang Promosi</h1>
              </div>
              <div className="w-11/12 ms-[39px] mt-[30px] h-full">
                {/* table head */}
                <div className="grid grid-cols-12 bg-white text-[#031B4E] font-bold px-4 py-3 rounded-t-md shadow-[0px_0px_14.4px_2px] shadow-black/25">
                    <div className="text-center">No</div>
                    <div className="col-span-4 text-center">Nama Paket</div>
                    <div className="col-span-2 text-center">Harga Paket</div>
            <div className="text-center">Kuota Tersisa</div>
             <div className="col-span-4 text-center"></div>
                   
                </div>

                  {/* table data */}
                <div className="grid grid-cols-12 items-center bg-white px-4 py-3 mt-3 shadow-[0px_0px_14.4px_2px] shadow-black/25 rounded-md mb-4">
                    <div className="font-bold w-1/5 text-[#031B4E] text-center">1</div>

                    <div className="flex items-center space-x-5 col-span-4">
                    <img
                        src={packageIcon}
                        alt="ikon paket"
                        className="w-10 h-10 object-cover rounded"
                    />
                    <div className="col-span-2">
                        <p className="font-bold text-[#031B4E]">Umroh Paket Plus Amanah</p>
                        <p className="text-sm text-gray-500">Paket Plus</p>
                    </div>
                    </div>

                    <div className="font-semibold col-span-2 text-[#031B4E] text-center">Rp32.000.000</div>
                    <div className="font-semibold text-[#031B4E] text-center">10/20</div>
                    <div className="flex col-span-4 justify-center gap-2">
                      {/* <button className="bg-gradient-to-br from-[#1C9D38] to-[#05FE92] text-white text-sm font-medium rounded-full px-7 py-1 w-fit">
                        Promo
                    </button> */}
               <button className="text-[#00EB33] font-bold rounded-full px-7 py-1 w-fit">
                        Promo
                    </button>
                    <button className="bg-gradient-to-br from-primary-blue to-[#003CB3] text-white text-sm font-medium rounded-full px-7 py-1 w-fit">
                        Detail
                    </button>
                    <button className="bg-gradient-to-br from-[#9D1C1C] whitespace-nowrap to-[#FE0505] text-white text-sm font-medium rounded-full px-7 py-1 w-fit">
                        Non Aktifkan
                    </button>
                    </div>
                  </div>
                  
                 
            </div>


     </div>
    </DefaultLayout>
  );
};

export default Promo;
