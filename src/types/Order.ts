import { Package } from "./Package";
import { Partner } from "./Partners";

export interface User {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    phone_number?: number | string;
    address?: string;
    no_ktp?: number | string;
    image_url?: string;
    is_active?: boolean;
};

export interface Jamaah {
    id?: number;
    id_order?: number;
    name?: string;
    email?: string;
    gender?: string;
    phone_number?: string;
    kk_url?: string;
    ktp_url?: string;
    passport_url?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Order {
    id?: number;
    id_user?: number;
    id_mitra?: number;
    id_package?: number;
    departure_status?: boolean;
    order_id?: string;
    order_status?: string;
    payment_method?: string;
    payment_status?: string;
    review_status?: boolean;
    bank?: string;
    no_rek?: string | number;
    by_name_of?: string;
    transaction_proof_url?: string;
    subtotal?: string;
    createdAt?: string;
    updatedAt?: string;
    jamaah?: Jamaah[];
    mitra?: Partner;
    package_umroh?: Package;
    user?: User;
};