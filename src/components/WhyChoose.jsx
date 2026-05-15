import React from "react";
import { MdSecurity } from "react-icons/md";

const WhyChoose = () => {
  const cards = [
    {
      icon: <MdSecurity />,
      title: "Safe & Secure",
      description:
        "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
    {
      icon: <MdSecurity />,
      title: "Expert Guides",
      description:
        "Local experts who bring destinations to life with authentic cultural insights.",
    },
    {
      icon: <MdSecurity />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service to assist you wherever your journey takes you.",
    },
  ];
  return (
    <div className="bg-[#EDFCFF] ">
      <div className="py-20 max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center">
          Why Choose Wanderlust
        </h1>
        <p className="text-muted text-center">
          Your trusted partner for exceptional travel experiences
        </p>
        <div className="grid grid-cols-3 gap-5 py-10">
          {cards.map((card) => (
            <div key={card.title} className=" p-5 bg-white space-y-2">
              <div className="text-3xl text-cyan-500">{card.icon}</div>
              <h1 className="text-2xl">{card.title}</h1>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
