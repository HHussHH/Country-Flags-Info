import axios from "axios";
import * as api from "config";
import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { themeReducer } from "features/theme/theme-slice";
import { controlReducer } from "features/controls/controls-slice";
import { countryReducer } from "features/countries/countries-slice";
import { detailsReducer } from "features/details/details-slice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlReducer,
    countries: countryReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
