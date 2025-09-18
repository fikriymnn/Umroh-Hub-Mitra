import React, { useEffect, useState } from 'react';
import { PackageSchedule, DetailActivity } from '../../../types/Package';
import { savePackageSchedules } from '../../../utils/storage';
import { useNavigate } from 'react-router';

const useTravelDuration = () => {
    const navigate = useNavigate();
    const [schedules, setSchedules] = useState<PackageSchedule[]>([]);

    useEffect(() => {
        if (schedules.length === 0) {
            setSchedules([
                {
                title: '',
                details: [
                    {
                    time: '',
                    activity: '',
                    note: ''
                    }
                ]
                }
            ]);
        }
    }, []);

    const handleChangeField = (
        e: React.ChangeEvent<HTMLInputElement>,
        dayIndex: number,
        activityIndex: number | undefined,
        field: keyof DetailActivity | 'title'
    ) => {
        const newSchedules = [...schedules];

        if (activityIndex === undefined) {
            // Ubah judul hari
            if (field === 'title') {
                newSchedules[dayIndex].title = e.target.value;
            }
            } else {
            // Ubah detail aktivitas
            const details = newSchedules[dayIndex].details;
            if (field === 'time') {
                details[activityIndex].time = e.target.value;
            } else if (field === 'activity') {
                details[activityIndex].activity = e.target.value;
            } else if (field === 'note') {
                details[activityIndex].note = e.target.value;
            }  
        }

        setSchedules(newSchedules);
    };

    const handleAddActivity = (dayIndex: number) => {
        const newSchedules = [...schedules];

        if (!newSchedules[dayIndex].details) {
        newSchedules[dayIndex].details = [];
        }

        newSchedules[dayIndex].details!.push({
        time: '',
        activity: '',
        note: ''
        });

        setSchedules(newSchedules);
    };

    const handleRemoveActivity = (dayIndex: number) => {
        const newSchedules = [...schedules];
        const details = newSchedules[dayIndex].details;

        if (details && details.length > 1) {
        details.pop();
        setSchedules(newSchedules);
        }
    };

    const handleAddDay = () => {
        setSchedules(prev => [
        ...prev,
        {
            title: '',
            details: [
            {
                time: '',
                activity: '',
                note: ''
            }
            ]
        }
        ]);
    };

    const handleDeleteDay = (index: number) => {
        if (schedules.length > 1) {
        const newSchedules = schedules.filter((_, i) => i !== index);
        setSchedules(newSchedules);
        }
    };

    const handleSave = () => {
        try {
            savePackageSchedules(schedules);
            alert('Berhasil kirim data schedules');
            navigate('/Package/AddPackage/PreviewPackage')
        } catch (error) {
            alert('Gagal kirim data schedules');
            console.error(`Error: ${error}`);
        }
    };

    const handleBack = () => {
        try {
            navigate(-1);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    return {
        schedules,
        setSchedules,
        handleChangeField,
        handleAddActivity,
        handleRemoveActivity,
        handleAddDay,
        handleDeleteDay,
        handleSave,
        handleBack
    };
};

export default useTravelDuration;
