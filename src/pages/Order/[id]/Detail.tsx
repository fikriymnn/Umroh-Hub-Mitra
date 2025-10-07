import React, { useState } from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import orderIcon from '../../../assets/icons/Vector (5).svg'
import useDetailOrder from "../../../hooks/order/useDetailOrder";
// import profileExample from "../../assets/images/profile_placeholder (1).png";
// import vector from "../../assets/images/Group (1).png";
const OrderDetail: React.FC = () => {
  const {
    order
  } = useDetailOrder();

  const fakeStatusConfirm = 'Confirmed'
  const [UploadVisa, setUploadVisa] = useState(false);
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
       
        <div className="w-full relative z-30 h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={orderIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
          <h1 className="text-primary-blue font-medium">Order</h1>
        </div>
        {/* ini upload visa popup */}
         {UploadVisa === true && (
          <div className="  fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 backdrop-blur-lg"></div>
            <div className=" relative mx-auto flex items-center justify-center">
              <div className=" bg-white p-6 rounded-lg w-fit h-fit shadow-black/25 shadow-[0px_4px_6.1px_0px]">
                <h2 className="font-medium ms-3 mb-4">Upload Visa, Tiket Penerbangan </h2>
                <div className="shadow-black/25 shadow-[0px_4px_15.2px] mt-[15px] ">
                    <table className="w-full border-collapse">
                      <thead className="bg-[#001F5D] text-white font-medium">
                        <tr>
                          <th className="p-4">No</th>
                          <th className="p-4">Nama Jemaah</th>
                          <th className="p-4">Gender</th>
                          <th className="p-4">Email</th>
                          <th className="p-4">KTP</th>
                          <th className="p-4">Passport</th>
                          <th className="p-4">Kartu Keluarga</th>
                        </tr>
                      </thead>
                      <tbody className="w-full">
                        {order?.jamaah?.map((jmh, i) => (
                          <tr key={i} className="font-medium">
                            <td className="p-4 text-[20px]">{i + 1}.</td>
                            <td className="p-4 text-[20px]">{jmh?.name}</td>
                            <td className="p-4 text-[#696969] text-sm">{jmh?.gender}</td>
                            <td className="p-4 text-[#696969] text-sm">{jmh?.email}</td>

                            <td className="p-4">
                              <div className="flex justify-center">
                                <button className="bg-gradient-to-r from-[#003CB4] to-[#3679FE] text-white text-[12px] px-4 py-1 rounded-full">
                                  Lihat File
                                </button>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex justify-center">
                                <button className="bg-gradient-to-r from-[#003CB4] to-[#3679FE] text-white text-[12px] px-4 py-1 rounded-full">
                                  Lihat File
                                </button>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex justify-center">
                                <button className="bg-gradient-to-r from-[#003CB4] to-[#3679FE] text-white text-[12px] px-4 py-1 rounded-full">
                                  Lihat File
                                </button>
                              </div>
                            </td>

                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-11/12 ms-[39px] mt-[30px] h-full items-center">
          <h1 className="font-medium text-[32px]">Detail Pesanan</h1>
          {order && (
            <div className="w-full flex flex-col space-y-[32px] mt-[44px] px-[27px] py-[42px] mx-auto h-fit shadow-[-1px_0px_9.8px] shadow-black/25">
              <div className="grid grid-cols-3 ms-[59px] ">
              <div className="flex flex-col ">

                <h1 className="font-medium text-[#696969] text-[15px]">
                  Nama Pemesan
                </h1>
                <h1 className="text-[20px] font-medium">{order?.user?.name}</h1>
                </div>
                <div className="flex flex-col ">

                <h1 className="font-medium text-[#696969] text-[15px]">
                  Status Pembayaran
                </h1>
                <h1 className="text-[20px] font-medium capitalize">uang muka</h1>
                <h1 className="text-[13px] font-medium text-[#3C97FF]">Rp6.000.000</h1>
                </div>
                <div className="flex flex-col ">

                <h1 className="font-medium text-[#696969] text-[15px]">
                 Paket Yang Di pesan
                </h1>
                <h1 className="text-[20px] font-medium capitalize">Umroh Paket Plus Amanah</h1>
                <h1 className="text-[13px] font-medium text-[#3C97FF]">Rp6.000.000</h1>
                </div>
              </div>
              <div className="flex flex-col ms-[59px] ">

                <h1 className="font-medium text-[#696969] text-[15px]">
                  Jumlah Jemaah
                </h1>
                <h1 className="text-[20px] font-medium">{order?.jamaah?.length}</h1>
              </div>
              <div className="flex flex-col w-full">

                <h1 className="font-medium ms-[59px] text-[#696969] text-[15px]">
                  Daftar Jemaah
                </h1>
                <div className="shadow-black/25 shadow-[0px_4px_15.2px] mt-[15px] ">
                  <table className="w-full border-collapse">
                    <thead className="bg-[#001F5D] text-white font-medium">
                      <tr>
                        <th className="p-4">No</th>
                        <th className="p-4">Nama Jemaah</th>
                        <th className="p-4">Gender</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">KTP</th>
                        <th className="p-4">Passport</th>
                        <th className="p-4">Kartu Keluarga</th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      {order?.jamaah?.map((jmh, i) => (
                        <tr key={i} className="font-medium">
                          <td className="p-4 text-[20px]">{i + 1}.</td>
                          <td className="p-4 text-[20px]">{jmh?.name}</td>
                          <td className="p-4 text-[#696969] text-sm">{jmh?.gender}</td>
                          <td className="p-4 text-[#696969] text-sm">{jmh?.email}</td>

                          <td className="p-4">
                            <div className="flex justify-center">
                              <button className="bg-gradient-to-r from-[#003CB4] to-[#3679FE] text-white text-[12px] px-4 py-1 rounded-full">
                                Lihat File
                              </button>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex justify-center">
                              <button className="bg-gradient-to-r from-[#003CB4] to-[#3679FE] text-white text-[12px] px-4 py-1 rounded-full">
                                Lihat File
                              </button>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex justify-center">
                              <button className="bg-gradient-to-r from-[#003CB4] to-[#3679FE] text-white text-[12px] px-4 py-1 rounded-full">
                                Lihat File
                              </button>
                            </div>
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-between w-full mt-[40px]">
                <div className=""></div>
              {fakeStatusConfirm === 'Confirmed' && (
                 <h1 className="font-medium text-[#696969] text-[15px]">
                  Di Konfirmasi
                </h1>
                )}
                <div className="flex justify-end">
                              <button onClick={()=> fakeStatusConfirm === 'Confirmed' ? setUploadVisa(true) : setUploadVisa(false)} className="bg-gradient-to-r capitalize from-[#003CB4] to-[#3679FE] text-white text-[15px] px-4 py-1 rounded-full">
                                {fakeStatusConfirm === 'Confirmed' ? 'upload visa' : 'Konfirmasi'}
                              </button>
                            </div>
                </div>
            </div>
          )}
        </div>

      </div>
    </DefaultLayout>
  );
};

export default OrderDetail;
