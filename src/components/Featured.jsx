import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import DestinationCard from "./DestinationCard";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/features`);
  const featureds = await res.json();
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-10 ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold">Featured Destinations</h1>
            <p className="text-muted">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>
          <Link href="/destination">
            <Button
              variant="outline"
              className="rounded-none border-cyan-500 text-cyan-500"
            >
              ALL DESTINATIONS
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {featureds.map((featured) => (
            <DestinationCard
              key={featured._id}
              destination={featured}
            ></DestinationCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
