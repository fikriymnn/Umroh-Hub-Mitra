import {useState} from 'react';
import { useNavigate } from 'react-router';
import { login } from '../../services/authServices';
import axios, { isAxiosError } from 'axios';

const useLogin = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
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
            if (isAxiosError(error)) {
                const message = error.response?.data.message || 'Terjadi kesalahan saat login';
                alert(message);
                console.error(`Error: ${message}`);
            }
        }
    };

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
