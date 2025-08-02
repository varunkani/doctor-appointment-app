import React from 'react';
import DoctorCard from './DoctorCard';
import doctors from '../data/doctors.json';

const DoctorList = ({ onDoctorSelect }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} onSelect={onDoctorSelect} />
      ))}
    </div>
  );
};

export default DoctorList;
