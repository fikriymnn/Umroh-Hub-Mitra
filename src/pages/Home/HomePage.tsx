import React, { useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import dashboardIcon from "../../assets/icons/Home.svg";
import jemaahIcon from "../../assets/icons/User_fill (1).svg";
import packageIcon from "../../assets/icons/package_box_alt.svg";
import packageIcon2 from "../../assets/icons/package_box_alt (1).svg";
import incomeIcon from "../../assets/icons/Money.svg";
import packageIconn from "../../assets/icons/Group 1000004478.svg"
import promoIcon from "../../assets/icons/Lable.svg";
import orderIcon from "../../assets/icons/package_box.svg";
import { Area, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ProfileMenu from "../../components/ProfileMenu";
import useAccountDetail from "../../hooks/useAccountDetail";
import useLogOut from "../../hooks/useLogOut";

const data = [
  { bulan: "Jan", pendapatan: 52 },
  { bulan: "feb", pendapatan: 63 },
  { bulan: "mar", pendapatan: 73 },
  { bulan: "Apr", pendapatan: 64 },
  { bulan: "mei", pendapatan: 79 },
  { bulan: "juni", pendapatan: 72 },
  { bulan: "juli", pendapatan: 58 },
  { bulan: "agst", pendapatan: 52 },
  { bulan: "sep", pendapatan: 64 },
  { bulan: "okt", pendapatan: 58 },
  { bulan: "nov", pendapatan: 52 },
  { bulan: "des", pendapatan: 64 },
];

const dataPie = [
  { name: 'Reguler', value: 80 },
  { name: 'Plus', value: 30 },
];

const dataMonthly = [
  { bulan: "Jan", value: 25 },
  { bulan: "Feb", value: 30 },
  { bulan: "Mar", value: 50 },
  { bulan: "Apr", value: 60 },
  { bulan: "Mei", value: 60 },
  { bulan: "Juni", value: 52 },
  { bulan: "Juli", value: 63 },
  { bulan: "Agst", value: 55 },
  { bulan: "Sep", value: 61 },
  { bulan: "Okt", value: 70 },
  { bulan: "Nov", value: 56 },
  { bulan: "Des", value: 48 },
];



const HomePage: React.FC = () => {
  const { partner } = useAccountDetail();
  const {
    openDropdown, setOpenDropdown,
    handleLogOut
  } = useLogOut();
  const [selectedYear, setSelectedYear] = useState("2025");
  const years = ["2023", "2024", "2025"];
  const [tahun, setTahun] = useState("2025");

  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex justify-between space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <div className="flex">
            <img src={dashboardIcon} alt="dashboard icon" className="w-[20px] h-[20px]" />
            <h1 className="text-primary-blue font-medium">Dashboard</h1>
          </div>
          {partner && (
            <ProfileMenu
              partner={partner}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              handleLogOut={handleLogOut}
            />
          )}

        </div>
        <div className="w-full flex flex-col mt-[56px] h-full items-center">


          <div className="w-11/12 grid grid-cols-4 mt-[27px] gap-6">
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Jemaah Terdaftar</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">10</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#5CE9FF63] flex items-center">

                <img src={jemaahIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Jumlah Paket</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">10</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#70FFEE63] flex items-center">

                <img src={packageIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Paket aktif</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">10</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#F370FF63] flex items-center">

                <img src={packageIcon2} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Pendapatan bulan ini</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">10</h1>
                <h1 className="capitalize text-[10px] text-[#797979] font-medium">mei</h1>
              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#70FFE763] flex items-center">

                <img src={incomeIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Paket promo aktif</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">10</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#70DF0263] flex items-center">

                <img src={promoIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Pesanan</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">10</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#FFBE7063] flex items-center">

                <img src={orderIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>
          <div className="w-11/12 mt-[42px] h-full grid grid-cols-2 gap-6">
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] px-[30px] py-[15px]">
              <h2 className="text-xl font-bold">Pendapatan Bulanan</h2>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-[8px] ms-[50px] font-bold">Jt</h2>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-gradient-to-r from-[#008FE2] to-[#5CE9FF] text-white text-sm px-3 py-1 rounded-full outline-none cursor-pointer"
                >
                  {years.map((year) => (
                    <option key={year} value={year} className="text-black">
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="overflow-x-auto overflow-y-hidden relative">
                <div className="min-w-[680px] pe-4">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                      <defs>
                        <linearGradient id="colorPendapatan" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.6} />
                          <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="bulan" />
                      <YAxis domain={[0, 110]} />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="pendapatan"
                        stroke="#38bdf8"
                        fillOpacity={1}
                        fill="url(#colorPendapatan)"
                      />
                      <Line
                        type="monotone"
                        dataKey="pendapatan"
                        stroke="#0284c7"
                        strokeWidth={2}
                        dot={{ fill: "#0284c7", r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>



              </div>
            </div>
            <div className="bg-white rounded-lg shadow-[-5px_2px_14px] shadow-black/25 p-6 flex flex-col  w-full">
              <h2 className="text-[14px] font-bold">
                Distribusi Paket <span className="bg-gradient-to-br text-[12px] from-[#247599] to-[#3CC2FF] ms-[17px] text-transparent bg-clip-text">Hasanah Hana</span>
              </h2>
              <div className="flex w-full h-12/12 items-center space-x-[29px] justify-center">

                <div className="min-w-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <defs>
                        <linearGradient id="regulerGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#0D78F3" />
                          <stop offset="100%" stopColor="#07468D" />
                        </linearGradient>
                      </defs>
                      <Pie
                        data={dataPie}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        dataKey="value"
                        stroke="none"
                      >
                        <Cell fill="url(#regulerGradient)" />
                        <Cell fill="#001A4D" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-2 flex flex-col justify-center">
                  <div className="flex flex-col">

                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#0D78F3' }} />
                      <span className="text-sm">Reguler</span>
                    </div>
                    <h1 className="font-bold text-center text-[20px]">70%</h1>
                  </div>
                  <div className="flex flex-col">

                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#001A4D' }} />
                      <span className="text-sm">Plus</span>
                    </div>
                    <h1 className="font-bold text-center text-[20px]">30%</h1>
                  </div>
                </div>
              </div>


            </div>
            <div className="mt-[42px] h-full  shadow-[-5px_2px_14px] shadow-black/25 rounded-xl col-span-2   p-6 w-full grid grid-cols-2">
              {/* KIRI */}
              <div className="flex flex-col space-y-[20px]">
                <h2 className="font-bold text-lg ">Paket Aktif</h2>
                <div className="flex justify-center mt-[50px] space-x-5 items-center">
                  <div className="flex space-x-6 items-end">
                    <div className="text-center">
                      <div className="text-sm mb-1">12</div>
                      <div className="w-8 h-16 bg-[#001A4D] rounded-t-lg" />
                      <div className="h-1 bg-[#001A4D] mt-1 w-full rounded-sm" />
                    </div>
                    <div className="text-center">
                      <div className="text-blue-500 text-lg font-bold mb-1">48</div>
                      <div className="w-8 h-32 bg-gradient-to-b from-[#0D78F3] to-[#00E0FF] rounded-t-lg" />
                      <div className="h-1 bg-[#00E0FF] mt-1 w-full rounded-sm" />
                    </div>
                  </div>

                  {/* Persentase */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#0D78F3]" />

                      <span>Reguler</span>
                      <span className="font-bold">80%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#001A4D]" />
                      <span>Plus</span>
                      <span className="font-bold">20%</span>
                    </div>
                  </div>
                </div>


                <div className=" flex flex-col items-center space-y-1 text-sm">
                  <div className="flex space-x-4 w-[250px]">
                    <img src={packageIconn} alt="package Icon" className="w-[14px] h-[16px]" />
                    <span className="text-blue-500">Reguler</span>
                    <span>: Rp1.536.000.000</span>
                  </div>
                  <div className="flex space-x-4 w-[250px]">
                    <img src={packageIconn} alt="package Icon" className="w-[14px] h-[16px]" />
                    <span className="text-blue-900">Plus</span>
                    <span>: Rp420.000.000</span>
                  </div>
                  <div className="flex justify-between w-56 font-bold">
                    <span>Total</span>
                    <span>: Rp1.956.000.000</span>
                  </div>
                </div>
              </div>



              {/* KANAN */}
              <div className="">
                <div className="flex justify-end mb-4">
                  <select
                    value={tahun}
                    onChange={(e) => setTahun(e.target.value)}
                    className="bg-[#00BFFF] text-white text-xs px-3 py-1 rounded-full"
                  >
                    <option>2025</option>
                    <option>2024</option>
                  </select>
                </div>
                <div className="space-y-2">
                  {dataMonthly.map((item, idx) => {
                    const isActive = item.bulan === "Okt";
                    return (
                      <div key={idx} className="flex items-center space-x-2">
                        <span
                          className={`w-[35px] text-right ${isActive ? "font-bold text-blue-600 text-lg" : "text-sm"
                            }`}
                        >
                          {item.bulan}
                        </span>
                        <div className={`flex items-center px-2  space-x-2 ${isActive ? "shadow-[0px_0px_7.7px] rounded-full shadow-[#1B89FF]" : ""}`}
                          style={{
                            width: `${item.value}%`
                          }}>
                          <div
                            className={`h-3 rounded-full bg-gradient-to-r from-[#1E90FF] to-[#00E0FF]
                    `}
                            style={{ width: `${item.value}%` }}
                          />
                          <span
                            className={` flex items-center text-[#008FE2]  ${isActive ? "font-bold text-[15px]" : "font-semibold text-[10px]"
                              }`}
                          >
                            {item.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
