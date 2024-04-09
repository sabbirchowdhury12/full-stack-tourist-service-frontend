import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "src/utiles/localStorage";

export const authApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://full-stack-tourist-service-backend.vercel.app/api/v1",
    // baseUrl: "http://localhost:5000/api/v1",

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
      invalidatesTags: ["gettusers"],
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

    makeAdmin: builder.mutation({
      query: (id) => ({
        url: `/make-admin/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["gettusers"],
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
  useMakeAdminMutation,
} = authApi;
