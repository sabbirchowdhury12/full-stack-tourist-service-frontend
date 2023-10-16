import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { serviceApi } from "./api/serviceApi";
import { bookingApi } from "./api/bookApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      serviceApi.middleware,
      bookingApi.middleware
    ),
});
