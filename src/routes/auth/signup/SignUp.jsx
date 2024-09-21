import React, { useState } from 'react';
import { useGetSignUpMutation } from '../../../redux/api/authApi';

const SignUp = () => {
  const [signUp, { data, error, isLoading }] = useGetSignUpMutation();

  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('pistol');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const result = await signUp({ email, password }).unwrap();
      console.log('Registration successful:', result);
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" required />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" required />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      {error && <p className="error">Registration error: {error.message}</p>}
    </form>
  );
};

export default SignUp;