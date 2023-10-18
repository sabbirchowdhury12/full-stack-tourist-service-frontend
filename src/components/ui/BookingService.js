import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Datepicker from "react-tailwindcss-datepicker";
import { useCreateBookingMutation } from "src/redux/api/bookApi";
import { getDecodedeAccessToken } from "src/utiles/localStorage";

const BookingService = ({ service }) => {
  const [user, setUser] = useState(null);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(new Date().getMonth() + 1),
  });

  useEffect(() => {
    const user = getDecodedeAccessToken();
    setUser(user);
  }, []);

  const [createBooking] = useCreateBookingMutation();

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const handleBooking = async () => {
    if (!user) {
      toast.error("User not authenticated.");
      return;
    }

    const bookingData = {
      date: value,
      serviceId: service?.id,
      userId: user?.id,
    };

    try {
      const result = await createBooking(bookingData).unwrap();
      if (result.success === true) {
        toast.success(result.message);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred.");
    }
  };

  return (
    <div className="p-5 w-full">
      <Toaster />
      <div className="flex items-center justify-between mb-5">
        <p>
          <span className="text-xl text-primary font-semibold">
            US${service?.price}
          </span>{" "}
          <span className="text-sm">nights</span>
        </p>
        <div className="uppercase text-center font-semibold text-sm ">
          <p> {service?.status}</p>
          <span> 1000 reviews</span>
        </div>
      </div>
      <p className=" border-b-2 mb-4 border-primary   pb-2"> Select Date:</p>
      <Datepicker
        primaryColor={"blue"}
        showShortcuts={true}
        value={value}
        onChange={handleValueChange}
      />
      <button
        className="bg-primary text-white w-full p-2 mt-10 rounded"
        onClick={handleBooking}
      >
        Book
      </button>
    </div>
  );
};

export default BookingService;
