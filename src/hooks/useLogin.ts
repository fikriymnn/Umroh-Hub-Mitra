import {useState} from 'react';
import { useNavigate } from 'react-router';
import { login } from '../services/authServices';

const useLogin = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        try {
            const res = await login({
                name,
                email,
                password
            });
            console.log(res);
        
            alert('Login berhasil');
            navigate('/home')
        } catch (error) {
            alert('Login gagal')
            console.error(`Error: ${error}`);
        }
    }

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin
    };
};

export default useLogin;
