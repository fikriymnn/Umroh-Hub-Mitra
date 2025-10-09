import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import orderIcon from '../../assets/icons/Vector (5).svg'
// import profileExample from "../../assets/images/profile_placeholder (1).png";
// import vector from "../../assets/images/Group (1).png";
import searchIcon from "../../assets/icons/Search_alt_light.svg";
import useOrder from "../../hooks/order/useOrder";
import { Link } from "react-router";
const Order: React.FC = () => {
  const {
    orders,
    active, setActive,
    filter, setFilter
  } = useOrder();
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={orderIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
          <h1 className="text-primary-blue font-medium">Order</h1>
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
            <button
              onClick={() => setFilter('Semua')}
              className={`${filter === 'Semua' ?
                'font-bold text-[15px] text-primary-blue border-b-4 border-primary-blue' :
                'font-medium text-[15px] text-primary-blue'
                }`}
            >
              Semua
            </button>
            <button
              onClick={() => setFilter('Reguler')}
              className={`${filter === 'Reguler' ?
                'font-bold text-[15px] text-primary-blue border-b-4 border-primary-blue' :
                'font-medium text-[15px] text-primary-blue'
                }`}
            >
              Paket Reguler
            </button>
            <button
              onClick={() => setFilter('Plus')}
              className={`${filter === 'Plus' ?
                'font-bold text-[15px] text-primary-blue border-b-4 border-primary-blue' :
                'font-medium text-[15px] text-primary-blue'
                }`}
            >
              Paket Plus
            </button>
          </div>
          <button className="flex justify-center px-4 py-2 w-fit justify-self-end rounded-full text-white text-sm font-medium bg-gradient-to-r from-[#0066b2] to-[#00d2d3]">
            <span className="flex whitespace-nowrap items-center justify-center w-5 h-5 rounded-full border border-white text-white text-sm me-2">+</span>
            Paket Baru
          </button>

        </div>
        <div className="w-11/12 ms-[39px] mt-[37px] h-full">
          <div className="flex ms-[20px] mb-[27px] space-x-[35px]">
            <h1 className="font-bold text-[15px] text-primary-blue capitalize">Belum di konfirmasi</h1>
            <h1 className="font-medium text-[15px] text-primary-blue capitalize">sudah di konfirmasi</h1>
          </div>
          {/* table head */}
          <div className="grid grid-cols-12 bg-white text-[#031B4E] font-bold px-4 py-3 rounded-t-md shadow-[0px_0px_14.4px_2px] shadow-black/25">
            <div className="">No</div>
            <div className="col-span-3 ">Nama Pemesan</div>
            <div className="col-span-2 ">Jumlah Jemaah</div>
            <div className=" col-span-3">Paket</div>
            <div className="col-span-3 flex space-x-3">

              <h1>Status</h1>
              <div>
                <select
                  id="pembayaran"
                  name="pembayaran"
                  className="font-medium w-[160px]"
                  defaultValue="uang_muka"
                >
                  <option value="uang_muka">Uang Muka</option>
                  <option value="pelunasan">Pelunasan</option>
                  <option value="biaya_tambahan">Biaya Tambahan</option>
                </select>
              </div>
            </div>
          </div>

          {/* table data */}
          <div
            className={`group items-center bg-white text-[#031B4E] px-4 py-2 mt-3 shadow-[0px_0px_14.4px_2px] shadow-black/25 rounded-md mb-4 transition-all hover:w-[1180px] duration-500 ease-in-out hover:text-white hover:bg-[#0030EE] ${active ? "w-[1180px]" : "w-full"
              }`}
          >
            {orders?.map((order, index) => (
              <div key={index} className="grid grid-cols-12 px-1 items-center pb-5 gap-1 mt-3 w-full">
                <div className="font-bold">{index + 1}</div>

                <div className="col-span-3 capitalize font-bold">{order?.user?.name}</div>

                <div className="font-semibold col-span-2">{order?.jamaah?.length} Orang</div>

                <div className="font-semibold col-span-3">
                  <h1>{order?.package_umroh?.package_name}</h1>
                  <h1 className="text-[10px] font-medium capitalize text-[#5587ED] group-hover:text-[#10F5EA]">
                    {order?.package_umroh?.master_category_departure?.category_name}
                  </h1>
                </div>

                <div className="flex col-span-3 justify-between items-center">
                  <h1 className="font-medium capitalize w-[100px]">Belum dikonfirmasi</h1>

                  <Link to={`/Order/${order?.id}`}>
                    <button
                      onClick={() => setActive(true)}
                      className="transition-all duration-300 group-hover:from-white group-hover:to-white group-hover:text-[#003CB3] bg-gradient-to-br from-[#003CB4] to-[#3679FE] text-white text-sm font-medium rounded-full px-7 py-1 w-fit"
                    >
                      Detail
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>


      </div>
    </DefaultLayout>
  );
};

export default Order;
