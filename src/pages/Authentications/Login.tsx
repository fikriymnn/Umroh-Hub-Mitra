import bg from '../../assets/images/Group (1).png'
import useLogin from '../../hooks/auth/useLogin';

function Login() {
    const {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin
    } = useLogin();

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#DAFAFF]">
            <div className="relative w-9/12 bg-white h-[573px] grid grid-cols-2 overflow-hidden rounded-[10px] shadow-lg">

                <div className="w-full h-full px-10 py-12 items-center">
                    <h2 className="text-[20px] font-medium mt-5 text-[#004492] ml-[80px]">Selamat Datang MITRA</h2>
                    <h1 className="text-[36px] text-[#004492] ml-[80px] font-philosopher">Umroh<span className='font-bold'>Hub</span></h1>
                    <div className='mt-[26px]'>
                        <p className="text-sm text-[#C0C0C0] ml-[85px] mb-1">Masukan Akun Mitra UmrohHub</p>
                        <div className="flex flex-col space-y-4 items-center">
                            <input
                                type="text"
                                name='name'
                                value={name}
                                className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
                                placeholder='Nama Mitra'
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                name='email'
                                value={email}
                                className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                name='password'
                                value={password}
                                className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={handleLogin}
                                className="bg-gradient-to-r font-bold from-[#004492] to-[#0A6BDB] text-white py-2 flex items-center justify-center rounded-[20px] mt-2 w-[106px] h-[32px]"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full bg-gradient-to-br from-[#3C97FF] to-primary-blue text-white relative overflow-hidden">
                    {/* Background image */}
                    <img
                        src={bg}
                        alt="background"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
                    />

                    {/* Konten */}
                    <div className="relative z-10 flex flex-col items-center mt-[25px] h-full p-10 text-center">
                        <h2 className="text-[30px] font-medium">Masuk ke</h2>
                        <h1 className="text-[64px] mb-6 font-philosopher">Umroh<span className='font-bold'>Hub</span></h1>
                        <p className="text-[15px] w-7/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login