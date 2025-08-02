import React from 'react';

const DoctorCard = ({ doctor, onSelect }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg cursor-pointer transition">
      <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h2 className="text-lg font-semibold text-center">{doctor.name}</h2>
      <p className="text-sm text-center text-gray-600">{doctor.specialization}</p>
      <p className="text-sm text-center text-green-600">{doctor.availability}</p>
      <button
        onClick={() => onSelect(doctor)}
        className="mt-4 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
