import BookCard from "@/components/BookCard";
import { DeleteModal } from "@/components/DeleteModal";
import { EditModal } from "@/components/EditModal";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaEdit, FaMapMarkerAlt } from "react-icons/fa";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  //   console.log(id);
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destinstion = await res.json();
  //   console.log(destinstion);
  const {
    description,
    country,
    departureDate,
    destinationName,
    imageUrl,
    price,
  } = destinstion;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-end gap-2 mb-4">
        <EditModal destinstion={destinstion}></EditModal>
        <DeleteModal destinstion={destinstion}></DeleteModal>
      </div>
      <div>
        <Image src={imageUrl} alt={destinationName} width={700} height={400} />
      </div>
      <div className="flex  justify-between p-4">
        <div className="flex-2">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <p>{country}</p>
          </div>
          <div>
            <h2>{destinationName}</h2>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt />
            <p>{departureDate}</p>
          </div>
          <div>
            <h2 className="pt-5 text-2xl font-bold">Overvew</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="flex-1">
          <BookCard destinstion={destinstion}></BookCard>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
