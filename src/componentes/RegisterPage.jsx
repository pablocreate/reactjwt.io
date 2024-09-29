import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { register } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
