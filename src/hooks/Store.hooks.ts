'use client'
import { AppDispatsh, RootStore } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<RootStore>()
export const useAppDispatsh = useDispatch.withTypes<AppDispatsh>()