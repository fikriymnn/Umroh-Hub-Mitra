import axios from "axios";
import { Package } from "../types/Package";

export async function addPackage (data: Package) {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/addPackage`, 
        data,
        {withCredentials: true}
    );
};

export async function getAllPackageMitra () {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/packageMitra`,
        {withCredentials: true}
    );
};

export async function getOnePackageMitra (id: number | string) {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOnePackageUmroh/${id}`,
        {withCredentials: true}
    );
};

export async function getAllCategory () {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllCategory`)
}; 

export async function getAllLocation () {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllLocation`)
}; 

export async function getAllType () {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllType`)
}; 