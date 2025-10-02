import React from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import dashboardIcon from "../../../assets/icons/Home.svg";
import profileExample from "../../../assets/images/profile_placeholder (1).png";
import editIcon from "../../../assets/icons/Edit_fill (1).svg";
import ProfileMenu from "../../../components/ProfileMenu";
import useLogOut from "../../../hooks/auth/useLogOut";
import useAccountDetail from "../../../hooks/AccountDetail/useAccountDetail";
import useEditAccount from "../../../hooks/AccountDetail/useEditAccount";
// import vector from "../../assets/images/Group (1).png";
const EditAccount: React.FC = () => {
  const { partner } = useAccountDetail();
  const {
    name,
    setName,
    siuppiu,
    setSiuppiu,
    company,
    setCompany,
    address,
    setAddress,
    website,
    setWebsite,
    email,
    setEmail,
    handleUpdate
  } = useEditAccount();
  const {
    openDropdown, setOpenDropdown,
    handleLogOut
  } = useLogOut();

  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <div className="flex">
            <img src={dashboardIcon} alt="dashboard icon" className="w-[20px] h-[20px]" />
            <h1 className="text-primary-blue font-medium">Detail Akun - <span className="text-[12px]">Edit Profile</span></h1>
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
          <div className="w-[205px] flex justify-center relative h-[180px]">
            <img
              src={profileExample}
              alt="profile"
              className="w-[175px] h-[175px] rounded-full"
            />

            {/* Edit icon disamping kanan bawah */}
            <div className="absolute bottom-6 right-0">
              <img
                src={editIcon}
                alt="edit icon"
                className="w-[30px] h-[30px] cursor-pointer"
              />
            </div>
          </div>



          <div className="w-10/12 h-full mt-[33px] gap-4">
            <div className="bg-white shadow-[-1px_6px_19px] shadow-black/25 w-full pt-[50px] px-[45px] pb-[33px]">
              {partner && (
                <div className="grid grid-cols-3 gap-6">

                  <div className="flex flex-col">
                    <label htmlFor="partners name" className="text-[#414141] text-[16px] mb-1">Nama Mitra</label>
                    <input
                      type="text"
                      name="partners name"
                      value={name}
                      defaultValue={partner.name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded-[10px] bg-white outline-none"
                      style={{
                        boxShadow: 'inset 0px 0px 3.8px rgba(0, 0, 0, 0.25)'
                      }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="company name" className="text-[#414141] text-[16px] mb-1">Nama Perusahaan</label>
                    <input
                      type="text"
                      name="company name"
                      value={company}
                      defaultValue={partner.company_name}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3 py-2 rounded-[10px] bg-white outline-none"
                      style={{
                        boxShadow: 'inset 0px 0px 3.8px rgba(0, 0, 0, 0.25)'
                      }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="website" className="text-[#414141] text-[16px] mb-1">Website</label>
                    <input
                      type="text"
                      name="website"
                      value={website}
                      defaultValue={partner.website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full px-3 py-2 rounded-[10px] bg-white outline-none"
                      style={{
                        boxShadow: 'inset 0px 0px 3.8px rgba(0, 0, 0, 0.25)'
                      }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="license number" className="text-[#414141] text-[16px] mb-1">Nomor Izin</label>
                    <input
                      type="text"
                      name="license number"
                      value={siuppiu}
                      defaultValue={partner.siuppiu}
                      onChange={(e) => setSiuppiu(e.target.value)}
                      className="w-full px-3 py-2 rounded-[10px] bg-white outline-none"
                      style={{
                        boxShadow: 'inset 0px 0px 3.8px rgba(0, 0, 0, 0.25)'
                      }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="location" className="text-[#414141] text-[16px] mb-1">Lokasi</label>
                    <input
                      type="text"
                      name="location"
                      value={address}
                      defaultValue={partner.address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 rounded-[10px] bg-white outline-none"
                      style={{
                        boxShadow: 'inset 0px 0px 3.8px rgba(0, 0, 0, 0.25)'
                      }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-[#414141] text-[16px] mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      defaultValue={partner.email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-[10px] bg-white outline-none"
                      style={{
                        boxShadow: 'inset 0px 0px 3.8px rgba(0, 0, 0, 0.25)'
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end mt-8">
              <button
                className="bg-[#013293] text-white text-[16px] font-medium rounded-[5px] px-8 py-2"
                onClick={handleUpdate}
              >
                Simpan
              </button>
            </div>
          </div>

        </div>
      </div>
    </DefaultLayout>
  );
};

export default EditAccount;
