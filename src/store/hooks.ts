import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux/es/exports';
import {TypedUseSelectorHook} from 'react-redux/es/types';
import {AppDispacth, RootState} from './index'

export const useAppDispatch : ()=>AppDispacth = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState > = useSelector;