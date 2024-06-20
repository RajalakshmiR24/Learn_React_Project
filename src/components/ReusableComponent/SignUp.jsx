import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Form from './Form';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <Form onSubmit={handleSignUp} isSignUp={true} />
        <div className="text-center">
          <p>Already have an account? <Link to="/" className="text-blue-600 hover:underline">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;



