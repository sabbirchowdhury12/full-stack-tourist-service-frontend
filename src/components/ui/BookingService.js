import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Datepicker from "react-tailwindcss-datepicker";
import { useCreateBookingMutation } from "src/redux/api/bookApi";
import {
  getAccessToken,
  getDecodedeAccessToken,
} from "src/utiles/localStorage";

const BookingService = ({ id }) => {
  const accessToken = getAccessToken();

  const user = getDecodedeAccessToken();
  const [createBooking] = useCreateBookingMutation();
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(new Date().getMonth() + 1), // Fixed this line to set the end date to one month from today
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const handleBooking = async () => {
    const bookingData = {
      date: value,
      serviceId: id,
      userId: user?.id,
    };
    console.log(bookingData);

    const result = await createBooking({ ...bookingData }).unwrap();
    console.log(result);
    if (result.success == true) {
      toast.success(result.message);
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <div>
      <Toaster />;
      <Datepicker value={value} onChange={handleValueChange} />
      <button onClick={handleBooking}>Book</button>
    </div>
  );
};

export default BookingService;
