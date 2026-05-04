import { useLocation, useNavigate } from 'react-router-dom';
import { useProductStore } from './useProducts';

interface RouteState {
  currentRoute: string;
  currentPage: number;
  setRoute: (url: string) => void;
}

export function useRouteStore<T>(selector: (state: RouteState) => T): T {
  const totalPages = useProductStore((state) => state.totalIndexPages);
  const location = useLocation();
  const navigate = useNavigate();
  
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

  const state: RouteState = {
    currentRoute: getCurrentRoute(),
    currentPage: getCurrentPage(),
    setRoute: (url: string) => navigate(url),
  };

  return selector(state);
}