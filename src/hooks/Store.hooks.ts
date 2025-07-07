'use client'
import { AppDispatch, RootStore } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<RootStore>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()