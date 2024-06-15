import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoginForm from './Form';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (data) => {
    console.log('Sign In data:', data);
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <LoginForm onSubmit={handleSignIn} />
        <div className="text-center">
          <p>Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
