import React, { useState } from 'react';
import InputField from './InputField';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?(\(\+91\))?[789]\d{9}$/;

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
      const formData = isSignUp ? { name, email, password, phone } : { email, password };
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSignUp && (
        <InputField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
      )}
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      {isSignUp && (
        <InputField
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
        />
      )}
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          {isSignUp ? 'Sign Up' : 'Sign in'}
        </button>
      </div>
    </form>
  );
};

export default Form;
