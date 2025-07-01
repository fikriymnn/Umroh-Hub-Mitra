/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react'
import packageIcon from "../../../assets/icons/Vector (3).svg";
import DefaultLayout from '../../../layout/DefaultLayout';
import Slider from 'react-slick'
import hotelIcon from "../../../assets/icons/Component 1.svg"
import wifiIcon from "../../../assets/icons/ic_baseline-wifi.svg"
import hotelIcons from "../../../assets/icons/Group.svg"
import disabilityIcon from '../../../assets/icons/streamline_travel-wayfinder-disability-person-access-wheelchair-accomodation-human-disability-disabled-user.svg'
import spoonIcon from "../../../assets/icons/ic_round-restaurant.svg"
import roomServiceIcon from '../../../assets/icons/ic_baseline-meeting-room.svg'
import locationIcon from "../../../assets/icons/Pin_alt.svg"
import exampleImage from "../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png"
import planeIcon from '../../../assets/icons/bxs_plane.svg'
import scheduleImage from "../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png"
import examplePlane from '../../../assets/images/image 3.png'
import bedIcons from '../../../assets/icons/mdi_guest-room.svg'
import departureLocIcon from '../../../assets/icons/mingcute_location-fill.svg'
import dateIcon from '../../../assets/icons/clarity_date-solid.svg'
import durationIcon from '../../../assets/icons/mdi_calendar-time.svg'
import TravelSchedule from '../../../components/TravelSchedule';
import { Package } from '../../../types/Package'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usePreviewPackage from '../../../hooks/package/usePreviewPackage';

function PreviewPackage() {
    const {
        packages, setPackages,
        handleSubmit
    } = usePreviewPackage();



    const [currentPage, setCurrentPage] = useState(1);
    const itemPages = 4;



    const schedule = packages?.schedules?.flatMap((schedule: any) =>
        schedule.details.map((activity: any) => ({
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

    const images = [
        exampleImage,
        exampleImage,
        exampleImage
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const sliderRef = useRef<any>(null);

    const formatHarga = (itung: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(itung);
    };

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
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
                        <span>-</span><span className='text-[12px] text-[#0A6BDB]'>Hotel</span>
                        <span>-</span><span className='text-[12px] text-[#0A6BDB]'>jadwal perjalanan</span>
                        <span>-</span><span className='text-[20px] text-primary-blue'>preview</span>
                    </h1>
                    {packages && (
                        <div className="w-full bg-white flex flex-col space-y-5  shadow-[0px_4px_7.7px_5px] px-[30px] py-[27px] shadow-black/25">
                            {/* {packages && (

                <div className='w-full pt-[200px] min-h-screen background-div flex flex-col space-y-[25px] items-center justify-center'> */}

                            <div className="grid grid-cols-5 gap-5 w-full mx-auto ">
                                {/* Kartu Kiri */}
                                <div className="bg-white w-full col-span-2 h-[600px] rounded-[5px]  shadow-[0px_4px_17px] shadow-black/25 overflow-hidden">
                                    <div className="relative rounded-t-[5px] overflow-hidden">
                                        <Slider {...settings} ref={sliderRef}>
                                            {images.map((src, index) => (
                                                <div key={index} className="h-[220px]">
                                                    <img
                                                        src={src}
                                                        alt={`slide-${index}`}
                                                        className="w-full h-[220px] object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                        <button
                                            className="absolute left-16 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 w-[24px] h-[24px] text-white font-bold items-center justify-center flex p-2 rounded-full"
                                            onClick={previous}
                                        >
                                            &lt;

                                        </button>
                                        <button
                                            className="absolute right-16 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 w-[24px] h-[24px] text-white font-bold items-center justify-center flex p-2 rounded-full"
                                            onClick={next}
                                        >
                                            &gt;

                                        </button>

                                        {/* Overlay dan teks */}
                                        <div className="absolute bottom-2 left-0 w-full h-[50px] bg-black/50 flex items-center px-8">
                                            <p className="text-white text-[15px] font-semibold">
                                                Paket <span className="text-[#10F5EA] ms-4 text-[20px]">{packages?.id_type_departure}</span>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="px-8 py-4 space-y-[2px]">
                                        <p className="text-[15px] font-medium">Harga</p>
                                        <h2 className="text-[36px] font-bold bg-gradient-to-r from-[#3C97FF] to-[#245B99] bg-clip-text text-transparent">
                                            {formatHarga(Number(packages?.price))}
                                        </h2>

                                        <p className="text-[15px] font-medium">Mitra</p>
                                        <div className="flex items-center space-x-4">
                                            <span className="text-[24px] font-medium">Syifa Umroh</span>
                                            <span className='text-yellow-300 text-[18px]'>★ ★ ★ ★ ★</span>
                                        </div>
                                        <div className="flex flex-col justify-center space-y-1">
                                            <h1 className="text-[24px] font-medium">{packages?.package_name}</h1>
                                            <p className='text-sm'>{packages?.description}</p>
                                        </div>
                                        <p className="text-[15px] font-medium mt-2">Nomor Izin Umroh</p>
                                        <p className="text-[20px] font-medium">154527263529</p>
                                        <div className="mt-4 w-10/12 h-[14px]">
                                            <div className="w-full bg-gray-200 rounded-full h-full">
                                                <div
                                                    className="bg-gradient-to-r from-[#004492] to-[#10F5EA] h-full rounded-full w-8/12"

                                                ></div>
                                            </div>
                                            <p className="text-[12px] mt-1 font-semibold">Pesanan: {packages?.quota}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Kartu Kanan */}
                                <div className="col-span-3 flex flex-col space-y-5">
                                    <div className="bg-white w-full h-[600px] rounded-[5px] py-4 px-[50px] space-y-4  shadow-[0px_4px_17px] shadow-black/25">
                                        <h2 className="font-semibold text-[24px] ms-3">Fasilitas Umroh</h2>
                                        <div className="grid grid-cols-2 gapx-8 py-4 text-sm">
                                            <ul className="list-disc list-inside text-[15px] font-medium space-y-2">
                                                {packages?.facilities?.map((facility, i) => (
                                                    <li key={i}>{facility.description}</li>
                                                ))}
                                            </ul>
                                            <ul className="list-disc list-inside text-[15px] font-medium space-y-2">
                                                <li>lorem ipsum dolor sit amet</li>
                                                <li>lorem ipsum dolor sit amet</li>
                                                <li>lorem ipsum dolor sit amet</li>
                                                <li>lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>

                                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 py-4 pt-4 text-sm border-t">
                                            <div>
                                                <div className="flex space-x-2 h-[16px] items-center">
                                                    <img src={bedIcons} alt='Hotels' className='w-[14px] h-[14px]' />
                                                    <p className="font-bold text-[15px]">Pilihan Kamar</p>
                                                </div>
                                                <p className='font-medium text-[13px] ms-6 mt-3'>
                                                    {packages?.hotel?.[0]?.room_type}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="flex space-x-2 h-[16px] items-center">
                                                    <img src={hotelIcons} alt='Hotels' className='w-[14px] h-[14px]' />
                                                    <p className="font-bold text-[15px]">Hotel</p>
                                                </div>
                                                <div className="flex space-x-1 ms-4 mt-3">
                                                    <div className="h-[16px] flex items-center">
                                                        <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                                                    </div>
                                                    <div className='flex-col w-full'>
                                                        <h6 className='text-[12px] font-semibold'>
                                                            {packages?.hotel?.[0]?.hotel_name}
                                                            <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> Double Room
                                                        </h6>

                                                        <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>{packages?.hotel?.[0]?.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex space-x-2 h-[16px] items-center">
                                                    <img src={durationIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                                    <p className="font-bold text-[15px]">Duration Perjalanan</p>
                                                </div>
                                                <p className='font-medium text-[13px] ms-6 mt-1'>{packages?.duration} Hari</p>
                                            </div>
                                            <div className="flex space-x-1 ms-4">
                                                <div className="h-[16px] flex items-center">
                                                    <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                                                </div>
                                                <div className='flex-col w-full'>

                                                    <h6 className='text-[12px] font-semibold'>
                                                        {packages?.hotel?.[1]?.hotel_name}
                                                        <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> Double Room
                                                    </h6>

                                                    <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>{packages?.hotel?.[1]?.description}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex space-x-2 h-[16px] items-center">
                                                    <img src={dateIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                                    <p className="font-bold text-[15px]">Tanggal Keberangkatan</p>
                                                </div>
                                                <p className='font-medium text-[13px] ms-6 mt-1'>
                                                    {packages?.date_departure
                                                        ? new Date(packages.date_departure).toLocaleDateString('id-ID', {
                                                            day: '2-digit',
                                                            month: 'long',
                                                            year: 'numeric'
                                                        })
                                                        : '-'}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="h-[16px] flex items-center space-x-2">
                                                    <img src={planeIcon} alt="icon" className='w-[14px] h-[14px]' />
                                                    <p className="font-semibold">Maskapai</p>
                                                </div>
                                                <p className='font-medium text-[13px] ms-6 mt-1'>{packages?.airline}</p>

                                            </div>
                                            <div>
                                                <div className="flex space-x-2 h-[16px] items-center">
                                                    <img src={departureLocIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                                    <p className="font-bold text-[15px]">Kota Keberangkatan</p>
                                                </div>
                                                <p className='font-medium text-[13px] ms-6 mt-1'>{packages?.id_location_departure}</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <img src={examplePlane} alt="AirAsia" className="w-[34px] h-[34px] " />
                                                <span className='font-semibold'>Air Asia Airlines</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                            {/* hotel dan Fasilitasnya */}
                            <div className="w-full h-[600px] p-[40px] shadow-[0px_4px_17px] shadow-black/25 rounded-[5px] bg-white">
                                <h1 className='text-[24px] font-medium'>Hotel dan Fasilitasnya</h1>
                                <div className=" h-full grid grid-cols-2 w-11/12 mt-[50px]">
                                    {packages?.hotel?.map((item, index) => (
                                        <div key={index} className='flex flex-col space-y-2 w-full my-2 items-center'>

                                            <div className="w-full flex space-x-3.5">

                                                <img src={hotelIcon} alt="icon" className='w-[30px] h-[30px]' />
                                                <div className='flex-col w-full'>
                                                    <h6 className='text-[12px] font-semibold'>
                                                        {item?.hotel_name}
                                                        <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> Double Room
                                                    </h6>
                                                    <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>{item.description}</p>
                                                </div>
                                            </div>
                                            <div className="w-full flex flex-col ms-[80px] space-y-3.5 items-start ">

                                                <div className="bg-[#D9D9D9] h-[160px] flex justify-start w-8/12">

                                                </div>
                                                <div className="flex space-x-5 w-7/12">

                                                    <img src={locationIcon} alt="icon" className='w-[18px] h-[18px]' />
                                                    <p className="text-[15px] font-medium">
                                                        {item?.address}
                                                    </p>
                                                </div>
                                                <div className="flex w-8/12 mt-4 space-x-2">
                                                    <div className="flex h-[20px] items-center space-x-5 w-7/12">
                                                        <img src={wifiIcon} alt="icon" className='w-[18px] h-[18px]' />
                                                        <p className="text-[15px] capitalize font-medium">
                                                            {item?.hotel_facilities?.[0]?.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex space-x-5 w-7/12">

                                                        <img src={spoonIcon} alt="icon" className='w-[18px] h-[18px]' />
                                                        <p className="text-[15px] capitalize font-medium">
                                                            tempat Makan
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex h-[20px] mt-4 items-center w-8/12 space-x-2">
                                                    <div className="flex h-[20px] items-center space-x-5 w-7/12">
                                                        <img src={disabilityIcon} alt="icon" className='w-[18px] h-[18px]' />
                                                        <p className="text-[15px] capitalize font-medium">
                                                            Disabilitas
                                                        </p>
                                                    </div>
                                                    <div className="flex space-x-3 w-7/12">

                                                        <img src={roomServiceIcon} alt="icon" className='w-[25px] h-[25px]' />
                                                        <p className="text-[15px] whitespace-nowrap capitalize font-medium">
                                                            Pelayanan Kamar
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* jadwal */}
                            <div className="bg-white  shadow-[0px_4px_17px] shadow-black/25 w-full p-[40px] rounded-[5px]">
                                <div>
                                    <h1 className='text-[24px] font-medium capitalize mb-10'>Jadwal perjalanan</h1>
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


                            {/* </div>
            )} */}
                            <div className="w-full mt-6 flex justify-end gap-4">
                                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#004492] to-[#00152C] text-white">Kembali</button>
                                <button
                                    onClick={handleSubmit}
                                    className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white"
                                >
                                    Simpan Dan Lanjut
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </DefaultLayout>
    )
}

export default PreviewPackage