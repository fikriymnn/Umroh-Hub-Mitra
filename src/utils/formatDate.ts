export const formatDate = (dateStr: string | Date) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
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