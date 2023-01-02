import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { lazy, Suspense } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Navigation } from './Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));

export const App = () => {
  const { isRefreshing } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Please wait, data is fetching...'
  ) : (
    <div>
      <Suspense fallback={null}>
        <Navigation/>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={PhonebookPage} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};
