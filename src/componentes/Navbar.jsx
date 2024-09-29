import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Navbar = () => {
  const { logout } = useContext(UserContext);

  return (
    <nav>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
