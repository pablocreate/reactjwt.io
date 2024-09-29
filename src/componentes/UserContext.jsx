import React, { createContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      const { token, email } = response.data;
      setToken(token);
      setEmail(email);
    } catch (error) {
      console.error('Login error', error);
    }
  };

  const register = async (data) => {
    try {
      const response = await axios.post('/api/auth/register', data);
      const { token, email } = response.data;
      setToken(token);
      setEmail(email);
    } catch (error) {
      console.error('Register error', error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const getProfile = async () => {
    if (!token) return;

    try {
      const response = await axios.get('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Get profile error', error);
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
