import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Doctor Appointment Booking
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Select Doctor
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Dr. Asha Reddy (Cardiologist)</option>
              <option>Dr. Ravi Kumar (Dermatologist)</option>
              <option>Dr. Sneha Verma (Pediatrician)</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Appointment Time
            </label>
            <input
              type="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
