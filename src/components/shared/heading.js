import React from "react";

const Heading = ({ title, sub_title }) => {
  return (
    <>
      {" "}
      <p className="uppercase font-bold text-lg md:text-3xl text-primary text-center mb-2">
        {title}
      </p>
      <p className="uppercase font-bold text-xs text-secondary text-center mb-10">
        {sub_title}
      </p>
    </>
  );
};

export default Heading;
