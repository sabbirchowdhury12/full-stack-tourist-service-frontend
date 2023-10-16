import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: `auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `auth/signup`,
        method: "POST",
        body: data,
      }),
    }),
    updateProfile: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `profile/${id}`,
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: ({ id, ...passwordValue }) => ({
        url: `change-password/${id}`,
        method: "POST",
        body: passwordValue,
      }),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useCreateUserMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = authApi;
