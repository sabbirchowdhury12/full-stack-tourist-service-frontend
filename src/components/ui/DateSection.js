import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const titleStyle = "font-medium mb-2";

const DatePicker = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  console.log(value);

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
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
    <div className="w-4/5 mb-48 bg-white  mx-auto border mt-5 shadow-xl p-5 rounded-3xl flex justify-between flex-col lg:flex-row jost-font">
      <div className=" font-medium mb-4 lg:mb-0 border-b lg:border-r lg:border-b-0 lg:border-primary pb-2 lg:pb-0">
        <p className={titleStyle}>Location</p>
        <input
          type="text"
          className="border-black text-sm py-1 mt-1"
          placeholder="Where you want to go?"
        />
      </div>
      <div
        className={
          "font-medium mb-4 lg:mb-0 border-b lg:border-r lg:border-b-0 lg:border-primary pb-2 lg:pb-0"
        }
      >
        <p className={`${titleStyle} lg:pl-4`}>Check in - Check out</p>{" "}
        <DatePicker />{" "}
      </div>
      <div className="relative">
        <div onClick={() => setGuest(!guest)}>
          <p className={titleStyle}>Guest</p>
          <p className="text-gray-400 mt-4 text-sm jost-font">
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
    </div>
  );
};

export default DateSection;
