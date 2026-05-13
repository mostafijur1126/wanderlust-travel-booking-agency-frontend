"use client";
import { authClient } from "@/lib/auth-client";
import {
  DateField,
  Label,
  Description,
  FieldError,
  Button,
} from "@heroui/react";
import { Card } from "@heroui/react";
import { json } from "better-auth";
import React, { use, useState } from "react";
import toast from "react-hot-toast";

const BookCard = ({ destinstion }) => {
  const { price, country, destinationName, imageUrl, _id } = destinstion;
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);
  // console.log(new Date(departureDate));

  const handelBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      country,
      price,
      imageUrl,
      departureDate: new Date(departureDate),
    };

    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    toast.success("You booked successfuly");
  };

  return (
    <Card className="rounded-none">
      <p className="text-sm text-muted">Starting form</p>
      <p className="text-3xl font-bold text-cyan-500">${price}</p>
      <p className="text-sm text-muted">Per person</p>
      <p>Departure Date</p>
      <DateField onChange={setDepartureDate}>
        <Label />
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
        <Description />
        <FieldError />
      </DateField>
      <Button
        onClick={handelBooking}
        className="w-full rounded-none bg-cyan-500"
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookCard;
