import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "src/utiles/localStorage";

export const serviceApi = createApi({
  reducerPath: "service",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://full-stack-tourist-service-backend.vercel.app/api/v1",

    prepareHeaders: (headers) => {
      const accessToken = getAccessToken();

      if (accessToken) {
        headers.set("authorization", accessToken);
      }

      return headers;
    },
  }),
  tagTypes: ["service", "review", "getallservice"],
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (serviceData) => ({
        url: `service/create-service`,
        method: "POST",
        body: serviceData,
      }),
      invalidatesTags: ["getallservice"],
    }),
    getService: builder.query({
      query: ({ search, minPrice, maxPrice, sortBy, page, limit }) => ({
        url: `/service?search=${search}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}&limit=${limit}&page=${page}`,
      }),
      providesTags: ["getallservice"],
    }),
    getSingleService: builder.query({
      query: (id) => ({
        url: `/service/${id}`,
      }),
      providesTags: ["review"],
    }),

    updateService: builder.mutation({
      query: ({ id, serviceData }) => ({
        url: `service/${id}`,
        method: "PATCH",
        body: serviceData,
      }),
      invalidatesTags: ["service"],
    }),

    getCategoryService: builder.query({
      query: (searchValue) => ({
        url: `/service/category?searchValue=${searchValue}`,
      }),
      providesTags: ["service"],
    }),

    createReview: builder.mutation({
      query: (reviewData) => ({
        url: `review/create-review`,
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: ["review"],
    }),
    createRating: builder.mutation({
      query: (ratingData) => ({
        url: `review/create-rating`,
        method: "POST",
        body: ratingData,
      }),
      invalidatesTags: ["review"],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetServiceQuery,
  useGetSingleServiceQuery,
  useGetCategoryServiceQuery,
  useCreateReviewMutation,
  useCreateRatingMutation,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
