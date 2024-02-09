import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/types/Redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
