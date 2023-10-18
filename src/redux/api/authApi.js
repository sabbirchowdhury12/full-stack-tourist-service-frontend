import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "src/utiles/localStorage";

export const authApi = createApi({
  reducerPath: "api",
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
  tagTypes: ["gettusers"],
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: `auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: `auth/signup`,
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["gettusers"],
    }),
    updateProfile: builder.mutation({
      query: ({ id, userData }) => ({
        url: `profile/${id}`,
        method: "PATCH",
        body: userData,
      }),
    }),
    changePassword: builder.mutation({
      query: ({ id, ...passwordValue }) => ({
        url: `change-password/${id}`,
        method: "POST",
        body: passwordValue,
      }),
    }),

    getAlluser: builder.query({
      query: () => ({
        url: `/get-users`,
      }),
      providesTags: ["gettusers"],
    }),
    getSingleuser: builder.query({
      query: (id) => ({
        url: `/profile/${id}`,
      }),
      providesTags: ["gettusers"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useCreateUserMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useGetAlluserQuery,
  useGetSingleuserQuery,
} = authApi;
