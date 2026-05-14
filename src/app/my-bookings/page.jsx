import { CancelAlertModal } from "@/components/CancelAlertModal";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  // console.log(user);

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
  const bookings = await res.json();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl">My Bokkings</h1>
      <p>Manage and view your upcoming travel plans</p>
      <div className="py-10 space-y-5">
        {bookings.map((booking) => (
          <div key={booking._id} className="min-w-3xl border p-4 flex gap-5">
            <div>
              <Image
                src={booking.imageUrl}
                alt={booking.destinationName}
                height={200}
                width={200}
              ></Image>
            </div>
            <div className="w-full">
              <p className="text-2xl font-bold">{booking.destinationName}</p>
              <p>
                Departure:{" "}
                {new Date(booking.departureDate).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>Booking ID: {booking._id}</p>
              <div className="flex justify-between">
                <p className="text-3xl font-bold text-cyan-500">
                  $ {booking.price}
                </p>
                <CancelAlertModal booking={booking._id}></CancelAlertModal>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
