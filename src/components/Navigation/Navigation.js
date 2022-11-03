import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Phonebook</NavLink>}

      {isLoggedIn ? <UserMenu /> : (<div><NavLink to="/login">Login</NavLink> <NavLink to="/register"> Register</NavLink></div>)}
    </nav>
  );
};
