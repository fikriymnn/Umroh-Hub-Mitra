import { MasterHotel } from "../types/Hotels";
import { Package, PackageSchedule } from "../types/Package";

export const savePackageCover = (data: Package) => {
    localStorage.setItem('packageCover', JSON.stringify(data));
};

export const getPackageCover = () => {
    const data = localStorage.getItem('packageCover');
    return data ? JSON.parse(data) : null;
};

export const savePackageFasility = (data: Package) => {
    localStorage.setItem('packageFasility', JSON.stringify(data));
};

export const getPackageFasility = () => {
    const data = localStorage.getItem('packageFasility');
    return data ? JSON.parse(data) : null;
};

export const savePackageHotel = (data: MasterHotel[]) => {
    localStorage.setItem('packageHotel', JSON.stringify(data));
};

export const getPackageHotel = () => {
    const data = localStorage.getItem('packageHotel');
    return data ? JSON.parse(data) : null;
};

export const savePackageSchedules = (data: PackageSchedule[]) => {
    localStorage.setItem('packageSchedules', JSON.stringify(data));
};

export const getPackageSchedules = () => {
    const data = localStorage.getItem('packageSchedules');
    return data ? JSON.parse(data) : null;
};

export const clearPackageData = () => {
    localStorage.removeItem('packageCover');
    localStorage.removeItem('packageFasility');
    localStorage.removeItem('packageHotel');
    localStorage.removeItem('packageSchedules');
}