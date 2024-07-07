import React, { useState } from "react";
import ParkingMap from "@/components/ParkingMap";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { useDrag } from "react-dnd";

const Index = () => {
  const [trailers, setTrailers] = useState([
    { id: 1, name: "Trailer 1", orders: ["Order 1", "Order 2"] },
    { id: 2, name: "Trailer 2", orders: ["Order 3"] },
  ]);
  const [newOrder, setNewOrder] = useState("");
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [trailerPositions, setTrailerPositions] = useState({});

  const handleAddOrder = (trailerId) => {
    setTrailers((prevTrailers) =>
      prevTrailers.map((trailer) =>
        trailer.id === trailerId
          ? { ...trailer, orders: [...trailer.orders, newOrder] }
          : trailer
      )
    );
    setNewOrder("");
  };

  const handleRemoveOrder = (trailerId, order) => {
    setTrailers((prevTrailers) =>
      prevTrailers.map((trailer) =>
        trailer.id === trailerId
          ? {
              ...trailer,
              orders: trailer.orders.filter((o) => o !== order),
            }
          : trailer
      )
    );
  };

  const handleDropTrailer = (trailerId, spaceIndex) => {
    setTrailerPositions((prevPositions) => ({
      ...prevPositions,
      [trailerId]: spaceIndex,
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Yard Management Tool</h1>
      <p className="text-lg mb-4">Use the sidebar to navigate between Trailers, Parking Spaces, and Orders.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Trailers</h2>
          <div className="grid grid-cols-1 gap-4">
            {trailers.map((trailer) => (
              <DraggableTrailer key={trailer.id} trailer={trailer} onRemoveOrder={handleRemoveOrder} onAddOrder={handleAddOrder} setSelectedTrailer={setSelectedTrailer} setNewOrder={setNewOrder} newOrder={newOrder} selectedTrailer={selectedTrailer} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Parking Spaces</h2>
          <ParkingMap onDropTrailer={handleDropTrailer} />
        </div>
      </div>
    </div>
  );
};

const DraggableTrailer = ({ trailer, onRemoveOrder, onAddOrder, setSelectedTrailer, setNewOrder, newOrder, selectedTrailer }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TRAILER",
    item: { id: trailer.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Card ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <CardHeader>
        <CardTitle>{trailer.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {trailer.orders.map((order, index) => (
            <li key={index} className="flex justify-between items-center">
              {order}
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onRemoveOrder(trailer.id, order)}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button onClick={() => setSelectedTrailer(trailer.id)}>
              Add Order
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Order</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Label htmlFor="newOrder">Order Name</Label>
              <Input
                id="newOrder"
                value={newOrder}
                onChange={(e) => setNewOrder(e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button
                onClick={() => onAddOrder(selectedTrailer)}
                disabled={!newOrder}
              >
                Add
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default Index;