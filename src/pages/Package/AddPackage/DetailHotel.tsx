import React from 'react'
import packageIcon from "../../../assets/icons/Vector (3).svg";
import DefaultLayout from '../../../layout/DefaultLayout';

function DetailHotel() {
    return (
      <DefaultLayout>
            
        <div className="w-full min-h-screen pb-16">
            <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
            <img src={packageIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
            <h1 className="text-primary-blue font-medium">Package</h1>
            </div>
                      <div className="p-6 ms-[41px]">
                    <h1 className="text-[12px] flex items-center text-[#0A6BDB] space-x-[12px] capitalize font-medium ms-[30px]  mb-4">Sampul Paket <span className='ms-[12px]'>-</span>
                        <span className='text-[12px] text-[#0A6BDB]'>fasilitas</span>
                        <span>-</span><span className='text-[20px] text-primary-blue'>Detail hotel</span>
                       <span>-</span><span className='text-[12px] text-[#919191]'>jadwal perjalanan</span>
              <span>-</span><span className='text-[12px] text-[#919191]'>preview</span>
                    </h1>
                    <div className="w-full flex flex-col bg-white gap-6 shadow-[0px_4px_7.7px_5px] px-[30px] py-[27px] shadow-black/25">
                        <div className="">      
                        <div className="flex space-x-4">
                            <div className="w-2/12 mt-[54px]">
                            <p className=" font-semibold cursor-pointer">Nama Hotel 1</p>
                            <p className="text-[#3885DD] font-semibold cursor-pointer">Nama Hotel 2</p>
                            </div>

                            <div className="w-full pe-[30px]">
                                <h2 className="text-[20px] font-medium text-primary-blue mb-4">Fasilitas Hotel</h2>
                            <div className="grid w-full grid-cols-3 gap-4 bg-white p-6 rounded shadow">
                                {/* Fasilitas Umum */}
                                <div>
                                <h3 className="font-semibold  mb-2">Fasilitas Umum</h3>
                                <div className="space-y-1">
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Kolam renang</label><br/>
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Restoran</label><br/>
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Gym/Fitness Center</label><br/>
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Musholla</label><br/>
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Lobby</label><br/>
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Ballroom</label><br/>
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Layanan Laundry</label><br/>
                                    <label htmlFor="other" className='mt-4 text-[11px] text-primary-blue font-medium'>Lainnya..</label><br/>
                                    <input type="text" name="other" className="w-9/12  border px-2 py-1 rounded" />
                                </div>
                                </div>

                                {/* Fasilitas Kamar */}
                                <div>
                                <h3 className="font-semibold mb-2">Fasilitas Kamar</h3>
                                <label className="font-medium block mb-2 text-[11px] text-primary-blue">Kapasitas Kamar</label>
                                <input
                                type="number"
                                className="border px-1 rounded w-12"
                                min={1}
                                max={10}
                                />

                                    <span className="ml-1 text-[10px] font-medium text-[#4F4F50]">/Orang</span>
                                
                                <div className="space-y-1">
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Televisi</label><br/>
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Wifi</label><br/>
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> AC</label><br/>
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Toilet</label><br/>
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Telepon/Layanan 24 jam</label><br/>
                                    <label className='text-[11px] text-primary-blue font-medium'><input type="checkbox"/> Air Mineral</label><br/>
                                     <label htmlFor="other" className='mt-4 text-[11px] text-primary-blue font-medium'>Lainnya..</label><br/>
                                    <input type="text" name="other" className="w-9/12  border px-2 py-1 rounded" />
                                </div>
                            
                                            </div>

                                {/* Gambar Hotel */}
                                <div className='w-full'>
                                <h3 className="font-semibold mb-2">Gambar Hotel</h3>
                                <div className="flex flex-col items-center font-medium justify-center w-full h-40 border rounded bg-gray-100 text-center cursor-pointer">
                                    <h1 className="text-[38px]">+</h1> 
                                    <h1>Tambah Gambar</h1>
                                </div>
                                <p className="text-sm text-gray-400 mt-1">Maks 5</p>
                                        </div>
                                        
                                    </div>
                                     <div className="w-full mt-6 flex justify-end gap-4">
                                <button className="px-6 py-2 rounded-full bg-gradient-to-br from-[#004492] to-[#00152C] text-white">Kembali</button>
                                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white">
                                Simpan Dan Lanjut
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                               
                            </div>
                                
        </div>
      </DefaultLayout>
  )
}

export default DetailHotel