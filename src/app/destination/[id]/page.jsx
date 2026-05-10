import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
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
      <EditModal destinstion={destinstion}></EditModal>
      <div>
        <Image src={imageUrl} alt={destinationName} width={700} height={400} />
      </div>
      <div className="flex  items-center justify-between p-4">
        <div>
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
        <div>
          <p> $ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
