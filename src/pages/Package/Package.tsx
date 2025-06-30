import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import packageIcon from "../../assets/icons/Vector (3).svg";
// import profileExample from "../../assets/images/profile_placeholder (1).png";
// import editIcon from "../../assets/icons/Edit_fill.svg";
// import vector from "../../assets/images/Group (1).png";
import searchIcon from "../../assets/icons/Search_alt_light.svg";
import { Link } from "react-router";
import usePackage from "../../hooks/package/usePackage";
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
  <div key={i} className="grid grid-cols-12 gap-2 bg-white px-4 py-3 mt-3 shadow-[0px_0px_14.4px_2px] shadow-black/25 rounded-md mb-4 items-center">
    {/* No */}
    <div className="text-center font-bold text-[#031B4E]">{i + 1}</div>

    {/* Gambar + Nama Paket */}
    <div className="col-span-4 flex items-start gap-4">
      <img
        src={packageIcon}
        alt="ikon paket"
        className="w-[120px] h-[120px] object-cover rounded-md"
      />
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-lg font-bold text-[#031B4E]">{pckg.package_name}</p>
          <p className="text-sm text-[#696969]">{pckg.master_category_departure.category_name}</p>
          <div className="mt-3">
            <div className="bg-[#EDF4FF] rounded-full px-3 py-[2px] text-[#003CB4] text-sm inline-block font-semibold">
              25 Pesanan
            </div>
          </div>
        </div>
        <div className="mt-2 text-sm text-[#4B4B4B]">
          <p>Tanggal keberangkatan</p>
          <p className="font-semibold">Senin 23/10/2025</p>
          <p className="mt-1">Tanggal kepulangan</p>
          <p className="font-semibold">Selasa 3/10/2025</p>
        </div>
      </div>
    </div>

    {/* Harga Paket */}
    <div className="col-span-2 text-center text-[#031B4E] font-semibold">
      {pckg.price}
    </div>

    {/* Kuota */}
    <div className="text-center text-[#031B4E] font-semibold">
      {pckg.quota}/{pckg.quota_update}
    </div>

    {/* Tombol & Progress */}
    <div className="col-span-4 flex flex-col justify-between h-full">
      <div className="flex justify-end gap-2">
        <button className="bg-gradient-to-br from-primary-blue to-[#003CB3] text-white text-sm font-medium rounded-full px-6 py-[6px]">
          Lihat Detail
        </button>
        <div className="bg-gradient-to-br from-[#32D3FF] to-[#10F5EA] text-white text-sm font-semibold rounded-full px-4 py-1 flex items-center justify-center w-[50px] h-[50px] text-center">
          60%
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-3 w-full">
        <div className="flex justify-between text-xs text-[#4B4B4B] mb-[2px]">
          <span>Hari 1</span>
          <span>Hari 9</span>
        </div>
        <div className="w-full h-[6px] bg-[#D9D9D9] rounded-full relative">
          <div
            className="h-full bg-gradient-to-r from-[#32D3FF] to-[#10F5EA] rounded-full"
            style={{ width: `60%` }}
          ></div>
          <div
            className="absolute top-[-6px] w-4 h-4 rounded-full bg-[#031B4E] border-2 border-white"
            style={{ left: `60%`, transform: 'translateX(-50%)' }}
          ></div>
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
