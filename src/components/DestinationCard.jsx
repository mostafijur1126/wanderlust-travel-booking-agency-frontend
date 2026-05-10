import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DestinationCard = (destination) => {
  const destinationData = destination.destination;
  const { _id, country, departureDate, destinationName, imageUrl, price } =
    destinationData;
  return (
    <div className="border">
      <div>
        <Image src={imageUrl} alt={destinationName} width={300} height={200} />
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
        </div>
        <div>
          <p> $ {price}</p>
        </div>
      </div>
      <Link href={`/destination/${_id}`}>
        <Button variant="ghost" className="text-blue-500">
          <FaExternalLinkAlt />
          Book Now
        </Button>
      </Link>
    </div>
  );
};

export default DestinationCard;
