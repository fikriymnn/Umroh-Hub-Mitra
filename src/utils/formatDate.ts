export const formatDate = (dateStr: string | Date) => {
    const date = new Date(dateStr);

    const day = String(date.getDay()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

export const formatDateWithDay = (dateStr: string | Date) => {
    const date = new Date(dateStr);

    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const dayName = days[date.getDay()];

    const day = String(date.getDay()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${dayName} ${day}/${month}/${year}`;
};