/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import packageIcon from "../../../assets/icons/Vector (3).svg";
import DefaultLayout from '../../../layout/DefaultLayout';

function PackageCover() {
    const [gambar, setGambar] = useState<string | null>(null);

  const handleImageUpload = (event:any) => {
    setGambar(URL.createObjectURL(event.target.files[0]));
  };
    return (
      <DefaultLayout>
            
         <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={packageIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
          <h1 className="text-primary-blue font-medium">Package</h1>
        </div>
                <div className="p-6 ms-[48px]">
                    <h1 className="text-[20px] flex items-center space-x-[12px] capitalize font-medium ms-[30px] text-primary-blue mb-4">Sampul Paket <span className='ms-[12px]'>-</span>
                        <span className='text-[12px] text-[#919191]'>fasilitas</span>
                        <span>-</span><span className='text-[12px] text-[#919191]'>Detail hotel</span>
                        <span>-</span><span className='text-[12px] text-[#919191]'>jadwal perjalanan</span>
                    </h1>

        <div className="w-11/12 grid bg-white grid-cols-2 gap-6 shadow-[0px_4px_7.7px_5px] px-[30px] py-[27px] shadow-black/25">
            {/* Form kiri */}
            <div className="space-y-4">
            <div>
                <label className="block  font-medium text-primary-blue">Nama Paket</label>
                <input
                type="text"
                className="mt-1 w-10/12 p-2  rounded-[10px] bg-[#F4F4F4]"
                />
            </div>

            <div className='flex space-x-[22px]'>
                <label className=" flex items-center font-medium text-primary-blue">Jenis Paket</label>
                <select
                className="mt-1 w-3/12 px-2 py-1  rounded-[10px] bg-[#F4F4F4]"
                >
                <option value="Reguler">Reguler</option>
                <option value="VIP">VIP</option>
                </select>
            </div>

            <div>
                <label className="block  font-medium text-primary-blue">Deskripsi</label>
                <textarea
                className="mt-1 w-10/12 p-2  rounded-[10px] bg-[#F4F4F4]"
                rows={4}
                ></textarea>
            </div>

            <div>
                <label className="block  font-medium text-primary-blue">Harga Paket</label>
                <input
                type="text"
                className="mt-1 w-10/12 p-2  rounded-[10px] bg-[#F4F4F4]"
                />
            </div>

            <div>
                <label className="block  font-medium text-primary-blue">No Izin Umroh</label>
                <input
                type="text"
                className="mt-1 w-10/12 p-2  rounded-[10px] bg-[#F4F4F4]"
                />
            </div>
            </div>

            {/* Gambar Sampul */}
            <div className="">
                
             <h1 className="font-medium capitalize">Gambar sampul</h1>
            <div className="flex flex-col mt-1 w-10/12 items-center justify-center  rounded-[10px] bg-[#F4F4F4] h-64">
            {gambar ? (
                <img src={gambar} alt="Gambar Sampul" className="h-full object-contain" />
            ) : (
                <div className="">
                                        
               
                <div className="flex flex-col items-center cursor-pointer">
                <h1 className="text-3xl font-bold">+</h1>
                <h1 className=" mt-2">Tambah Gambar</h1>
                <input type="file" className="hidden" onChange={handleImageUpload} />
                </div>
                </div>
            )}
            </div>
            </div>
            <div className=""></div>
        <div className="w-full mt-6 flex justify-end gap-4">
            <button className="px-6 py-2 rounded-full bg-gray-400 text-white">Kembali</button>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white">
            Simpan Dan Lanjut
            </button>
        </div>
        </div>

        {/* Buttons */}
        </div>
        </div>
      </DefaultLayout>
  )
}

export default PackageCover

