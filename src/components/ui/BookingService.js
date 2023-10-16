import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useCreateBookingMutation } from "src/redux/api/bookApi";
import {
  getAccessToken,
  getDecodedeAccessToken,
} from "src/utiles/localStorage";

const BookingService = ({ id }) => {
  const accessToken = getAccessToken();
  console.log(accessToken);
  const user = getDecodedeAccessToken();
  const [createBooking] = useCreateBookingMutation();
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(new Date().getMonth() + 1), // Fixed this line to set the end date to one month from today
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const handleBooking = async () => {
    console.log("hi");
    const bookingData = {
      date: value,
      serviceId: id,
      userId: user?.id,
    };
    try {
      const result = await createBooking(bookingData, {
        headers: {
          authorization: `Bearer ${accessToken}`,

          "Content-Type": "application/json",
        },
      });

      console.log("Booking response:", result);
    } catch (error) {
      console.error("Booking error:", error);
    }
  };

  return (
    <div>
      <Datepicker value={value} onChange={handleValueChange} />

      <button onClick={handleBooking}>Book</button>
    </div>
  );
};

export default BookingService;
