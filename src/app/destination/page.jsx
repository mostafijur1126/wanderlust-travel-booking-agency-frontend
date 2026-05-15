import DestinationCard from "@/components/DestinationCard";
import React from "react";

const AddDestinationPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
  const data = await res.json();
  //   console.log(data);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-2xl font-bold pb-5">
        All destination : {data.length}
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {data.map((destination) => {
          return (
            <DestinationCard
              key={destination._id}
              destination={destination}
            ></DestinationCard>
          );
        })}
      </div>
    </div>
  );
};

export default AddDestinationPage;
