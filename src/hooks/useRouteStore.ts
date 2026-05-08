import { useLocation, useNavigate } from 'react-router-dom';
import { useProductStore } from './useProducts';
import { create } from 'zustand';

type RouteUiStore = {
  cellphoneCategory: string;
  setCellphoneCategory: (route: string) => void;
};

const useRouteUiStore = create<RouteUiStore>((set) => ({
  cellphoneCategory: '',
  setCellphoneCategory: (route) => set({ cellphoneCategory: route }),
}));

interface RouteState {
  currentRoute: string;
  currentPage: number;
  cellphoneCategory: string;
  setRoute: (url: string) => void;
  changeCellphoneCategory: (route: string) => void;
}

export function useRouteStore<T>(selector: (state: RouteState) => T): T {
  const totalPages = useProductStore((state) => state.totalIndexPages);
  const location = useLocation();
  const navigate = useNavigate();
  const cellphoneCategory = useRouteUiStore((state) => state.cellphoneCategory);
  const setCellphoneCategory = useRouteUiStore((state) => state.setCellphoneCategory);
  
  const getCurrentRoute = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    return segments.length >= 2 ? segments[1] : '';
  };

  const getCurrentPage = () =>{
    let currentPage: number;
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    currentPage = parseInt(segments[2],10);

    if(currentPage > totalPages) return totalPages;

    const parsed = parseInt(segments[2], 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  }

  const changeCellphoneCategory = (route: string) => {
    setCellphoneCategory(route);
  };

  const state: RouteState = {
    currentRoute: getCurrentRoute(),
    currentPage: getCurrentPage(),
    cellphoneCategory: cellphoneCategory || "BASE DE ESPRESSO",
    setRoute: (url: string) => navigate(url),
    changeCellphoneCategory: changeCellphoneCategory,
  };

  return selector(state);
}