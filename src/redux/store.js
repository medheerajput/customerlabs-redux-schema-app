import { configureStore } from "@reduxjs/toolkit";
import schemaReducer from "./schemaSlice";

const store = configureStore({
  reducer: {
    schemas: schemaReducer,
  },
});

export default store;
