import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "@/types/Redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
