export interface Dashboard {
    allJamaah: number;
    allPackage: number;
    order: number;
    packageActive: number;
    packagePlus: number;
    packageRegular: number;
    thisMonth: number;
    totalRevenueThisMonth: number
};

export interface Income {
    month: number;
    totalPackage: number;
    totalPackagePlus: number;
    totalPackageRegular: number;
    totalSubTotal: string | number;
    totalTransactions: number;
};