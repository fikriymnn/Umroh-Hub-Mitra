/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import packageIcon from "../../../assets/icons/Vector (3).svg";
import DefaultLayout from '../../../layout/DefaultLayout';
import usePackageActivity from '../../../hooks/package/usePackageActivity';

function TravelDuration() {
  const {
    schedules,
    setSchedules,
    handleChangeField,
    handleAddActivity,
    handleRemoveActivity,
    handleAddDay,
    handleDeleteDay,
    handleSave
  } = usePackageActivity();
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
            <span>-</span><span className='text-[20px] text-primary-blue'>jadwal perjalanan</span>
            <span>-</span><span className='text-[12px] text-[#919191]'>preview</span>
          </h1>
          <div className="w-full flex flex-col bg-white gap-6 shadow-[0px_4px_7.7px_5px] px-[30px] py-[27px] shadow-black/25">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Durasi Perjalanan</h2>

            {schedules.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-[#F5F5F5] p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[14px] font-medium text-primary-blue">
                    Hari ke {dayIndex + 1}
                    <label htmlFor="aktivas utama" className='text-primary-blue ms-[20px] font-medium text-[10px]'>Aktivitas Utama</label>
                    <input
                      type="text"
                      value={day.title}
                      onChange={(e) => handleChangeField(e, dayIndex, undefined, 'title')}
                      className="ml-2 px-2 w-4/12 py-1 border rounded-[5px] bg-white"
                    />
                  </div>
                  {schedules.length > 1 && (
                    <button onClick={() => handleDeleteDay(dayIndex)} className="text-red-500 hover:text-red-700">
                      ✕
                    </button>
                  )}
                </div>
                <div className="flex">
                  <div className="flex relative w-[50px] items-center space-x-2 mb-4">
                    <button onClick={() => handleAddActivity(dayIndex)} className="absolute bottom-0 text-gray-500 w-[13px] h-[13px] flex items-center justify-center border-2 rounded-full border-[#8D8D8D] text-[15px]">
                      +
                    </button>
                    <button onClick={() => handleRemoveActivity(dayIndex)} className="absolute bottom-0 left-5 text-gray-500 w-[13px] h-[13px] flex items-center justify-center border-2 rounded-full border-[#8D8D8D] text-[15px]">
                      -
                    </button>
                  </div>

                  <div className="flex flex-col">

                    {day?.details?.map((activity, activityIndex) => (
                      <div key={activityIndex} className="grid grid-cols-4 gap-4 mb-2">
                        <div className="flex flex-col space-y-1">
                          <h1 className="text-[12px] font-medium text-primary-blue">Waktu</h1>
                          <input
                            type="text"

                            value={activity.time}
                            onChange={(e) => handleChangeField(e, dayIndex, activityIndex, 'time')}
                            className="px-2 py-1 rounded-[5px] bg-white"
                          />
                        </div>
                        <div className="flex flex-col space-y-1">
                          <h1 className="text-[12px] font-medium text-primary-blue">Aktivitas</h1>

                          <input
                            type="text"

                            value={activity.activity}
                            onChange={(e) => handleChangeField(e, dayIndex, activityIndex, 'activity')}
                            className="px-2 py-1 rounded-[5px] bg-white"
                          />
                        </div>
                        <div className="flex-flex-col-space-y-1 col-span-2">
                          <h1 className="text-[12px] font-medium text-primary-blue ">Catatan</h1>

                          <input
                            type="text"

                            value={activity.note}
                            onChange={(e) => handleChangeField(e, dayIndex, activityIndex, 'note')}
                            className="px-2 py-1  rounded-[5px] w-10/12 bg-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end ms-[15px]">
                    <div className="w-28 h-28 rounded bg-white flex items-center justify-center border">
                      <span className="text-gray-500 text-sm text-center">+<br />Tambah Gambar</span>
                    </div>
                  </div>
                </div>


              </div>
            ))}

            <div className="space-x-2 flex w-full justify-end">
              <button onClick={() => setSchedules(schedules.slice(0, -1))} className="bg-[#4B91E0] text-[10px] text-white px-3 py-1 rounded">
                Hapus hari
              </button>
              <button onClick={handleAddDay} className="bg-[#4B91E0] text-[10px] text-white px-3 py-1 rounded">
                Tambah Hari
              </button>
            </div>
            <div className="w-full flex justify-end gap-4">


              <button className="px-6 py-2 rounded-full bg-gradient-to-br from-[#004492] to-[#00152C] text-white">Kembali</button>
              <button
                onClick={handleSave}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white"
              >
                Simpan Dan Lanjut
              </button>

            </div>
          </div>
        </div>

      </div>
    </DefaultLayout>
  )
}

export default TravelDuration