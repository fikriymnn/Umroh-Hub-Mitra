import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import packageIcon from "../../assets/icons/Vector (3).svg";
// import profileExample from "../../assets/images/profile_placeholder (1).png";
// import editIcon from "../../assets/icons/Edit_fill.svg";
// import vector from "../../assets/images/Group (1).png";
import searchIcon from "../../assets/icons/Search_alt_light.svg";
import { Link } from "react-router";
import usePackage from "../../hooks/package/usePackage";
import packageExample from '../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png'
const Package: React.FC = () => {
  const { packages } = usePackage();
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
            <input name="search" type="text" placeholder='Cari...' className=' ps-[50px] w-9/12  px-[1%]  h-[40px] rounded-full font-semibold placeholder:text-primary-blue border-1 placeholder:text-[15px] placeholder:font-medium border-[#C0C0C0]' />
          </div>

          <div className="flex space-x-[35px] col-span-2">
            <h1 className="font-bold text-[15px] text-primary-blue border-b-4 border-primary-blue">Semua</h1>
            <h1 className="font-medium text-[15px] text-primary-blue">Paket Reguler</h1>
            <h1 className="font-medium text-[15px] text-primary-blue">Paket Plus</h1>
            <h1 className="font-medium text-[15px] text-primary-blue">Paket Promo</h1>
          </div>
          <button className="flex justify-center px-4 py-2 w-fit justify-self-end rounded-full text-white text-sm font-medium bg-gradient-to-r from-[#0066b2] to-[#00d2d3]">
            <Link to="/Package/AddPackage" className="flex items-center">
              <span className="flex whitespace-nowrap items-center justify-center w-5 h-5 rounded-full border border-white text-white text-sm me-2">+</span>
              Paket Baru
            </Link>
          </button>

        </div>

      <div className="w-11/12 ms-[39px] mt-[30px] h-full">
  {/* table head */}
  <div className="grid grid-cols-12 bg-white text-[#031B4E] font-bold px-4 py-3 rounded-t-md shadow-[0px_0px_14.4px_2px] shadow-black/25">
    <div className="text-center">No</div>
    <div className="col-span-4 text-center">Nama Paket</div>
    <div className="col-span-2 text-center">Harga Paket</div>
    <div className="text-center">Kuota</div>
    <div className="col-span-4 text-center"></div>
  </div>

  {/* table content */}
{packages?.map((pckg, i) => (
  <div
    key={i}
    className="w-full px-4 mt-[39px] bg-white shadow-[0px_4px_8.4px_4px] shadow-black/25 rounded-lg"
  >
    <div className="grid grid-cols-5 gap-4 items-start">
      {/* Kolom 1 - Gambar */}
      <div className="col-span-1">
        <img
          src={packageExample}
          alt="paket"
          className="object-cover w-[183px] h-[183px]"
        />
      </div>

      {/* Kolom 2-4 - Detail Paket */}
      <div className="col-span-3 grid grid-rows-3 gap-2 py-4">
        {/* Baris 1 - Judul dan Kuota */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-bold text-[#1D1D1D]">{pckg.package_name}</h2>
            <p className="text-sm text-gray-500">{pckg.master_category_departure?.category_name}</p>
          </div>
          <div className="text-right">
            <p className="text-[#1D1D1D] font-semibold">Rp{pckg.price?.toLocaleString()}</p>
            <p className="text-sm text-[#1D1D1D]">{pckg.quota}/{pckg.quota_update}</p>
          </div>
        </div>

        {/* Baris 2 - Pesanan & Tanggal */}
        <div className="grid grid-cols-3 w-full gap-4">
          <div>
            <div className="border border-[#3A86FF] rounded-full px-4 py-1 bg-[#E8F1FF] inline-block">
              <span className="text-[#1D1D1D] font-bold text-xl">27</span>
              <span className="text-sm ml-1">Pesanan</span>
            </div>
          </div>
          <div className="text-sm text-[#1D1D1D] text-left">
            <p>Tanggal keberangkatan</p>
            <p className="font-semibold">Senin 23/10/2025</p>
          </div>
          <div className="text-sm text-[#1D1D1D] text-left">
            <p>Tanggal kepulangan</p>
            <p className="font-semibold">Selasa 3/10/2025</p>
          </div>
        </div>

        {/* Baris 3 - Progress */}
        <div className="w-10/12">
          <div className="flex justify-between text-sm text-[#1D1D1D] mb-1">
            <span>Persiapan</span>
            <span>Hari 9</span>
          </div>
          <div className="w-full h-[6px] bg-gray-300 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-[#004492] to-[#10F5EA] rounded-full"
              style={{ width: `60%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Kolom 5 - Persentase */}
      <div className="flex justify-center relative h-full items-center">
        <div className="bg-gradient-to-r bottom-2 from-cyan-400 to-blue-500 text-white font-bold text-lg px-6 py-6 rounded-[20px]">
          60%
        </div>
      </div>
    </div>
  </div>
))}


</div>


      </div>
    </DefaultLayout>
  );
};

export default Package;
