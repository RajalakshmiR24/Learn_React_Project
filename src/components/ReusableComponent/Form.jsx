/* eslint-disable no-useless-escape */
import React, { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?(\(\+91\))?[7896]\d{9}$/;

const Form = ({ onSubmit, isSignUp = false }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (isSignUp && !name) {
      validationErrors.name = 'Name is required';
    }
    if (!emailRegex.test(email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!passwordRegex.test(password)) {
      validationErrors.password = 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character';
    }
    if (isSignUp && !phoneRegex.test(phone)) {
      validationErrors.phone = 'Invalid phone number';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit({ name, email, password, phone });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSignUp && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
        </div>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
      </div>
      {isSignUp && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
        </div>
      )}
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default Form;
