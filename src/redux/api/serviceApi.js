import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "service",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getService: builder.query({
      query: ({ searchValue, minPrice, maxPrice, sortBy, page, limit }) => ({
        url: `/service?search=${searchValue}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}&limit=${limit}&page=${page}`,
      }),
    }),
    getSingleService: builder.query({
      query: (id) => ({
        url: `/service/${id}`,
      }),
    }),
    getAvailableService: builder.query({
      query: () => ({
        url: `/service/available`,
      }),
    }),
  }),
});

export const {
  useGetServiceQuery,
  useGetSingleServiceQuery,
  useGetAvailableServiceQuery,
} = serviceApi;
