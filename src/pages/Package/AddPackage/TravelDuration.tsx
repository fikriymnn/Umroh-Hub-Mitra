/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import packageIcon from "../../../assets/icons/Vector (3).svg";
import DefaultLayout from '../../../layout/DefaultLayout';

function TravelDuration() {
   const [days, setDays] = useState([
    { aktivitasUtama: '', activities: [{ waktu: '', aktivitas: '', catatan: '' }] },
  ]);

  const handleChangeField = (
    e: React.ChangeEvent<HTMLInputElement>,
    dayIndex: number,
    activityIndex: number | undefined,
    field: string
  ) => {
    const newDays = [...days];
    if (activityIndex === undefined) {
      if (field === 'aktivitasUtama') {
        newDays[dayIndex].aktivitasUtama = e.target.value;
      }
    } else {
      if (field === 'waktu' || field === 'aktivitas' || field === 'catatan') {
        newDays[dayIndex].activities[activityIndex][field] = e.target.value;
      }
    }
    setDays(newDays);
  };

  const handleAddActivity = (dayIndex:number) => {
    const newDays = [...days];
    newDays[dayIndex].activities.push({ waktu: '', aktivitas: '', catatan: '' });
    setDays(newDays);
  };

  const handleRemoveActivity = (dayIndex: number) => {
    const newDays = [...days];
    if (newDays[dayIndex].activities.length > 1) {
      newDays[dayIndex].activities.pop();
      setDays(newDays);
    }
  };

  const handleAddDay = () => {
    setDays([...days, { aktivitasUtama: '', activities: [{ waktu: '', aktivitas: '', catatan: '' }] }]);
  };

  const handleDeleteDay = (index:number) => {
    if (days.length > 1) {
      const newDays = days.filter((_, i) => i !== index);
      setDays(newDays);
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
                        <span>-</span><span className='text-[20px] text-primary-blue'>jadwal perjalanan</span>
                         <span>-</span><span className='text-[12px] text-[#919191]'>preview</span>
                    </h1>
                <div className="w-full flex flex-col bg-white gap-6 shadow-[0px_4px_7.7px_5px] px-[30px] py-[27px] shadow-black/25">
                    <h2 className="text-xl font-semibold text-blue-800 mb-4">Durasi Perjalanan</h2>

                    {days.map((day, dayIndex) => (
                        <div key={dayIndex} className="bg-[#F5F5F5] p-4 rounded">
                        <div className="flex justify-between items-center mb-2">
                            <div className="text-[14px] font-medium text-primary-blue">
                            Hari ke {dayIndex + 1}
                            <label htmlFor="aktivas utama" className='text-primary-blue ms-[20px] font-medium text-[10px]'>Aktivitas Utama</label>
                            <input
                                type="text"
                                value={day.aktivitasUtama}
                                onChange={(e) => handleChangeField(e, dayIndex, undefined, 'aktivitasUtama')}
                                className="ml-2 px-2 w-4/12 py-1 border rounded-[5px] bg-white"
                            />
                            </div>
                            {days.length > 1 && (
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

                                {day.activities.map((activity, activityIndex) => (
                                    <div key={activityIndex} className="grid grid-cols-4 gap-4 mb-2">
                                        <div className="flex flex-col space-y-1">
                                             <h1 className="text-[12px] font-medium text-primary-blue">Waktu</h1>
                                            <input
                                                type="text"
                                            
                                                value={activity.waktu}
                                                onChange={(e) => handleChangeField(e, dayIndex, activityIndex, 'waktu')}
                                                className="px-2 py-1 rounded-[5px] bg-white"
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <h1 className="text-[12px] font-medium text-primary-blue">Aktivitas</h1>

                                            <input
                                                type="text"
                                            
                                                value={activity.aktivitas}
                                                onChange={(e) => handleChangeField(e, dayIndex, activityIndex, 'aktivitas')}
                                                className="px-2 py-1 rounded-[5px] bg-white"
                                            />
                                        </div>
                                        <div className="flex-flex-col-space-y-1 col-span-2">
                                            <h1 className="text-[12px] font-medium text-primary-blue ">Catatan</h1>
                                            
                                            <input
                                                type="text"
                                            
                                                value={activity.catatan}
                                                onChange={(e) => handleChangeField(e, dayIndex, activityIndex, 'catatan')}
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
                        <button onClick={() => setDays(days.slice(0, -1))} className="bg-[#4B91E0] text-[10px] text-white px-3 py-1 rounded">
                            Hapus hari
                        </button>
                        <button onClick={handleAddDay} className="bg-[#4B91E0] text-[10px] text-white px-3 py-1 rounded">
                            Tambah Hari
                        </button>
                        </div>
                    <div className="w-full flex justify-end gap-4">

                       
                                <button className="px-6 py-2 rounded-full bg-gradient-to-br from-[#004492] to-[#00152C] text-white">Kembali</button>
                                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white">
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