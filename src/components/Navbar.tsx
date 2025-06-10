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
          <nav className="relative w-full h-screen background-div py-[17px]">
                {/* Content Layer */}
               
                    <h1 className="text-[24px] text-center font-philosopher font-normal text-white">
                    Umroh<span className="font-bold">Hub</span>
                  </h1>
                  
                  <h1 className="text-[15px] absolute right-1/3 font-normal text-white">
                   Mitra
                    </h1>
              <div className="flex-flex-col space-y-[18px] mt-[88px]">
                  
                <Link
                  to="/home"
                  className={`flex items-center w-full p-4 space-x-[15px] 
                  ${currentPath === "/home" ? "bg-white text-primary-blue rounded-l-[30px]" : "text-white"}
                `}
                >
                  <img
                    src={currentPath === "/home" ? homeIcon : homeIcon2}
                    alt="home"
                    className="w-[24px]  ms-[30px] h-[24px]"
                  />
                  <h1
                    className={`font-medium  text-left text-[20px] flex items-self-center 
                     `}
                  >
                    Dashboard
            </h1>
              {/* Bulatan di kanan */}
                {currentPath === "/home" && (
                  <div className="ml-auto w-[8px] h-[8px] rounded-full bg-primary-blue" />
                )}
                </Link>

               <Link
                to="/AccountDetail"
                className={`flex items-center w-full p-4 space-x-[15px] 
                  ${currentPath === "/AccountDetail" ? "bg-white text-primary-blue rounded-l-[30px]" : "text-white"}
                `}
              >
                <img
                  src={currentPath === "/AccountDetail" ? detailIcon : detailIcon2}
                  alt="profile"
                  className="w-[20px] h-[20px] ms-[30px]"
                />
                <h1 className="font-medium text-left text-[20px]">
                  Profile
                </h1>

                {/* Bulatan di kanan */}
                {currentPath === "/AccountDetail" && (
                  <div className="ml-auto w-[8px] h-[8px] rounded-full bg-primary-blue" />
                )}
              </Link>

              <Link to="/Package"  className={`flex items-center w-full p-4 space-x-[15px] 
                  ${currentPath === "/Package" ? "bg-white text-primary-blue rounded-l-[30px]" : "text-white"}
                `}>
                    <img src={currentPath === "/Package" ? packageIcon : packageIcon2} alt="profile" className="w-[20px] h-[20px] ms-[30px]" />
                    <h1 className={`font-medium text-left text-[20px]  flex items-self-center`}>Paket</h1>
                {currentPath === "/Package" && (
                  <div className="ml-auto w-[8px] h-[8px] rounded-full bg-primary-blue" />
                )}
              </Link>
              <Link to="/Order"  className={`flex items-center w-full p-4 space-x-[15px] 
                  ${currentPath === "/Order" ? "bg-white text-primary-blue rounded-l-[30px]" : "text-white"}
                `}>
                    <img src={currentPath === "/Order" ? orderIcon : orderIcon2} alt="profile" className="w-[20px] h-[20px] ms-[30px]" />
            <h1 className={`font-medium text-left text-[20px] text-white flex items-self-center`}>Order</h1>
              {/* Bulatan di kanan */}
                {currentPath === "/Order" && (
                  <div className="ml-auto w-[8px] h-[8px] rounded-full bg-primary-blue" />
                )}
                </Link>
              </div>
          </nav>
    </div>
  )
}

export default Sidebar