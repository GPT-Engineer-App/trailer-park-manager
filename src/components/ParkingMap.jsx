import React from "react";
import { useDrop } from "react-dnd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ParkingMap = ({ onDropTrailer }) => {
  const renderSpaces = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <DroppableSpace key={index} index={index} onDropTrailer={onDropTrailer} />
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

const DroppableSpace = ({ index, onDropTrailer }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TRAILER",
    drop: (item) => onDropTrailer(item.id, index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`w-12 h-12 border border-gray-300 flex items-center justify-center ${isOver ? "bg-blue-200" : ""}`}
    >
      {index + 1}
    </div>
  );
};

export default ParkingMap;