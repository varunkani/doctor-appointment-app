import React, { useState } from 'react';

const AppointmentForm = ({ doctor, onBack }) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with Dr. ${doctor.name} at ${time} for ${name}`);
    setName('');
    setTime('');
  };

  return (
    <div className="p-4 border rounded shadow">
      <button onClick={onBack} className="text-blue-500 mb-2">&larr; Back</button>
      <h2 className="text-xl font-bold mb-4">Book Appointment with {doctor.name}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select
          className="border p-2 w-full"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select Time</option>
          {doctor.schedule.map((slot, idx) => (
            <option key={idx} value={slot}>{slot}</option>
          ))}
        </select>
        <button type="submit" className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
