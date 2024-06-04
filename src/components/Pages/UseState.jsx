import React, { useState } from 'react';

function UseState() {
  const [StudentDetails, setStudentDetails] = useState({
    Id: "1",
    Name: "Ramya",
    Age: "24",
  });

  const handleClick = () => {
    setStudentDetails((prevdata) => {
      return { ...prevdata, Name: "Raji", Age: "22" };
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg font-medium mb-2">Name: {StudentDetails.Name}</p>
        <p className="text-lg font-medium mb-4">Age: {StudentDetails.Age}</p>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default UseState;
