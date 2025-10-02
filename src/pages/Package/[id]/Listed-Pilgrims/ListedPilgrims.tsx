import packageIcon from "../../../../assets/icons/Vector (3).svg";
import DefaultLayout from '../../../../layout/DefaultLayout';
import packageExample from '../../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png'
import useDetailPackage from '../../../../hooks/package/useDetailPackage';
function Pilgrims() {
  const {
    data
  } = useDetailPackage();

  return (
    <DefaultLayout>

      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={packageIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
          <h1 className="text-primary-blue font-medium">Package</h1>
        </div>
        {data && (
          <div className="flex flex-col items-center p-6 font-sans">
            {/* Tanggal */}
            <h1 className="text-lg font-semibold text-gray-800">
              {data?.detailPackage?.date_departure} - 03/11/2025
            </h1>

            <div className="w-full px-4 mt-[39px] bg-white shadow-[0px_4px_8.4px_4px] shadow-black/25 rounded-lg">
              <div className="grid grid-cols-5 gap-4 items-start">
                {/* Kolom 1 - Gambar */}
                <div className="col-span-1">
                  <img
                    src={packageExample}
                    alt="paket"
                    className="object-cover w-[183px] h-[183px]"
                  />
                </div>

                <div className="col-span-3 grid grid-rows-3 gap-2 py-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="font-bold text-[#1D1D1D]">{data?.detailPackage?.package_name}</h2>
                      <p className="text-sm text-gray-500">Paket {data?.detailPackage?.master_type_departure?.type_name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#1D1D1D] font-semibold">{data?.detailPackage?.price?.toLocaleString('ID')}</p>
                    </div>
                    <p className="text-sm text-[#1D1D1D]">{data?.detailPackage?.quota_update}/{data?.detailPackage?.quota}</p>
                  </div>
                  <div className="grid grid-cols-3 w-full gap-4">
                    <div className="">
                      <div className="border border-[#3A86FF] rounded-full px-4 py-1 bg-[#E8F1FF] inline-block">
                        <span className="text-[#1D1D1D] font-bold text-xl">27</span>
                        <span className="text-sm ml-1">Pesanan</span>
                      </div>
                    </div>
                    <div className="text-sm text-[#1D1D1D] text-left">
                      <p>Tanggal keberangkatan</p>
                      <p className="font-semibold">Senin {data?.detailPackage?.date_departure}</p>
                    </div>
                    <div className="text-sm text-[#1D1D1D] text-left">
                      <p>Tanggal kepulangan</p>
                      <p className="font-semibold">Selasa 3/10/2025</p>
                    </div>
                  </div>
                  <div className='w-10/12'>
                    <div className="flex  justify-between text-sm text-[#1D1D1D] mb-1">
                      <span>Persiapan</span>
                      <span>Hari 9</span>
                    </div>
                    <div className="w-full h-[6px] bg-gray-300 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#004492] to-[#10F5EA] rounded-full w-[5%]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center relative h-full items-center">
                  <div className="bg-gradient-to-r bottom-2 from-cyan-400 to-blue-500 text-white font-bold text-lg px-6 py-6 rounded-[20px]">
                    0%
                  </div>
                </div>
              </div>
            </div>




            {/* Kategori Box */}
            <div className="grid grid-cols-2 md:grid-cols-4 mt-[44px] gap-4 w-full max-w-10/12">
              <div className="bg-blue-100 border-[3px] border-[#3C97FF] text-blue-800 rounded-[20px] px-4 py-3 font-semibold text-center">
                {data?.totalJamaahFemale} Ahkwat
              </div>
              <div className="bg-green-100 border-[3px] border-[#13CC9E] text-green-800 rounded-[20px] px-4 py-3 font-semibold text-center">
                {data?.totalJamaahMale} Ikhwan
              </div>
              <div className="bg-yellow-100 border-[3px] border-[#CC9513] text-yellow-800 rounded-[20px] px-4 py-3 font-semibold text-center">
                {data?.totalJamaah} Jamaah Terdaftar
              </div>
              <div className="bg-purple-100 text-purple-800 border-[3px] border-[#9A3CFF] rounded-[20px] px-4 py-3 font-semibold text-center">
                104 Sisa Kuota
              </div>
            </div>

            <div className="shadow-black/25 w-full shadow-[0px_4px_15.2px] mt-[32px] ">
              <table className="w-full border-collapse">
                <thead className="bg-[#001F5D] text-white font-medium">
                  <tr>
                    <th className="p-4">No</th>
                    <th className="p-4">Nama Jemaah</th>
                    <th className="p-4">Gender</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">KTP</th>
                    <th className="p-4">Passport</th>
                    <th className="p-4">Kartu Keluarga</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {data?.detailJamaah?.map((item, i) =>
                    item?.jamaah?.map((jamaah, jIdx) => (
                      <tr key={jIdx} className="font-medium">
                        <td className="p-4 text-[20px]">{i + 1}.</td>
                        <td className="p-4 text-[20px]">{jamaah?.name}</td>
                        <td className="p-4 text-[#696969] text-sm">{jamaah?.gender}</td>
                        <td className="p-4 text-[#696969] text-sm">{jamaah?.email}</td>

                        <td className="p-4">
                          <div className="flex justify-center">
                            <button className="bg-gradient-to-r from-[#003CB4] to-[#3679FE] text-white text-[12px] px-4 py-1 rounded-full">
                              Lihat File
                            </button>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center">
                            <button className="bg-gradient-to-r from-[#003CB4] to-[#3679FE] text-white text-[12px] px-4 py-1 rounded-full">
                              Lihat File
                            </button>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center">
                            <button className="bg-gradient-to-r from-[#003CB4] to-[#3679FE] text-white text-[12px] px-4 py-1 rounded-full">
                              Lihat File
                            </button>
                          </div>
                        </td>

                      </tr>
                    )))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  )
}

export default Pilgrims