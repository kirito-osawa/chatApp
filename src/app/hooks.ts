import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook ,useSelector} from "react-redux";


export const useAppDispacth:()=> AppDispatch= useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;