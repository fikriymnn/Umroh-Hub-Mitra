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

export interface MonthlyStatistics {
    month: number;
    totalPackage: number;
    totalPackagePlus: number;
    totalPackageRegular: number;
    totalSubTotal: string | number;
    totalTransactions: number;
};

export interface ChartData {
    monthlyStatistics: MonthlyStatistics[];
    packagePlusYears: number;
    packageRegularYears: number
    year: string
};