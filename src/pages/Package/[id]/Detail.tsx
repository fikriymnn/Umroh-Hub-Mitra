/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import detailPackagesIcon from "../../../assets/icons/Vector (3).svg";
import packageExample from "../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png";
// import vector from "../../assets/images/Group (1).png";
import scheduleImage from "../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png";
import { Package } from "../../../types/Package";
import TravelSchedule from "../../../components/TravelSchedule";
import locationIcon from "../../../assets/icons/Pin_alt.svg"
const DetailPackages: React.FC = () => {
    const [packages] = useState<Package>({
  id: 1,
  id_mitra: 1,
  id_location_departure: 1,
  id_category_departure: 1,
  package_name: "Paket Umroh Premium",
  description: "Paket umroh lengkap dengan city tour di Madinah dan Makkah",
  date_departure: "2025-09-15",
  airline: "Garuda Indonesia",
  duration: 12,
  quota: 40,
  quota_update: 40,
  price: 28500000,
  is_active: true,
  id_type_departure: 1,
  createdAt: "2025-01-01T00:00:00.000Z",
  updatedAt: "2025-01-01T00:00:00.000Z",

  Mitra: {
    id: 1,
    name: "Agen Travel",
    email: "info@agen.com",
    password: "hashed_password",
    phone_number: "08123456789",
    address: "Jl. Kemang Raya No.10",
    compamy_name: "PT Amanah Travel",
    website: "https://amanahtravel.co.id",
    nib: "1234567890",
    npwp: "09.123.456.7-891.000",
    siup: "SIUP123456",
    siuppiu: "SIUPPIU456789",
    akta: "AKTA987654",
    image_url: "https://via.placeholder.com/150",
    is_active: true,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  master_location_departure: {
    id: 1,
    location_name: "Jakarta",
    is_active: true,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  master_type_departure: {
    id: 1,
    type_name: "Reguler",
    is_active: true,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  master_category_departure: {
    id: 1,
    category_name: "Plus City Tour",
    is_active: true,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  package_hotels: [
    {
      id: 1,
      id_package: 1,
      id_hotel: 1,
      description: "Hotel dekat Masjidil Haram",
      is_active: true,
      createdAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-01T00:00:00.000Z",
      master_hotel: {
          id: 1,
          id_mitra: 1,
          is_active: true,
          hotel_name: "Makkah Tower",
          hotel_type: "Bintang 5",
          address: "Jalan King Abdul Aziz, Makkah",
          room_type: "Double",
          createdAt: "2025-01-01T00:00:00.000Z",
          updatedAt: "2025-01-01T00:00:00.000Z",
          hotel_facilities: [
              {
                  id: 1,
                  id_hotel: 1,
                  description: "WiFi Gratis",
                  is_active: true,
                  createdAt: "2025-01-01T00:00:00.000Z",
                  updatedAt: "2025-01-01T00:00:00.000Z"
              }
          ],
          description: ""
      }
    }
  ],

  package_facilities: [
    {
      id: 1,
      id_package: 1,
      description: "Visa Umroh",
      is_active: true,
      createdAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: 2,
      id_package: 1,
      description: "Tiket PP",
      is_active: true,
      createdAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-01T00:00:00.000Z"
    }
  ],

  package_schedules: [
    {
      id: 1,
      id_package: 1,
      title: "Hari 1",
      is_active: true,
      image_url: scheduleImage,
      createdAt: "2025-01-01T00:00:00.000Z",
      updatedAt: "2025-01-01T00:00:00.000Z",
      detail_activities: [
        {
          id: 1,
          id_schedule: 1,
          note: "Berkumpul di bandara Soekarno-Hatta",
          activity: "Check-in dan briefing",
          time: "06:00",
          is_active: true,
          createdAt: "2025-01-01T00:00:00.000Z",
          updatedAt: "2025-01-01T00:00:00.000Z"
        }
      ]
    }
  ]
});



    const [currentPage, setCurrentPage] = useState(1);
    const itemPages = 4;



    const schedule = packages?.package_schedules?.flatMap((schedule: any) =>
        schedule.detail_activities.map((activity: any) => ({
            hari: schedule.title,
            image: schedule.image_url,
            aktivitas: activity.activity,
            catatan: activity.note,
            waktu: activity.time,
        }))
    ) || [];

    const totalPages = Math.ceil((schedule?.length || 0) / itemPages);
    const startIndex = (currentPage - 1) * itemPages
    const currentItems = schedule.slice(startIndex, startIndex + itemPages)

  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={detailPackagesIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
          <h1 className="text-primary-blue font-medium">Package</h1>
        </div>
        <div className="w-11/12 bg-white shadow-[0px_4px_19.5px] shadow-black/25 px-[55px] py-[29px] ms-[39px] mt-[30px] h-full items-center">
        <h1 className="text-primary-blue text-[24px] font-medium">Detail Package</h1>
        <div className="grid grid-cols-4 mt-[37px]">
            
            <div className="">
                <img src={packageExample} alt="package image" className="w-[207px] h-[207px]" />
            </div>
            <div className="col-span-3 flex flex-col">
                <h1 className="text-[20px] font-medium text-[#3B3B3B]">
                    Umroh Paket Plus Amanah
                </h1>
                <h1 className="text-[24px] font-medium text-[#3679FE]">
                    Rp. 32.000.000
                </h1>
                <div className="grid grid-cols-2 w-8/12">
                    <div className="flex flex-col">
                        
                        <h1 className="text-[20px] mt-2 font-medium text-[#3B3B3B]">
                            Kuota
                        </h1>
                        <h1 className="text-[24px] font-medium text-[#3B3B3B]">
                            10/12
                                </h1>
                                  <h1 className="text-[20px] mt-2 font-medium text-[#3B3B3B]">
                  Kategori Paket
                </h1>
                <h1 className="text-[20px] font-medium text-[#3679FE]">
                    Plus
                  </h1>
                  <button className="bg-gradient-to-r rounded-full mt-2 from-[#003CB4] to-[#3679FE] text-[15px] font-medium text-white py-1 px-4 w-fit">
                    Jemaah Terdaftar
                </button>
                              </div>
                    <div className="flex flex-col">
                        
                        <h1 className="text-[20px] mt-2 font-medium text-[#3B3B3B]">
                            Durasi Perjalanan
                        </h1>
                        <h1 className="text-[24px] font-medium text-[#3B3B3B]">
                            10 Hari
                                </h1>
                                  <h1 className="text-[20px] mt-2 font-medium text-[#3B3B3B]">
                                    Waktu Keberangkatan
                                    </h1>
                            <h1 className="text-[20px] font-medium text-[#3B3B3B]">
                                23/10/2025 - 03/11/2025
                            </h1>
                              </div>
                </div>
              
            </div>
        </div>
        <div className="text-primary-blue text-[20px] mt-[50px]">
            <h2 className="font-semibold mb-2">Fasilitas</h2>
            <ul className="list-disc ms-5 space-y-1 capitalize font-medium">
                <li>Penerbangan</li>
                <li>Penginapan (Hotel)</li>
                <li>
                Konsumsi
                <ul className=" ms-6 mt-1">
                    <li>- makan 3x sehari</li>
                    <li>- makanan ringan</li>
                </ul>
                </li>
                <li>Visa Umroh</li>
                <li>
                Pransportasi darat
                <ul className=" ms-6 mt-1">
                    <li>- Minibus Muatan 8 orang</li>
                </ul>
                </li>
                <li>
                Perlengkapan Ibadah
                <ul className=" ms-6 mt-1">
                    <li>- Kain Ihram/Mukenaa</li>
                    <li>- Tas</li>
                    <li>- sandal</li>
                </ul>
                </li>
                <li className="mt-4">Muthawwif</li>
            </ul>
            </div>
        <div className="w-full mt-[80px] space-y-6 text-primary-blue text-[20px]">
     <h2 className="font-semibold mb-[28px] text-[20px] text-primary-blue">Fasilitas Hotel</h2>
      {/* Hotel 1 */}
      <div>
        <h2 className="font-medium text-[20px] ms-8">Hotel 1</h2>
        <div className="mt-1 px-[31px] py-4 border border-[#BABABA] rounded-[20px] bg-white flex flex-col space-y-2">
          <div className="flex justify-between items-center flex-wrap">
            <div className="font-bold text-black text-[24px]">Hotel Al-habssy fath <span className="text-[#F0E260] ms-[29px]">★★★★★</span></div>
            <div className="flex items-center space-x-2 ">
              
              <div className="flex items-center space-x-1">
                <img src={locationIcon} alt="icon located" className="w-[16px] h-[16px]" />
                <span className="text-[11px]">200 meter ke <b>masjidil haram</b></span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 font-medium text-[16px] gap-4 mt-2 text-black">
            <div>
              <h3 className="font-semibold ">Fasilitas Umum</h3>
              <ul className="list-disc ms-7 mt-[19px] space-y-[2px]">
                <li>Halal Restoran/Tempat makan</li>
                <li>Mushola</li>
                <li>Kolam renang</li>
                <li>Aula</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold ">Fasilitas Kamar</h3>
              <ul className="list-disc ms-8 space-y-[2px] mt-[19px]">
                <li>Quad room</li>
                <li>Toilet</li>
                <li>Free Wifi</li>
                <li>AC</li>
                <li>Lemari Penyimpanan</li>
                <li>Pelayanan Kamar 24 jam</li>
                <li>Air Mineral</li>
              </ul>
            </div>
          </div>
          
           

        </div>
      </div>

      {/* Hotel 2 */}
      <div>
        <h2 className="font-medium text-[20px] ms-8">Hotel 2</h2>
        <div className="mt-1 px-[31px] py-4 border border-[#BABABA] rounded-[20px] bg-white flex flex-col space-y-2">
          <div className="flex justify-between items-center flex-wrap">
            <div className="font-bold text-black text-[24px]">Hotel Al-habssy fath <span className="text-[#F0E260] ms-[29px]">★★★★★</span></div>
            <div className="flex items-center space-x-2 ">
              
              <div className="flex items-center space-x-1">
                <img src={locationIcon} alt="icon located" className="w-[16px] h-[16px]" />
                <span className="text-[11px]">200 meter ke <b>masjidil haram</b></span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 font-medium text-[16px] gap-4 mt-2 text-black">
            <div>
              <h3 className="font-semibold ">Fasilitas Umum</h3>
              <ul className="list-disc ms-7 mt-[19px] space-y-[2px]">
                <li>Halal Restoran/Tempat makan</li>
                <li>Mushola</li>
                <li>Kolam renang</li>
                <li>Aula</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold ">Fasilitas Kamar</h3>
              <ul className="list-disc ms-8 space-y-[2px] mt-[19px]">
                <li>Quad room</li>
                <li>Toilet</li>
                <li>Free Wifi</li>
                <li>AC</li>
                <li>Lemari Penyimpanan</li>
                <li>Pelayanan Kamar 24 jam</li>
                <li>Air Mineral</li>
              </ul>
            </div>
          </div>
          
           

        </div>
      </div>

                  </div>
                  
                   <div className="mt-[55px]">
                        <div>
                        <h1
                        className="text-[20px] font-bold capitalize mb-10 text-primary-blue"
                        style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.25)" }}
                        >
                        Jadwal perjalanan
                        </h1>

                            {currentItems.map((item: any, index: number) => (
                                <TravelSchedule
                                    key={index}
                                    scheduleList={item}
                                />
                            ))}
                        </div>
                        <div className='flex justify-center mt-10 space-x-4 text-white'>
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className='px-3 py-1 bg-black'
                            >
                                &lt;
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-gradient-to-b from-[#109FF5] to-[#0A5D8F] text-white font-bold rounded-2xl' : 'bg-black text-white font-bold rounded-2xl'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className='px-3 py-1 bg-black'
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
          </div>


     </div>
    </DefaultLayout>
  );
};

export default DetailPackages;
