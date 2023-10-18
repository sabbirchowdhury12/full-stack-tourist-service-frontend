import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const titleStyle = "font-medium mb-2";

const DatePicker = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return <Datepicker value={value} onChange={handleValueChange} />;
};

const DateSection = () => {
  const [guest, setGuest] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);
  const [rooms, setRooms] = useState(1);

  const handleIncrease = (value, setter) => {
    setter(value + 1);
  };

  const handleDecrease = (value, setter) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  return (
    <div className="w-4/5  bg-white  mx-auto border mt-5 shadow-xl  rounded flex justify-between flex-col lg:flex-row lg:py-4">
      <div className=" p-5 font-medium mb-4 lg:mb-0 border-b-2 lg:border-r lg:border-b-0  pb-2 lg:pb-0">
        <p className={titleStyle}>Location</p>
        <input
          type="text"
          className="border-black text-sm py-1 mt-1 placeholder:text-deep_primary"
          placeholder="Where you want to go?"
        />
      </div>
      <div
        className={
          " p-5 font-medium mb-4 lg:mb-0 border-b-2 lg:border-r lg:border-b-0  pb-2 lg:pb-0"
        }
      >
        <p className={`${titleStyle} lg:pl-4`}>Check in - Check out</p>{" "}
        <DatePicker />{" "}
      </div>
      <div className="relative p-5   lg:mb-0  pb-4 lg:pb-0">
        <div onClick={() => setGuest(!guest)}>
          <p className={titleStyle}>Guest</p>
          <p className="text-deep_primary mt-4 text-sm ">
            {adults} Adults - {children} Childrens - {rooms} Rooms
          </p>
        </div>
        {guest && (
          <div className="absolute shadow-lg bg-white top-20  p-5 gap-10">
            <div className="flex  w-72 justify-between items-center mb-5 border-b border-primary pb-5">
              <p>Adults</p>
              <div>
                <span
                  className="border font-semibold border-primary p-2 rounded text-primary"
                  onClick={() => handleDecrease(adults, setAdults)}
                >
                  -
                </span>
                <span className="mx-4">{adults}</span>
                <span
                  className="border font-semibold border-primary p-2 rounded text-primary"
                  onClick={() => handleIncrease(adults, setAdults)}
                >
                  +
                </span>
              </div>
            </div>
            <div className="flex  w-72 justify-between items-center mb-5 border-b border-primary pb-5">
              <p>Children</p>
              <div>
                <span
                  className="border font-semibold border-primary p-2 rounded text-primary"
                  onClick={() => handleDecrease(children, setChildren)}
                >
                  -
                </span>
                <span className="mx-4">{children}</span>
                <span
                  className="border font-semibold border-primary p-2 rounded text-primary"
                  onClick={() => handleIncrease(children, setChildren)}
                >
                  +
                </span>
              </div>
            </div>
            <div className="flex  w-72 justify-between items-center mb-5 border-b border-primary pb-5">
              <p>Rooms</p>
              <div>
                <span
                  className="border font-semibold border-primary p-2 rounded text-primary"
                  onClick={() => handleDecrease(rooms, setRooms)}
                >
                  -
                </span>
                <span className="mx-4">{rooms}</span>
                <span
                  className="border font-semibold border-primary p-2 rounded text-primary"
                  onClick={() => handleIncrease(rooms, setRooms)}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center  gap-2 bg-sub_primary p-5 text-center text-white font-semibold ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z"
            fill="#FFF"
          />
        </svg>
        <span> Search</span>
      </div>
    </div>
  );
};

export default DateSection;
