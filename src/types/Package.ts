import { Hotel } from "./Hotels";

export interface Mitra {
  id: number;
  name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  compamy_name: string;
  website: string;
  nib: string;
  npwp: string;
  siup: string;
  siuppiu: string;
  akta: string;
  image_url: string;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
}
  
  export interface PackageFacility {
    id: number;
    id_package: number;
    description: string;
    is_active: boolean | null;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface DetailActivity {
    id: number;
    id_schedule: number;
    note: string;
    activity: string;
    time: string;
    is_active: boolean | null;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface PackageSchedule {
    id: number;
    id_package: number;
    title: string;
    is_active: boolean | null;
    image_url: string;
    createdAt: string;
    updatedAt: string;
    detail_activities: DetailActivity[];
  }
  
  export interface MasterTypeDeparture {
    id: number;
    type_name: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface MasterCategoryDeparture {
    id: number;
    category_name: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface MasterLocationDeparture {
    id: number;
    location_name: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Package {
    id: number;
    id_mitra: number;
    id_location_departure: number;
    id_category_departure: number;
    package_name: string;
    description: string;
    date_departure: string;
    airline: string;
    duration: number;
    quota: number;
    quota_update: number;
    price: number;
    is_active: boolean;
    id_type_departure: number;
    createdAt: string;
    updatedAt: string;
    Mitra: Mitra;
    master_type_departure: MasterTypeDeparture;
    master_category_departure: MasterCategoryDeparture;
    master_location_departure: MasterLocationDeparture;
    package_hotels: Hotel[];
    package_facilities: PackageFacility[];
    package_schedules: PackageSchedule[];
  }
  