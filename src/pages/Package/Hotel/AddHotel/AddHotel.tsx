import React, { useState } from 'react'
import hotelIcon from "../../../../assets/icons/Component 7 (1).svg";
import DefaultLayout from '../../../../layout/DefaultLayout';

function AddHotel() {
    const [previewImages, setPreviewImages] = useState<string[]>([]);

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (files) {
    const photoMultiple = Array.from(files).slice(0, 5); // Maksimal 5
    const previewPict = photoMultiple.map((file) => URL.createObjectURL(file));
    setPreviewImages(previewPict);
  }
};

     const [fasilitasUmum, setFasilitasUmum] = useState<string[]>([]);
  const [fasilitasKamar, setFasilitasKamar] = useState<string[]>([]);
  const [inputUmum, setInputUmum] = useState("");
  const [inputKamar, setInputKamar] = useState("");

  const addFasilitasUmum = () => {
    if (inputUmum.trim()) {
      setFasilitasUmum([...fasilitasUmum, inputUmum.trim()]);
      setInputUmum("");
    }
  };

  const addFasilitasKamar = () => {
    if (inputKamar.trim()) {
      setFasilitasKamar([...fasilitasKamar, inputKamar.trim()]);
      setInputKamar("");
    }
  };

    return (
      <DefaultLayout>
            
        <div className="w-full min-h-screen pb-16">
            <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
            <img src={hotelIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
            <h1 className="text-primary-blue font-medium">Hotel</h1>
            </div>
                      <div className="p-6 ms-[28px]">
                  
                    <div className="w-full flex flex-col">
                        <div className="">      
                        <div className="flex space-x-4">
                           

                            <div className="w-full pe-[30px]">
                                    <div className="grid w-full grid-cols-6 gap-5">

                            <div className="col-span-4 bg-white shadow-[-1px_1px_10.9px] p-6 rounded shadow-black/25">
                            <div className="w-full grid grid-cols-3 gap-4">
                                <div className="col-span-2  flex flex-col space-y-3.5 text-[14px] font-medium text-primary-blue">
                                    <div className="flex flex-col space-y-[6px]">
                                        <label htmlFor="Hotel Name" className='ms-5'>Nama Hotel</label>
                                          <input name="Hotel Name" type="text" className=' w-9/12  p-2  h-[40px] rounded-[20px] font-semibold placeholder:text-primary-blue border-1 placeholder:text-[15px] placeholder:font-medium border-[#C0C0C0]'/>
                                    </div>
                                     <div className="flex flex-col space-y-[6px]">
                                        <label htmlFor="Distance" className='ms-5'>Jarak Ke Tujuan</label>
                                          <input name="Distance" type="text" className=' w-9/12  p-2  h-[40px] rounded-[20px] font-semibold placeholder:text-primary-blue border-1 placeholder:text-[15px] placeholder:font-medium border-[#C0C0C0]'/>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-[30px]">
                                         <div className='flex flex-col space-y-2'>
                                            <label htmlFor='room type' className=" flex items-center text-[14px] font-medium text-primary-blue">Jenis Kamar</label>
                                            <select
                                            name="room type"
                                            className="mt-1 ms-2 w-fit px-2 py-1  text-[14px] rounded-[10px] bg-[#F4F4F4]"
                                            >
                                            <option value="Quad">Quad</option>
                                            <option value="Triple">Triple</option>
                                            <option value="Double">Double</option>
                                            </select>
                                        </div>
                                         <div className='flex flex-col space-y-2'>
                                            <label htmlFor='room type' className=" flex items-center text-[14px] font-medium text-primary-blue">Bintang Hotel</label>
                                        <div className="flex ms-2 items-center bg-[#F4F4F4] rounded-full px-4 py-1 w-fit space-x-1">
                                        <span className="text-yellow-400 text-[18px]">★</span>
                                        <input
                                            type="number"
                                            min={1}
                                            max={5}
                                            defaultValue={4}
                                            className="w-10 text-center text-[14px] font-medium text-[#0A1C3D] bg-transparent focus:outline-none hide-arrows"
                                        />
                                        </div>
                                        </div>

                                </div>
                            </div>
                                    <h2 className="text-[20px] w-11/12 mx-auto font-medium text-primary-blue mb-4 mt-[48px]">Fasilitas</h2>
                                            <div className="w-11/12 mx-auto grid grid-cols-2 gap-4">
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
                                   
                                      {fasilitasUmum.map((item, i) => (
                                    <label key={i} className='text-[11px] text-primary-blue capitalize font-medium block'>
                                    <input type="checkbox" className="" /> {item}
                                    </label>
                                ))}
                                    <label htmlFor="other" className='mt-4 text-[11px] text-primary-blue font-medium'>Lainnya..</label><br/>
                                <div className="flex w-7/12  border px-2 py-1 rounded text-[11px] items-center justify-between mt-2">
                                    <input
                                    type="text"
                                   
                                    value={inputUmum}
                                    onChange={(e) => setInputUmum(e.target.value)}
                                    className=""
                                    />
                                    <button
                                    onClick={addFasilitasUmum}
                                    className="text-[8px] text-[#B3B3B3] border border-[#B3B3B3] rounded-full w-[12px] h-[12px] flex items-center justify-center"
                                    >
                                    +
                                    </button>
                                </div>
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
                                    
                                        {fasilitasKamar.map((item, i) => (
                                                <label key={i} className='text-[11px] capitalize text-primary-blue font-medium block'>
                                                <input type="checkbox" className="mr-1" /> {item}
                                                </label>
                                            ))}
                                    <label htmlFor="other" className='mt-4 text-[11px] text-primary-blue font-medium'>Lainnya..</label><br/>
                                          <div className="flex w-7/12  border px-2 py-1 rounded text-[11px] items-center justify-between mt-2">
                                                <input
                                                type="text"
                                               
                                                value={inputKamar}
                                                onChange={(e) => setInputKamar(e.target.value)}
                                                
                                                />
                                                 <button
                                                    onClick={addFasilitasKamar}
                                                    className="text-[8px] text-[#B3B3B3] border border-[#B3B3B3] rounded-full w-[12px] h-[12px] flex items-center justify-center"
                                                    >
                                                    +
                                                    </button>
                                            </div>
                                </div>
                            
                                            </div>
                                                
                                </div>

                                        
                                        </div>
                                        <div className="col-span-2">

                                   <div className="w-full min-h-[300px] h-fit bg-white shadow-[-1px_1px_10.9px] p-6 pt-12 rounded shadow-black/25">
                                    <div className="w-full">
                                        {/* <h3 className="font-semibold mb-2">Gambar Hotel</h3> */}

                                        {previewImages.length === 0 ? (
                                        <>
                                            <label
                                            htmlFor="upload"
                                            className="flex text-[14px] flex-col items-center justify-center w-[230px] h-[120px] border border-dashed border-[#00000040] bg-[#D9D9D9] rounded-[10px] cursor-pointer mx-auto"
                                            >
                                            <span className=" text-gray-500">+</span>
                                            <span className="text-gray-500 font-medium">Tambah Gambar</span>
                                            </label>
                                            <input
                                            type="file"
                                            id="upload"
                                            className="hidden"
                                            multiple
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            />
                                            {/* <p className="text-sm text-gray-400 mt-1 ms-5">Maks 5</p> */}
                                        </>
                                        ) : (
                                        <div className="flex overflow-x-scroll space-x-4 py-2">
                                            {previewImages.map((src, index) => (
                                            <img
                                                key={index}
                                                src={src}
                                                alt={`preview-${index}`}
                                                className="w-full h-[300px] object-cover rounded-md shadow"
                                            />
                                            ))}
                                        </div>
                                        )}
                                    </div>
                                    </div>

                                     <div className="w-full mt-6 flex justify-end gap-4">
                             
                                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#003CB4] to-[#3679FE] text-white">
                                Simpan
                                </button>
                            </div>
                                        </div>
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

export default AddHotel