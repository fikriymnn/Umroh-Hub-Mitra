import React, { useState } from 'react'
import packageIcon from "../../../assets/icons/Vector (3).svg";
import DefaultLayout from '../../../layout/DefaultLayout';
import hotelExample from '../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png'
function DetailHotel() {
    const [dipilih, setDipilih] = useState<string[]>([]);

    const pilihHotel = (nama: string) => {
    if (!dipilih.includes(nama)) {
        setDipilih([...dipilih, nama]);
    }
    };

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
                        <span>-</span><span className='text-[20px] text-primary-blue'>Hotel</span>
                       <span>-</span><span className='text-[12px] text-[#919191]'>jadwal perjalanan</span>
              <span>-</span><span className='text-[12px] text-[#919191]'>preview</span>
                    </h1>
                    <div className="w-full bg-white grid grid-cols-2 gap-6 shadow-[0px_4px_7.7px_5px] px-[30px] py-[27px] shadow-black/25">
                        <div className="ps-[95px] pe-[20px]  pt-[68px]">

                                <h1 className='text-[20px] font-medium ms-3 flex justify-start'>Hotel Terdaftar</h1>
                           <div className="h-[270px] flex-col w-full pr-7 items-center mt-[20px] space-y-3 overflow-y-scroll scroll-khusus">
                         <div className="bg-[#0030EE] transform group shadow-black/25 shadow-[0px_1px_4.5px] rounded-[3px] transition-all duration-1000 ease-in-out origin-left h-[60px] flex w-full hover:w-[365 px]">
                            <img src={hotelExample} alt="hotel picture" className="w-[70px]  transform transition-all duration-1000 ease-in-out rounded-s-[3px] h-[60px]" />
                            <div className="flex-col p-3 w-full">
                            <div className="flex items-center space-x-2">
                                <span className="text-[15px] font-semibold text-white">Hotel Al-habssy fath</span>
                                <span className="text-[#F0E260] text-[11px]">★ ★ ★ ★ ★</span>
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <h1 className="text-[10px] font-medium text-white">200 meter ke masjidil haram</h1>
                                <button
                                onClick={() => pilihHotel("Hotel Al-habssy fath")}
                                className="bg-[#003CB4] px-2 py-[1px] text-white font-medium text-[11px] rounded-full
                                    hover:bg-gradient-to-r hover:from-primary-blue hover:to-[#0030EE]
                                    origin-left active:scale-x-150 active:scale-y-125
                                    transition-transform duration-300 ease-in-out"
                                >
                                Pilih Hotel
                                </button>

                            </div>
                            </div>
                                </div>
                        <div className="bg-[#0030EE] transform group shadow-black/25 shadow-[0px_1px_4.5px] rounded-[3px] transition-all duration-1000 ease-in-out origin-left h-[60px] flex w-full hover:w-[365 px]">
                            <img src={hotelExample} alt="hotel picture" className="w-[70px]  transform transition-all duration-1000 ease-in-out rounded-s-[3px] h-[60px]" />
                            <div className="flex-col p-3 w-full">
                            <div className="flex items-center space-x-2">
                                <span className="text-[15px] font-semibold text-white">Hotel Al-habssy fath</span>
                                <span className="text-[#F0E260] text-[11px]">★ ★ ★ ★ ★</span>
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <h1 className="text-[10px] font-medium text-white">200 meter ke masjidil haram</h1>
                                <button
                                onClick={() => pilihHotel("Hotel Al-habssy fath")}
                                className="bg-[#003CB4] px-2 py-[1px] text-white font-medium text-[11px] rounded-full
                                    hover:bg-gradient-to-r hover:from-primary-blue hover:to-[#0030EE]
                                    origin-left active:scale-x-150 active:scale-y-125
                                    transition-transform duration-300 ease-in-out"
                                >
                                Pilih Hotel
                                </button>

                            </div>
                            </div>
                                </div>
                                  <div className="bg-[#0030EE] transform group shadow-black/25 shadow-[0px_1px_4.5px] rounded-[3px] transition-all duration-1000 ease-in-out origin-left h-[60px] flex w-full hover:w-[365 px]">
                            <img src={hotelExample} alt="hotel picture" className="w-[70px]  transform transition-all duration-1000 ease-in-out rounded-s-[3px] h-[60px]" />
                            <div className="flex-col p-3 w-full">
                            <div className="flex items-center space-x-2">
                                <span className="text-[15px] font-semibold text-white">Hotel Al-habssy fath</span>
                                <span className="text-[#F0E260] text-[11px]">★ ★ ★ ★ ★</span>
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <h1 className="text-[10px] font-medium text-white">200 meter ke masjidil haram</h1>
                                <button
                                onClick={() => pilihHotel("Hotel Al-habssy fath")}
                                className="bg-[#003CB4] px-2 py-[1px] text-white font-medium text-[11px] rounded-full
                                    hover:bg-gradient-to-r hover:from-primary-blue hover:to-[#0030EE]
                                    origin-left active:scale-x-150 active:scale-y-125
                                    transition-transform duration-300 ease-in-out"
                                >
                                Pilih Hotel
                                </button>

                            </div>
                            </div>
                                </div>
                                    <div className="bg-[#0030EE] transform group shadow-black/25 shadow-[0px_1px_4.5px] rounded-[3px] transition-all duration-1000 ease-in-out origin-left h-[60px] flex w-full hover:w-[365 px]">
                            <img src={hotelExample} alt="hotel picture" className="w-[70px]  transform transition-all duration-1000 ease-in-out rounded-s-[3px] h-[60px]" />
                            <div className="flex-col p-3 w-full">
                            <div className="flex items-center space-x-2">
                                <span className="text-[15px] font-semibold text-white">Hotel Al-habssy fath</span>
                                <span className="text-[#F0E260] text-[11px]">★ ★ ★ ★ ★</span>
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <h1 className="text-[10px] font-medium text-white">200 meter ke masjidil haram</h1>
                                <button
                                onClick={() => pilihHotel("Hotel Al-habssy fath")}
                                className="bg-[#003CB4] px-2 py-[1px] text-white font-medium text-[11px] rounded-full
                                    hover:bg-gradient-to-r hover:from-primary-blue hover:to-[#0030EE]
                                    origin-left active:scale-x-150 active:scale-y-125
                                    transition-transform duration-300 ease-in-out"
                                >
                                Pilih Hotel
                                </button>

                            </div>
                            </div>
                                </div>
                        
                                
                                </div>
                        </div>
                        <div className="px-10 py-[68px]">
                            <h1 className="text-[20px] font-medium mb-5">Hotel yang di pilih</h1>
                            <div className="bg-white w-full h-[320px] overflow-y-auto shadow-md p-4 rounded">
                                {dipilih.length === 0 ? (
                                <p className="text-gray-400 text-sm">Belum ada hotel yang dipilih</p>
                                ) : (
                                dipilih.map((nama, i) => (
                                    <div key={i} className="mb-4">
                                    <p className="text-gray-500 text-sm">Hotel {i + 1}</p>
                                    <h2 className="text-black font-semibold text-[15px]">{nama}</h2>
                                    <p className="text-[12px] text-black">200 meter ke masjidil haram</p>
                                    </div>
                                ))
                                )}
                            </div>
                        </div>

                </div>
                               
                            </div>
                                
        </div>
      </DefaultLayout>
  )
}

export default DetailHotel