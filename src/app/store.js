import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../features/apiSlice";

export const store = configureStore({
    reducer: {
        // Create more reducer
        [postApi.reducerPath]: postApi.reducer,
    },
    // Config middleware to use caching, invalidation, polling, ...
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
});
