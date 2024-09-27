import { createSlice } from "@reduxjs/toolkit";

const schemaSlice = createSlice({
  name: "schemas",
  initialState: {
    segmentName: "",
    selectedSchemas: [],
    modalOpen: false,
  },
  reducers: {
    setSegmentName(state, action) {
      state.segmentName = action.payload;
    },
    addSchema(state, action) {
      // Ensure that the schema is not already in the list to avoid duplicates
      if (!state.selectedSchemas.includes(action.payload)) {
        state.selectedSchemas.push(action.payload);
      }
    },
    removeSchema(state, action) {
      state.selectedSchemas = state.selectedSchemas.filter(
        (schema) => schema !== action.payload
      );
    },
    removeAllSchema(state, action) {
      state.selectedSchemas = []
    },
    toggleModal(state) {
      state.modalOpen = !state.modalOpen;
    },
    resetSchemas(state) {
      state.segmentName = "";
      state.selectedSchemas = [];
    },
  },
});

export const {
  setSegmentName,
  addSchema,
  removeSchema,
  toggleModal,
  removeAllSchema,
  resetSchemas,
} = schemaSlice.actions;
export default schemaSlice.reducer;
