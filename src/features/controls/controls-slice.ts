import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Region } from "types";

type ControlsSlice = {
  search: string;
  region: Region | "";
};
const initialState: ControlsSlice = {
  search: "",
  region: "",
};

const controlSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<Region | "">) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const { setRegion, setSearch, clearControls } = controlSlice.actions;
export const controlReducer = controlSlice.reducer;
