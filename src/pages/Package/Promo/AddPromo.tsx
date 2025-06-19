import React, { useState } from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import packageIcon from "../../../assets/icons/Vector (3).svg";
// import profileExample from "../../../assets/images/profile_placeholder (1).png";
// import vector from "../../../assets/images/Group (1).png";
import searchIcon from "../../../assets/icons/Search_alt_light.svg";
import { CheckCircle, X } from "lucide-react";
const AddPromo: React.FC = () => {
    const [active, setActive] = useState(false);
     const [showAlert, setShowAlert] = useState(false);

  const handleActivate = () => {
      setShowAlert(true);
      setActive(false);
    setTimeout(() => setShowAlert(false), 2000); // auto-close after 2s
  };

  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={packageIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
          <h1 className="text-primary-blue font-medium">Package</h1>
        </div>
         
         {showAlert && (
                    <div className="fixed w-10/12 bg-[#FFFFFF0A]  h-screen backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="bg-white p-6 rounded-xl flex flex-col items-center gap-3 w-[280px] shadow-xl animate-fade-in">
                        <CheckCircle className="text-green-500 w-12 h-12" />
                        <p className="text-center text-[#031B4E] font-medium text-sm">
                        Promo paket di<br />berhasil aktifkan
                        </p>
                    </div>
                    </div>
                )}
        <div className="w-11/12 grid grid-cols-4 ms-[39px] mt-[30px] h-full items-center">
               
           <div className="relative">
                                <img
                                src={searchIcon}
                                alt="pass icon"
                                width={22}
                                height={22}
                                className="absolute top-1/4 ms-4"
                              />
                                <input name="search" type="text" placeholder='Cari...' className=' ps-[50px] w-9/12  px-[1%]  h-[40px] rounded-full font-semibold placeholder:text-primary-blue border-1 placeholder:text-[15px] placeholder:font-medium border-[#C0C0C0]'/>
                                </div>
             
              <div className="flex space-x-[35px] col-span-2">
                  <h1 className="font-bold text-[15px] text-primary-blue border-b-4 border-primary-blue">Semua</h1>
                  <h1 className="font-medium text-[15px] text-primary-blue">Paket Reguler</h1>
            <h1 className="font-medium text-[15px] text-primary-blue">Paket Plus</h1>
                  </div>
                  <button className="flex justify-center px-4 py-2 w-fit justify-self-end rounded-full text-white text-sm font-medium bg-gradient-to-r from-[#0066b2] to-[#00d2d3]">
                    <span className="flex whitespace-nowrap items-center justify-center w-5 h-5 rounded-full border border-white text-white text-sm me-2">+</span>
                    Paket Baru
                    </button>

              </div>
              
              <div className="w-11/12 ms-[39px] mt-[30px] h-full">
                  {/* table head */}
                 
                  <div className="grid grid-cols-12 bg-white text-[#031B4E] font-bold px-4 py-3 rounded-t-md shadow-[0px_0px_14.4px_2px] shadow-black/25">
                    
                    <div className="text-center">No</div>
                    <div className="col-span-4 text-center">Nama Paket</div>
                    <div className="col-span-2 text-center">Harga Paket</div>
            <div className="text-center col-span-2">Kuota Tersisa</div>
             <div className="col-span-3 text-center"></div>
                   
                </div>

                  {/* table data */}
                  <div className={`items-center bg-white px-4 py-3 mt-3  hover:w-[1180px] shadow-[0px_0px_14.4px_2px] shadow-black/25 rounded-md mb-4 transition-all duration-500 ease-in-out ${active ? "w-[1180px]" : "w-full"}`}>
                      {active && 
                          <div className="w-full relative">
                              <button onClick={()=>setActive(false)} className="absolute bg-[#EF1515] flex items-center justify-center w-[25px] h-[25px] right-0 rounded-full">
                                <X className="w-4 h-4 text-white font-bold"  strokeWidth={3}/>
                                </button>
                              </div>
                            }
                     <div className="grid grid-cols-12 items-center bg-white px-4 pb-5  mt-3 w-full ">
                    
                    <div className="font-bold  text-[#031B4E] text-center">1</div>

                    <div className="flex items-center gap-3 col-span-4">
                    <img
                        src={packageIcon}
                        alt="ikon paket"
                        className="w-10 h-10 object-cover rounded"
                    />
                    <div className="col-span-2">
                        <p className="font-bold text-[#031B4E]">Umroh Paket Plus Amanah</p>
                        <p className="text-sm text-gray-500">Paket Plus</p>
                    </div>
                    </div>

                    <div className="font-semibold col-span-2 text-[#031B4E] text-center">Rp32.000.000</div>
                    <div className="font-semibold col-span-2 text-[#031B4E] text-center">10/20</div>
                    <div className="flex col-span-3 justify-center gap-2">
                   <button
                            onClick={ active ? handleActivate : () => setActive(true)}
                            className="bg-gradient-to-br from-[#003CB4] to-[#3679FE] text-white text-sm font-medium rounded-full px-7 py-1 w-fit
                                        transition duration-300 ease-in-out"
                            >
                            <span className="block transition-transform duration-200 ease-in-out active:scale-90">
                                {active ? "Aktifkan" : "Tambahkan"}
                            </span>
                            </button>

                              </div>
                      </div>
                      {active && 
                        <div className="bg-white border-t-2 w-full pt-[16px]">
                              <div className="grid grid-cols-12 space-x-[35px]">
                                  {/* jangan dihapus sengaja pake div kosong */}
                                    <div className=""></div>
                                    <div className="mb-4 col-span-3">
                                        <label className="block text-[10px] text-primary-blue font-medium mb-2">Nama Promo</label>
                                        <input type="text" className="w-full px-3 py-2 border border-[#D0D0D0] rounded-[20px]"  />
                                    </div>
                                    <div className="mb-4 col-span-3">
                                        <label className="block text-[10px] text-primary-blue font-medium mb-2">Harga Promo</label>
                                        <input type="text" className="w-full px-3 py-2 border border-[#D0D0D0] rounded-[20px]"  />
                                  </div>
                                   <div className="mb-4 col-span-4">
                                        <label className="block text-[10px] text-primary-blue font-medium mb-2">Keterangan</label>
                                        <textarea  className="w-full px-3 py-2 border border-[#D0D0D0] rounded-[20px]" rows={4} />
                                    </div>
                                
                            </div>
                        </div>
                      }
                </div>
            </div>


     </div>
    </DefaultLayout>
  );
};

export default AddPromo;
