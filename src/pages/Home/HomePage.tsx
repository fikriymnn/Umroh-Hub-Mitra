/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import dashboardIcon from "../../assets/icons/Home.svg";
import jemaahIcon from "../../assets/icons/User_fill (1).svg";
import packageIcon from "../../assets/icons/package_box_alt.svg";
import packageIcon2 from "../../assets/icons/package_box_alt (1).svg";
import incomeIcon from "../../assets/icons/Money.svg";
// import packageIconn from "../../assets/icons/Group 1000004478.svg"
import hotelExample from '../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png'
import promoIcon from "../../assets/icons/Lable.svg";
import orderIcon from "../../assets/icons/package_box.svg";
import { Area, AreaChart, CartesianGrid, Cell, Line, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ProfileMenu from "../../components/ProfileMenu";
import useAccountDetail from "../../hooks/useAccountDetail";
import useLogOut from "../../hooks/auth/useLogOut";
import useDashboard from "../../hooks/useDashboard";

const data = [
  { bulan: '', pendapatan: 0 },
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
    datas, setDatas,
    income, setIncome,
    selectedYear, setSelectedYear
  } = useDashboard();
  const {
    openDropdown, setOpenDropdown,
    handleLogOut
  } = useLogOut();
  const years = ["2023", "2024", "2025"];
  const [tahun, setTahun] = useState("2025");


  const maxValue = Math.max(...data.map(d => d.pendapatan));

  // const dataPackage = [
  //   {
  //     name: 'Plus',
  //     jumlah: 3000,
  //   },
  //   {
  //     name: 'Regular',
  //     jumlah: 4000,
  //   },
  // ]
  // 2. Buat array ticks secara manual
  const ticks = [];

  for (let i = 0; i <= maxValue;) {
    ticks.push(i);
    if (i < 100) {
      i += 20;
    } else {
      i += 5;
    }
  }
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
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">{datas?.allJamaah}</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#5CE9FF63] flex items-center">

                <img src={jemaahIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Jumlah Paket</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">{datas?.allPackage}</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#70FFEE63] flex items-center">

                <img src={packageIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Paket aktif</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">{datas?.packageActive}</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#F370FF63] flex items-center">

                <img src={packageIcon2} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Pendapatan bulan ini</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">{datas?.totalRevenueThisMonth}</h1>
                <h1 className="capitalize text-[10px] text-[#797979] font-medium">mei</h1>
              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#70FFE763] flex items-center">

                <img src={incomeIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Paket promo aktif</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">{datas?.packageRegular}</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#70DF0263] flex items-center">

                <img src={promoIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Pesanan</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">{datas?.order}</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#FFBE7063] flex items-center">

                <img src={orderIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>
         <div className="w-11/12 mt-[42px] gap-6 h-full grid grid-cols-6">
            <div className="bg-white shadow-[-5px_2px_14px] col-span-4 shadow-black/25 w-full rounded-[7px] px-[30px] py-[15px]">
                      <h2 className="text-xl font-bold">Pendapatan Bulanan</h2>
                <div className="flex items-center justify-between mb-2">
                        <h2 className="text-[8px] ms-[20px] font-bold">Jt</h2>
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
                        <div className="">
                        <div className="pe-4">
                          <ResponsiveContainer width="100%" height={300}>
                            <AreaChart
                            
                              data={data}
                               margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
                            >
                              <defs>
                                <linearGradient id="colorPendapatan" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="30%" stopColor="#3C97FF" stopOpacity={1} />
                                  <stop offset="100%" stopColor="#5CE9FF00" stopOpacity={0} />
                                </linearGradient>
                              </defs>

                              <CartesianGrid
                                stroke="#e5e7eb"
                               strokeDasharray="0"

                              />

                                <XAxis
                                  dataKey="bulan"
                                  interval={0}
                                  tickLine={false}
                                  axisLine={{ stroke: '#e5e7eb' }}
                                  tick={{
                                    fill: '#000',
                                    fontSize: 11,
                                    dx: -23,
                                    color: '#000',
                                    fontWeight: 500
                                  }}
                                 
                                />

                              {/* <YAxis
                                className="text-[10px] font-medium text-[#8E8E8E]"
                                        domain={[0, 110]}
                                        tickCount={110}
                                        tickLine={false}
                                        width={30}
                                
                                      /> */}
                      
                      <YAxis
                          ticks={ticks}
                          tickLine={false}
                          axisLine={{ stroke: '#e5e7eb' }}
                          fontSize={10}
                          width={30}
                        />


                            <Tooltip
                              content={({ active, payload, label }) => {
                                if (active && payload && payload.length > 0) {
                                  const value = payload[0].value;
                                  if (value === 0) return null;

                                  return (
                                    <div className="rounded-md overflow-hidden shadow-lg text-sm w-[160px]">
                                      <div className="bg-[#0047AB] capitalize text-white font-medium px-3 py-1">
                                        {label}
                                      </div>
                                      <div className="bg-white px-3 py-2 text-center">
                                        <p className="text-[#0A6BDB] font-medium">Pendapatan</p>
                                        <p className="text-[#0A6BDB] font-bold">Rp 200.000</p>
                                      </div>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />


                              <Area
                                type="linear"
                                dataKey="pendapatan"
                                stroke="none"
                                fill="url(#colorPendapatan)"

                                dot={(props: any) => {
                                  const { cx, cy, payload } = props;
                                  if (payload.pendapatan === 0) {
                                    return <circle cx={cx} cy={cy} r={0.0001} fill="none" />;
                                  }
                                  return (
                                    <circle
                                      cx={cx}
                                      cy={cy}
                                      r={3}
                                      fill="#0284c7"
                                      stroke="#fff"
                                      strokeWidth={1}
                                    />
                                  );
                                }}
                                activeDot={(props: any) => {
                                  const { cx, cy } = props;
                                  return (
                                    <circle
                                      cx={cx}
                                      cy={cy}
                                      r={10}
                                      fill="#0284c7"
                                      stroke="#fff"
                                      strokeWidth={2}
                                    />
                                  );
                                }}

                                dy={30}
                              />

                              <Line
                                type="monotone"
                                dataKey="pendapatan"
                                stroke="#0284c7"
                                strokeWidth={2}
                                dot={(props: any) => (
                                  <circle
                                    cx={props.cx}
                                    cy={props.cy}
                                    r={props.payload.pendapatan === 0 ? 0.0001 : 1.5}
                                    fill="#0284c7"
                                  />
                                )}
                              />

                            </AreaChart>
                          </ResponsiveContainer>

                              </div>
                                </div>
            </div>
           <div className="bg-white col-span-2 rounded-lg shadow-[-5px_2px_14px] shadow-black/25 p-6 flex flex-col  w-full">
              <h2 className="text-[14px] font-bold">
                Distribusi Paket <span className="bg-gradient-to-br text-[12px] from-[#247599] to-[#3CC2FF] ms-[17px] text-transparent bg-clip-text">Hasanah Hana</span>
              </h2>
            <div className="flex flex-col w-full h-12/12 items-center space-x-[29px] justify-center">

              <div className="min-w-[160px] h-[160px] mx-auto">
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
                        innerRadius={45}
                        outerRadius={75}
                        dataKey="value"
                        stroke="none"
                        >
                <Cell fill="url(#regulerGradient)" />
                <Cell fill="#001A4D" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
                </div>



                <div className="flex space-x-4 mt-[24px] justify-center">
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
          <div className=" mt-[30px] h-full w-11/12 shadow-[-5px_2px_14px] shadow-black/25 rounded-xl p-6  grid grid-cols-2">

            <div className="flex flex-col space-y-[20px] border-e-2">
              <h2 className="font-bold text-lg ">Paket Aktif</h2>
              <div className="flex justify-center mt-[50px] space-x-5 items-center">
                {/* <div className="flex space-x-6 items-end">
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
                  </div> */}
                <div className="w-7/12 h-[200px] grid grid-cols-2">
                                     <div className="min-w-[180px] h-[160px] flex flex-col items-center mx-auto">
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
                outerRadius={75}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="url(#regulerGradient)" />
                <Cell fill="#001A4D" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
                 <div className="flex flex-col mt-7">
                    <div className="flex  flex-col items-center space-x-2">
                      <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#0D78F3]" />                          
                      <h1>Reguler</h1>
                      </div>
                      <h1 className="font-bold text-[20px]">80%</h1>
                    </div>
                   
                    <div className="flex flex-col items-center space-x-2">
                      <div className="flex items-center space-x-2">

                      <div className="w-3 h-3 rounded-full bg-[#001A4D]" />
                      
                      <h1>Plus</h1>
                      </div>
                      <h1 className="font-bold text-[20px]">20%</h1>
                    </div>
                  </div>
                  </div>
                </div>

              {/* <div className="flex flex-col text-sm items-center w-full space-y-2">
                
                <div className="grid grid-cols-[150px_auto] items-center gap-x-2">
                  <div className="flex items-center gap-2">
                    <img src={packageIconn} alt="package Icon" className="w-[14px] h-[16px]" />
                    <span className="text-blue-500">Reguler</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>:</span>
                    <span>Rp1.536.000.000</span>
                  </div>
                </div>

              
                <div className="grid grid-cols-[150px_auto] items-center gap-x-2">
                  <div className="flex items-center gap-2">
                    <img src={packageIconn} alt="package Icon" className="w-[14px] h-[16px]" />
                    <span className="text-blue-900">Plus</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>:</span>
                    <span>Rp420.000.000</span>
                  </div>
                </div>

             
                <div className="grid grid-cols-[130px_auto] ms-8 items-center gap-x-2 font-bold ">
                  <span>Total</span>
                  <div className="flex items-center gap-1">
                    <span>:</span>
                    <span>Rp1.956.000.000</span>
                  </div>
                </div>
              </div> */}


            </div>

            <div className="w-full flex flex-col justify-center">
              <div className="flex w-full justify-end mb-4">
                <select
                  value={tahun}
                  onChange={(e) => setTahun(e.target.value)}
                  className="bg-gradient-to-r from-[#008FE2] to-[#5CE9FF] text-white text-xs px-3 py-1 rounded-full"
                >
                  <option>2025</option>
                  <option>2024</option>
                </select>
              </div>
              <div className="w-full flex flex-col items-center">

                <div className="space-y-2 w-9/12">
                  {dataMonthly.map((item, idx) => {
                    const isActive = item.bulan === "Okt";
                    return (
                      <div key={idx} className="w-[100%] flex items-center space-x-2">
                        <span
                          className={`w-[35px] text-right ${isActive ? "font-bold text-[#004492] text-[20px]" : "text-[11px]"
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
                          <h1
                            className={` flex items-center w-fit justify-self-end text-[#008FE2]  ${isActive ? "font-bold text-[15px]" : "font-semibold text-[10px]"
                              }`}
                          >
                            {item.value}
                          </h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          <div className="mt-[42px] px-[37px] py-[16px] w-11/12 col-span-2 h-fit pb-10 shadow-[-5px_2px_14px] shadow-black/25 rounded-xl">
            <h1 className="font-bold text-[14px]">Aktivitas</h1>
            <div className="ms-[22px] mt-[21px] flex space-x-[38px]">
              <div className="text-center">
                <h1 className="text-[12px] font-semibold">Pesanan Paket</h1>
                <div className="w-[40px] h-[6px] mt-1 mx-auto rounded-full bg-gradient-to-r from-[#00E0FF] to-[#0D78F3]" />
              </div>
              <h1 className="text-[12px] font-semibold">
                Paket Aktif
              </h1>
              <h1 className="text-[12px] font-semibold">
                Paket Promo
              </h1>
            </div>
            <div className="mt-[17px]">
              <table className="w-full text-sm">
                <thead className="bg-[#DAFCFF] text-left">
                  <tr>
                    <th className="capitalize py-[15px] ps-[23px] font-medium text-[12px]">Nama Paket</th>
                    <th className="capitalize py-[15px] ps-[23px] font-medium text-[12px]">Nama Pemesan</th>
                    <th className="capitalize py-[15px] ps-[23px] font-medium text-[12px]">Harga Bayar</th>
                    <th className="capitalize py-[15px] ps-[23px] font-medium text-[12px]">Status</th>
                    <th className="capitalize py-[15px] ps-[23px] font-medium text-[12px]">Waktu Pesan</th>
                  </tr>
                </thead>
                <tbody className="text-left">
                  <tr>
                    <td className="capitalize py-[15px] ps-[23px] text-[12px]">Umroh Amanah</td>
                    <td className="capitalize py-[15px] ps-[23px] text-[12px]">Gunawan</td>
                    <td className="py-[15px] ps-[23px] text-[12px]">Rp6.000.000</td>
                    <td className="capitalize py-[15px] ps-[23px] text-[12px]">Uang Muka</td>
                    <td className="py-[15px] ps-[23px] text-[12px]">10/05/2025</td>
                  </tr>
                  <tr>
                    <td className="capitalize py-[15px] ps-[23px] text-[12px]">Umroh Plus Amanah</td>
                    <td className="capitalize py-[15px] ps-[23px] text-[12px]">Asep Hitla Husomad</td>
                    <td className="py-[15px] ps-[23px] text-[12px]">Rp20.000.000</td>
                    <td className="capitalize py-[15px] ps-[23px] text-[12px]">Lunas</td>
                    <td className="py-[15px] px-4 text-[12px]">12/05/2025</td>
                  </tr>
                </tbody>
              </table>
              <div className="relative w-full">
                <h2 className="text-[12px] absolute mt-3 right-0 font-bold bg-gradient-to-r from-[#004492] to-[#10F5EA] bg-clip-text text-transparent">
                  lihat lebih banyak
                </h2>
              </div>
            </div>
          </div>

           <div className="mt-[42px] px-[37px] py-[16px] w-11/12 col-span-2 h-fit pb-10 shadow-[-5px_2px_14px] shadow-black/25 rounded-xl">
            <h1 className="font-bold text-[14px]">Hotel Terdaftar</h1>
            <div className="mt-[32px] overflow-x-auto overflow-y-hidden max-w-[95%] mx-auto">
  <div className="flex space-x-4 w-max">
    {[1, 2, 3].map((_, index) => (
      <div
        key={index}
        className="bg-[#0030EE] shadow-black/25 shadow-[0px_1px_4.5px] rounded-r-[10px] h-[60px] flex min-w-[300px] transition-all duration-300"
      >
        <img
          src={hotelExample}
          alt="hotel picture"
          className="w-[70px] h-[60px] rounded-s-[3px]"
        />
        <div className="flex flex-col justify-center p-3 w-full">
          <div className="flex items-center space-x-2">
            <span className="text-[15px] font-semibold text-white">Hotel Al-habssy fath</span>
            <span className="text-[#F0E260] text-[11px]">★ ★ ★ ★ ★</span>
          </div>
          <h1 className="text-[10px] font-medium text-white">200 meter ke masjidil haram</h1>
        </div>
      </div>
    ))}
  </div>
</div>

          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
