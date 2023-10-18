import React from "react";

const data = [
  {
    name: "Best Price Guarantee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    svg: "",
  },
  {
    name: "Easy & Quick Booking",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    svg: "",
  },
  {
    name: "Customer Care 24/7",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    svg: "",
  },
];
const ExtraFeature = () => {
  return (
    <div>
      <p className="uppercase font-bold text-3xl text-primary text-center mb-2">
        About Us
      </p>
      <p className="uppercase font-bold text-sm text-secondary text-center mb-10">
        These popular destinations have a lot to offer
      </p>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-between text-center">
        {data.map((d) => {
          return (
            <div>
              <p>{d.name}</p>
              <p>{d.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExtraFeature;
