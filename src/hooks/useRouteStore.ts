import { useLocation, useNavigate } from 'react-router-dom';

interface RouteState {
  currentRoute: string;
  setRoute: (url: string) => void;
}

export function useRouteStore<T>(selector: (state: RouteState) => T): T {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getCurrentRoute = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    return segments.length >= 2 ? segments[1] : '';
  };
  const state: RouteState = {
    currentRoute: getCurrentRoute(),
    setRoute: (url: string) => navigate(url),
  };

  return selector(state);
}