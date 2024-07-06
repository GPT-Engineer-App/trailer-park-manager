import React from "react";

const Trailers = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trailers</h1>
      <div className="grid grid-cols-1 gap-4">
        {/* Placeholder for trailers list */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Trailer 1</h2>
          <p>Status: Parked</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Trailer 2</h2>
          <p>Status: In Transit</p>
        </div>
      </div>
    </div>
  );
};

export default Trailers;