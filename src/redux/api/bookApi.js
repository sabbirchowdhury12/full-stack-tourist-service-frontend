import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "src/utiles/localStorage";

export const bookingApi = createApi({
  reducerPath: "book",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",

    prepareHeaders: (headers) => {
      const accessToken = getAccessToken();

      if (accessToken) {
        headers.set("authorization", accessToken);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: `booking/create-booking`,
        method: "POST",
        body: bookingData,
      }),
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;
