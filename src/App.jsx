import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Cart from './pages/Cart';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Rutas para login, registro, perfil y carrito */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
