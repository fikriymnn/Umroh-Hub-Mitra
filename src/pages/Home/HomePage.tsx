import React, { useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import dashboardIcon from "../../assets/icons/Home.svg";
import jemaahIcon from "../../assets/icons/User_fill (1).svg";
import packageIcon from "../../assets/icons/package_box_alt.svg";
import packageIcon2 from "../../assets/icons/package_box_alt (1).svg";
import incomeIcon from "../../assets/icons/Money.svg";
import promoIcon from "../../assets/icons/Lable.svg";
import orderIcon from "../../assets/icons/package_box.svg";
import { Area, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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
  { name: 'Reguler', value: 70 },
  { name: 'Plus', value: 30 },
];

const HomePage: React.FC = () => {
   const [selectedYear, setSelectedYear] = useState("2025");
  const years = ["2023", "2024", "2025"];

  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={dashboardIcon} alt="dashboard icon" className="w-[20px] h-[20px]" />
          <h1 className="text-primary-blue font-medium">Dashboard</h1>
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

        {/* Indicator biru di bawah */}
        <div className="absolute bottom-[-8px] left-0 right-0 h-[4px] bg-gradient-to-r from-sky-400 to-white rounded-full w-[100px] mx-auto" />
      </div>
            </div>
             <div className="bg-white rounded-lg shadow-[-5px_2px_14px] shadow-black/25 p-6 flex flex-col  w-full">
        <h2 className="text-[14px] font-bold">
          Distribusi Paket <span className="bg-gradient-to-br text-[12px] from-[#247599] to-[#3CC2FF] ms-[17px] text-transparent bg-clip-text">Hasanah Hana</span>
        </h2>
      <div className="flex w-full h-12/12 items-center space-x-[29px] justify-center">

        <div className="">
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
        </div>
        </div>
        </div>
    </DefaultLayout>
  );
};

export default HomePage;
