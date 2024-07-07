import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ParkingMap = () => {
  const renderSpaces = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <div
        key={index}
        className="w-12 h-12 border border-gray-300 flex items-center justify-center"
      >
        {index + 1}
      </div>
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Parking Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="flex space-x-2 mb-2">{renderSpaces(15)}</div>
          <div className="flex space-x-2 mb-2">
            <div className="flex flex-col space-y-2">{renderSpaces(30)}</div>
            <div className="flex flex-col space-y-2">{renderSpaces(30)}</div>
          </div>
          <div className="flex space-x-2">{renderSpaces(15)}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ParkingMap;