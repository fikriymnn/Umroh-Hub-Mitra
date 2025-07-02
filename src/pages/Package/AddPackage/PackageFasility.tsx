/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import packageIcon from "../../../assets/icons/Vector (3).svg";
import DefaultLayout from '../../../layout/DefaultLayout';
import usePackageFacility from '../../../hooks/package/usePackageFacility';

function PackageFasility() {
  const {
    facilities, setFacilities,
    airLine, setAirLine,
    airPlane, setAirPlane,
    locationList,
    setSelectedLocation,
    inputTransportation, setInputTransportation,
    handleAddTransportation,
    handleKeyDown,
    handleSave,
    handleBack
  } = usePackageFacility();

  return (
    <DefaultLayout>

      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={packageIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
          <h1 className="text-primary-blue font-medium">Package</h1>
        </div>
        <div className="p-6 ms-[48px]">
          <h1 className="text-[12px] flex items-center text-[#0A6BDB] space-x-[12px] capitalize font-medium ms-[30px]  mb-4">Sampul Paket <span className='ms-[12px]'>-</span>
            <span className='text-[20px] text-primary-blue'>fasilitas</span>
            <span>-</span><span className='text-[12px] text-[#919191]'>Hotel</span>
            <span>-</span><span className='text-[12px] text-[#919191]'>jadwal perjalanan</span>
            <span>-</span><span className='text-[12px] text-[#919191]'>preview</span>
          </h1>

          <div className="w-11/12 min-h-[500px] grid bg-white grid-cols-2 gap-6 shadow-[0px_4px_7.7px_5px] px-[30px] py-[27px] shadow-black/25">
            {/* Form kiri */}
            <div className="space-y-4">
              <div>
                <label className="block  font-medium text-primary-blue">List Fasilitas</label>
                <textarea
                  className="w-11/12 p-2 bg-[#F4F4F4] rounded placeholder:text-[#C0C0C0] placeholder:text-sm"
                  placeholder={`*gunakan simbol (-) untuk membuat list\n• Penerbangan\n• Penginapan (Hotel)\n• Konsumsi\n  - makan 3x sehari\n  - makanan ringan\n• Visa Umroh\n• Pransportasi darat\n  - Minibus Muatan 8 orang\n• Muthawwif\n `}
                  rows={10}
                  value={facilities}
                  onChange={(e) => setFacilities(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>

            {/* Form kanan */}
            <div className="">
              <div className='flex flex-col space-x-[22px]'>
                <h1 className=" flex items-center font-medium text-primary-blue">Penerbangan</h1>
                <div className="flex w-10/12 mt-[10px] ms-3">
                  <div>
                    <label className="block ms-2 text-[14px] font-medium text-primary-blue">Maskapai</label>
                    <input
                      type="text"
                      value={airLine}
                      onChange={(e) => setAirLine(e.target.value)}
                      className="mt-1 w-11/12 p-2  rounded-[10px] bg-[#F4F4F4]"
                    />
                  </div>
                  <div>
                    <label className="block ms-2 text-[14px] font-medium text-primary-blue">Pesawat</label>
                    <input
                      type="text"
                      value={airPlane}
                      onChange={(e) => setAirPlane(e.target.value)}
                      className="mt-1 w-11/12 p-2  rounded-[10px] bg-[#F4F4F4]"
                    />
                  </div>
                </div>
                <div className='w-5/12 ms-3 mt-[10px]'>
                  <label className="block ms-2 text-[14px] font-medium text-primary-blue">Kota Keberangkatan</label>
                  <select
                    onChange={(e) => setSelectedLocation(Number(e.target.value))}
                    className="w-[130px] px-4 py-2 rounded-[20px] bg-white border border-[#C6C6C6] text-sm focus:outline-none">
                    <option value="">Pilih paket</option>
                    {locationList.map((item, i) => (
                      <option
                        key={i}
                        value={item.id}
                      >
                        {item.location_name}
                      </option>
                    ))}
                  </select>
                  {/* <input
                    type="text"
                    className="mt-1 w-11/12 p-2  rounded-[10px] bg-[#F4F4F4]"
                  /> */}
                </div>
                <h1 className=" flex items-center font-medium mt-[10px] text-primary-blue">Kendaraan Darat</h1>
                <div className="flex w-10/12 mt-[10px] ms-3">
                  <div>
                    <label className="block ms-2 text-[14px] font-medium text-primary-blue">Jenis Kendaraan</label>
                    <input
                      type="text"
                      value={inputTransportation}
                      onChange={(e) => setInputTransportation(e.target.value)}
                      className="mt-1 w-11/12 p-2  rounded-[10px] bg-[#F4F4F4]"
                    />
                    <button
                      type="button"
                      onClick={handleAddTransportation}
                      className="bg-blue-500 text-white px-3 py-2 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full col-span-2 mt-6 flex justify-end gap-4">
              <button
                onClick={handleBack}
                className="px-6 py-2 h-fit rounded-full bg-gray-400 text-white"
              >
                Kembali
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 h-fit rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white"
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

export default PackageFasility