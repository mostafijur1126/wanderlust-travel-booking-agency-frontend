import Image from "next/image";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Testimonial = () => {
  const feedback = [
    {
      title:
        "The Bail Trip was absolutely magical! Every detail was perfectly plannec. the resorts were Luxrtuous and the cultural Experiences were unforgttable.",
      name: "Micheael Chen",
      loacation: "Singapore",
      image: "/assets/Rectangle29.png",
    },
    {
      title:
        "The Bail Trip was absolutely magical! Every detail was perfectly plannec. the resorts were Luxrtuous and the cultural Experiences were unforgttable.",
      name: "Sarah Johnson",
      loacation: "New York , USA",
      image: "/assets/Rectangle30.png",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="flex items-center justify-between pb-10">
        <div>
          <h1 className="text-3xl font-semibold">What Travelers Say</h1>
          <p className="text-muted">
            Real experiences from our happy travelers
          </p>
        </div>
        <div className="flex">
          <FaArrowDown></FaArrowDown>
          <FaArrowDown></FaArrowDown>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {feedback.map((card, ind) => (
          <div key={ind} className="flex gap-5 border p-5">
            <div>
              <p className="text-xl">{card.title}</p>
              <div className="pt-5">
                <p className="text-2xl text-cyan-500">-- {card.name}</p>
                <p className="text-muted">{card.loacation}</p>
              </div>
            </div>
            <div>
              <Image
                alt={card.name}
                src={card.image}
                height={400}
                width={400}
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
