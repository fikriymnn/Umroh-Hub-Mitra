export interface Partner {
    id?: number | undefined;
    name?: string;
    email?: string;
    password?: string;
    phone_number?: number;
    address?: string;
    company_name?: string;
    website?: string
    nib?: string
    npwp?: string
    siup?: string
    siuppiu?: string;
    akta?: string;
    image_url?: string;
    is_active?: boolean;
    createdAt?: string;
    updatedAt?: string;
};

export interface ErrorMessage {
    status_code: number;
    success: boolean;
    message: string;
}