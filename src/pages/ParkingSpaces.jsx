import React, { useState } from "react";
import ParkingMap from "@/components/ParkingMap";

const ParkingSpaces = () => {
  const [trailerPositions, setTrailerPositions] = useState({});

  const handleDropTrailer = (trailerId, spaceIndex) => {
    setTrailerPositions((prevPositions) => ({
      ...prevPositions,
      [trailerId]: spaceIndex,
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Parking Spaces</h1>
      <ParkingMap onDropTrailer={handleDropTrailer} />
      <div className="grid grid-cols-1 gap-4">
        {/* Placeholder for parking spaces list */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Parking Space 1</h2>
          <p>Status: Occupied</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Parking Space 2</h2>
          <p>Status: Available</p>
        </div>
      </div>
    </div>
  );
};

export default ParkingSpaces;