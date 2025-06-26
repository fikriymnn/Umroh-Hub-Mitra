/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import packageIcon from "../../../assets/icons/Vector (3).svg";
import DefaultLayout from '../../../layout/DefaultLayout';

function PackageCover() {
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const photoMultiple = Array.from(files).slice(0, 5); // Maksimal 5
            const previewPict = photoMultiple.map((file) => URL.createObjectURL(file));
            setPreviewImages(previewPict);
        }
    };


    return (
        <DefaultLayout>

            <div className="w-full min-h-screen pb-16">
                <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
                    <img src={packageIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
                    <h1 className="text-primary-blue font-medium">Package</h1>
                </div>
                <div className="p-6 ms-[48px]">
                    <h1 className="text-[20px] flex items-center space-x-[12px] capitalize font-medium ms-[30px] text-primary-blue mb-4">Sampul Paket <span className='ms-[12px]'>-</span>
                        <span className='text-[12px] text-[#919191]'>fasilitas</span>
                        <span>-</span><span className='text-[12px] text-[#919191]'>Hotel</span>
                        <span>-</span><span className='text-[12px] text-[#919191]'>jadwal perjalanan</span>
                        <span>-</span><span className='text-[12px] text-[#919191]'>preview</span>
                    </h1>

                    <div className="w-11/12 grid bg-white grid-cols-2 gap-6 shadow-[0px_4px_7.7px_5px] px-[30px] py-[27px] shadow-black/25">
                        {/* Form kiri */}
                        <div className="space-y-4">
                            {/* Nama Paket */}
                            <div>
                                <label className="block font-medium text-primary-blue mb-1">Nama Paket</label>
                                <input
                                    type="text"
                                    placeholder="Nama Paket"
                                    className="w-10/12 px-4 py-2 rounded-[20px] bg-white border border-[#C6C6C6] text-sm focus:outline-none"
                                />
                            </div>

                            {/* Jenis Paket */}
                            <div>
                                <label className="block font-medium text-primary-blue mb-1">Jenis Paket</label>
                                <select className="w-[130px] px-4 py-2 rounded-[20px] bg-white border border-[#C6C6C6] text-sm focus:outline-none">
                                    <option value="Reguler">Reguler</option>
                                    <option value="VIP">VIP</option>
                                </select>
                            </div>

                            {/* Deskripsi */}
                            <div>
                                <label className="block font-medium text-primary-blue mb-1">Deskripsi</label>
                                <textarea
                                    placeholder="Tulis deskripsi paket..."
                                    rows={4}
                                    className="w-10/12 px-4 py-2 rounded-[20px] bg-white border border-[#C6C6C6] text-sm focus:outline-none resize-none"
                                ></textarea>
                            </div>

                            {/* Harga Paket */}
                            <div>
                                <label className="block font-medium text-primary-blue mb-1">Harga Paket</label>
                                <input
                                    type="text"
                                    placeholder="Masukkan harga"
                                    className="w-10/12 px-4 py-2 rounded-[20px] bg-white border border-[#C6C6C6] text-sm focus:outline-none"
                                />
                            </div>

                            {/* Stok Paket */}
                            <div>
                                <label className="block font-medium text-primary-blue mb-1">Stok Paket</label>
                                <input
                                    type="number"
                                    min={1}
                                    placeholder="0"
                                    className="w-[100px] px-4 py-2 rounded-[20px] bg-white border border-[#C6C6C6] text-sm focus:outline-none"
                                />
                            </div>

                        </div>

                        {/* Gambar Sampul */}
                        <div className="flex flex-col space-y-2">

                            <h1 className="font-medium capitalize">Gambar sampul</h1>
                            <div className="flex flex-col w-7/12 items-center justify-center  bg-white border border-[#C6C6C6] h-[150px]">
                                {previewImages.length === 0 ? (

                                    <div className="">


                                        <div className="flex flex-col items-center cursor-pointer">
                                            <label htmlFor="upload" className="flex flex-col items-center cursor-pointer">
                                                <h1 className="text-3xl font-bold">+</h1>
                                                <h1 className="mt-2">Tambah Gambar</h1>
                                            </label>
                                            <input
                                                type="file"
                                                id="upload"
                                                className="hidden"
                                                multiple
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex overflow-x-scroll space-x-4 py-2">
                                        {previewImages.map((src, index) => (
                                            <img
                                                key={index}
                                                src={src}
                                                alt={`preview-${index}`}
                                                className="w-fit h-[100px] object-cover rounded-md shadow"
                                            />
                                        ))}
                                    </div>
                                )}
                                <div className="w-full mt-6 flex justify-end gap-4">
                                    <button className="px-6 py-2 rounded-full bg-gray-400 text-white">Kembali</button>
                                    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white">
                                        Simpan Dan Lanjut
                                    </button>
                                </div>
                            </div>

                            {/* Buttons */}
                        </div>
                    </div>
                </div>
            </div>

        </DefaultLayout>
    )
}

export default PackageCover

