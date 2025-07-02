import { useState } from "react";

const NotifikasiPage = () => {
  const allNotifications = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    type: i % 5 === 1 ? "paket" : "pesanan",
    user: "Hartono4456",
    paket: "Umroh Paket Plus Amanah",
    uangMuka: "Rp6.000.000",
    waktu: "24 Nov 2025 jam 13:00",
    kuota: "150/150",
  }));

 
    
      const [currentPage, setCurrentPage] = useState(1)
    const itemPages = 5;
     const totalPages = Math.ceil(allNotifications.length / itemPages);
    const startIndex = (currentPage - 1) * itemPages;
    const currentItems = allNotifications.slice(startIndex, startIndex + itemPages);



  return (
      <div className="h-screen bg-[#DADADA]">
          <div className="bg-[#04286D] px-[25px] flex items-center w-full h-[57px]">
              <div className="flex space-x-[22px] items-center">
                  
                  <h1 className="font-philosopher text-[36px] text-white">Umroh<span className="font-bold">Hub</span></h1>
                  <h2 className="text-base text-white font-medium">Notifikasi</h2>
              </div>
          </div>
            <div className="max-w-11/12 mx-auto mt-[29px]">
            <h2 className="text-[24px] ms-[46px] font-semibold text-[#0A4B7B] mb-4">Notifikasi</h2>
              <div className="w-full py-[17px] px-[12px] bg-white rounded shadow">
                  
                <div className="">
                    {currentItems.map((notif) => (
                    <div
                        key={notif.id}
                            className="flex justify-between h-[90px] items-start border-b border-b-[#A1A1A1] hover:border-b-[#686161] hover:border-b-2 hover:h-[80px] py-4
                        origin-top px-4 transform group transition-all duration-1100 ease-in-out w-full hover:bg-[#F0F0F0] hover:w-[1360px]"
                    >
                        <div className="flex items-start space-x-3">
                        <div className="pt-1">
                            <img src="/icon.svg" alt="icon" className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                            <span
                                className={`text-white text-xs px-2 py-[2px] rounded ${
                                notif.type === "paket"
                                    ? "bg-[#3FA9F5]"
                                    : "bg-[#30BE71]"
                                }`}
                            >
                                {notif.type}
                            </span>
                            <span className="text-sm">
                                {notif.type === "paket" ? (
                                <>
                                    Kuota Paket Anda, paket{" "}
                                    <span className="text-[#007BFF] font-medium">
                                    {notif.paket}
                                    </span>{" "}
                                    Telah Penuh
                                    <br />
                                    Kuota Paket{" "}
                                    <span className="font-semibold text-[#007BFF]">
                                    {notif.kuota}
                                    </span>
                                </>
                                ) : (
                                <>
                                    <span className="text-[#007BFF] font-semibold">
                                    {notif.user}
                                    </span>{" "}
                                    Memesan paket{" "}
                                    <span className="text-[#007BFF] font-semibold">
                                    {notif.paket}
                                    </span>
                                    <br />
                                    <span className="text-[#1D1D1D]">Status Pesanan</span>{" "}
                                    <span className="text-[#007BFF] font-medium">
                                    Uang Muka : {notif.uangMuka}
                                    </span>
                                </>
                                )}
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="text-sm text-gray-500 whitespace-nowrap">
                        {notif.waktu}
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            {/* <div className="flex justify-center mt-6">
                <ul className="flex space-x-2 text-sm text-[#002D72]">
                <li>
                    <button
                    onClick={() => goToPage(currentPage - 1)}
                    className="w-8 h-8 hover:bg-gray-200 rounded"
                    disabled={currentPage === 1}
                    >
                    {"<"}
                    </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .slice(
                    Math.max(0, currentPage - 3),
                    Math.min(totalPages, currentPage + 2)
                    )
                    .map((page) => (
                    <li key={page}>
                        <button
                        onClick={() => goToPage(page)}
                        className={`w-8 h-8 rounded ${
                            currentPage === page
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-200"
                        }`}
                        >
                        {page}
                        </button>
                    </li>
                    ))}

                <li>
                    <button
                    onClick={() => goToPage(currentPage + 1)}
                    className="w-8 h-8 hover:bg-gray-200 rounded"
                    disabled={currentPage === totalPages}
                    >
                    {">"}
                    </button>
                </li>
                </ul>
            </div> */}
              <div className='flex justify-center mt-10 space-x-4'>
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className='px-3 py-1 text-[#868686] font-medium'
                    >
                        &lt;
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-gradient-to-b from-[#109FF5] to-[#0A5D8F] text-white font-bold rounded-2xl' : 'text-[#868686] font-medium'}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className='px-3 py-1 text-[#868686] font-medium'
                    >
                        &gt;
                    </button>
                </div>
            </div>
          </div>
  );
};

export default NotifikasiPage;
