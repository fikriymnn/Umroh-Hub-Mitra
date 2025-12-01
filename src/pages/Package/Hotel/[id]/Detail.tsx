import React from 'react'
import DefaultLayout from '../../../../layout/DefaultLayout'
import hotelIcon from '../../../../assets/icons/Component 7 (1).svg'
import hotelExample from '../../../../assets/images/architecture-2587720.png'
import roomIcon from '../../../../assets/icons/mdi_guest-room (2).svg'
import locationIcon from '../../../../assets/icons/Pin_alt (2).svg'
export const Detail = () => {
  return (
      <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={hotelIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
          <h1 className="text-primary-blue font-medium">Hotel</h1>
        </div>
             <div className="w-10/12 mx-auto min-h-screen mt-[72px] flex flex-col space-y-4 ">
                <div className="flex justify-between items-center"> 
                <h1 className="text-[32px] font-medium text-primary-blue">Detail Hotel</h1>
                <p className="text-[#3679FE] font-bold cursor-pointer">Kembali</p>
                </div>
            <img
                src={hotelExample}
                alt="hotel-cover"
                className="w-full h-[205px] object-cover"
            />
            <div className="mt-4">
                <div className="flex space-x-[33px] items-center">      
                    <h2 className="text-[24px] font-semibold">Hotel Al-habssy fath</h2>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            <div className="flex items-center space-x-2 mt-[19px]">
                <img src={locationIcon} alt="location icon" className="w-[16px] h-[16px]" />
                <span className="text-[11px] font-medium">200 meter ke masjidil haram</span>
            </div>
            <div className="flex items-center space-x-2 mt-[6px]">
                <img src={roomIcon} alt="room icon" className="w-[16px] h-[16px]" />
                <span className="text-[11px] font-medium">Satu Kamar 4 Orang (QUAD)</span>
            </div>
            </div>
            <div className="mt-6">
                <h3 className="font-semibold text-[20px] mb-3">Fasilitas hotel</h3>
                <div className="flex space-x-10">
                <div className='ms-[13px]'>
                    <p className="mb-2 text-primary-blue text-[15px] font-semibold">Fasilitas umum</p>
                    <ul className="list-disc font-medium ml-[30px] mt-[13px] text-primary-blue space-y-1 text-[15px]">
                    <li>Halal Restaurant</li>
                    <li>Kolam Renang</li>
                    <li>Taman Anak anak</li>
                    <li>Aula</li>
                    </ul>
                </div>
                <div className='ms-[13px]'>
                    <p className="mb-2 text-primary-blue text-[15px] font-semibold">Fasilitas kamar</p>
                    <ul className="list-disc font-medium ml-[30px] mt-[13px] text-primary-blue space-y-1 text-[15px]">
                    <li>Halal Restaurant</li>
                    <li>Kolam Renang</li>
                    <li>Taman Anak anak</li>
                    <li>Aula</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
                <img src={hotelExample} alt="" className="w-full h-[160px] object-cover" />
                <img src={hotelExample} alt="" className="w-full h-[160px] object-cover" />
                <img src={hotelExample} alt="" className="w-full h-[160px] object-cover" />
            </div>
            </div>

          </div>
          </DefaultLayout>
  )
}
