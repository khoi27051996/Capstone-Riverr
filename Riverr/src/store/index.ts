import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useDispatch } from "react-redux";



export const store = configureStore({
  reducer: rootReducer,
});



type AppDispatch = (typeof store)["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;

export type ROOTSTATE = ReturnType<(typeof store)["getState"]>;

export * from "./auth";
export * from './CongViec';
export * from './BinhLuan';
export * from './ThueCongViec'
