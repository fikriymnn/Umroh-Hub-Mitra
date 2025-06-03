import React from 'react'
import { Link, useLocation } from 'react-router'
import homeIcon from '../assets/icons/Home.svg'
import homeIcon2 from '../assets/icons/Home (1).svg'
import detailIcon from '../assets/icons/Vector (1).svg'
import detailIcon2 from '../assets/icons/Vector (2).svg'
import packageIcon from '../assets/icons/Vector (3).svg'
import packageIcon2 from '../assets/icons/Vector (4).svg'
import orderIcon from '../assets/icons/Vector (5).svg'
import orderIcon2 from '../assets/icons/Vector (6).svg'
function Sidebar() {
     const location = useLocation();
    const currentPath = location.pathname;

  return (
      <div className='w-[275px] fixed h-screen'>
          <nav className="relative w-full h-screen background-div py-[17px] px-[30px]">
                {/* Content Layer */}
               
                    <h1 className="text-[24px] text-center font-philosopher font-normal text-white">
                    Umroh<span className="font-bold">Hub</span>
                  </h1>
                  
                  <h1 className="text-[15px] absolute right-1/3 font-normal text-white">
                   Mitra
                    </h1>
              <div className="flex-flex-col space-y-[38px]">
                  
                <Link to="/home" className={`flex w-full items-center mt-[88px] p-4 space-x-[15px] ${currentPath === "/home" ? "bg-white" : ""}`}>
                    <img src={currentPath === "/home" ? homeIcon: homeIcon2} alt="profile" className="w-[24px] h-[24px]" />
                    <h1 className={`font-medium text-left text-[20px] flex items-self-center ${currentPath === "/home" ? "text-primary-blue" : "text-white"}`}>Dashboard</h1>
                </Link>
                <Link to="/AccountDetail" className="flex w-8/12 items-center space-x-[15px]">
                    <img src={currentPath === "/AccountDetail" ? detailIcon : detailIcon2} alt="profile" className="w-[20px] h-[20px]" />
                    <h1 className={`font-medium text-left text-[20px] text-white flex items-self-center ${currentPath === "/AccountDetail" ? "text-[#0A6BDB]" : ""}`}>Detail Akun</h1>
              </Link>
              <Link to="/Package" className="flex w-8/12 items-center space-x-[15px]">
                    <img src={currentPath === "/Package" ? packageIcon : packageIcon2} alt="profile" className="w-[20px] h-[20px]" />
                    <h1 className={`font-medium text-left text-[20px] text-white flex items-self-center ${currentPath === "/Package" ? "text-[#0A6BDB]" : ""}`}>Paket</h1>
              </Link>
              <Link to="/Order" className="flex w-8/12 items-center space-x-[15px]">
                    <img src={currentPath === "/Order" ? orderIcon : orderIcon2} alt="profile" className="w-[20px] h-[20px]" />
                    <h1 className={`font-medium text-left text-[20px] text-white flex items-self-center ${currentPath === "/Order" ? "text-[#0A6BDB]" : ""}`}>Order</h1>
                </Link>
              </div>
          </nav>
    </div>
  )
}

export default Sidebar