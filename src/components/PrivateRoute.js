import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};