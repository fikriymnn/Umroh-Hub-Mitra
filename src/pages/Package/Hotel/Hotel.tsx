import React from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import hotelIcon from '../../../assets/icons/Component 7 (1).svg'
import hotelExample from '../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png'
import roomIcon from '../../../assets/icons/mdi_guest-room (1).svg'
import locationIcon from '../../../assets/icons/Pin_alt (1).svg'
import { useNavigate } from 'react-router'
import useHotels from '../../../hooks/hotel/useHotels'
import { renderStarsHotels } from '../../../utils/renderStarts'
function PackageHotel() {
  const {
    hotels, setHotels,
    handleAddHotel
  } = useHotels();

  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={hotelIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
          <h1 className="text-primary-blue font-medium">Hotel</h1>
        </div>
        <div className="w-10/12 mx-auto min-h-screen mt-[72px] flex flex-col space-y-4 ">
          <h1 className='text-[20px] font-medium ms-3 flex justify-start'>Hotel Terdaftar</h1>
          <div className="flex-col w-full items-center mt-[48px] space-y-3">
            {hotels?.map((hotel) => (
              <div className="bg-[linear-gradient(to_right,_#0030EE_80%,_#001B88_100%)] transform group shadow-black/25 shadow-[0px_1px_4.5px] rounded-[3px] transition-all duration-1000 ease-in-out origin-left hover:text-white
                  hover:bg-[linear-gradient(to_bottom_right,_#0030EE_10%,_#001B88_70%)] h-[130px] flex w-full hover:w-[1060px]">
                <img src={hotelExample} alt="hotel picture" className="w-[210px] group-hover:w-[220px] transform transition-all duration-1000 ease-in-out rounded-s-[3px] h-[130px]" />
                <div className="flex-col p-3 w-full">
                  <div className="flex items-center space-x-8">
                    <span className="text-[24px] font-semibold text-white">{hotel?.hotel_name}</span>
                    {renderStarsHotels(parseInt(hotel?.hotel_type || '0'))}
                  </div>
                  <div className="flex items-center space-x-2 mt-[19px]">
                    <img src={locationIcon} alt="location icon" className="w-[16px] h-[16px]" />
                    <span className="text-[11px] font-medium text-white">{hotel?.description}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-[6px]">
                    <img src={roomIcon} alt="room icon" className="w-[16px] h-[16px]" />
                    <span className="text-[11px] font-medium text-white">{hotel.room_type}</span>
                  </div>
                  <h1 className="text-[15px] flex w-full justify-end font-bold text-white">Lihat Detail</h1>
                </div>
              </div>
            ))}

            <div className="flex w-full justify-center">
              <button onClick={handleAddHotel} className='group active:w-1/3 w-full origin-center transform transition-all duration-500 ease-in-out border-3 rounded-[20px] border-[#5CE9FF] bg-gradient-to-br from-white to-white hover:from-[#3C97FF] hover:to-[#10F5EA] pb-4 flex justify-center items-center py-3 hover:text-white text-[#0CC3BA]'>
                <span className="flex whitespace-nowrap items-center w-[33px] h-[33px] rounded-full border-[3px] border-[#08CFC5] group-hover:border-white justify-center text-2xl font-bold me-2">+</span>
                Tambah Hotel
              </button>
            </div>
          </div>

        </div>

      </div>

    </DefaultLayout>
  )
}

export default PackageHotel