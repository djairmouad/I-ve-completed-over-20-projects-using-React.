import React, { useState } from 'react';
import { styled } from 'styled-components';

// Placeholder for your authentication service, replace it with your actual service
// const authService = ...

const AuthInputs = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (identifier, value) => {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevents the default form submission
    setSubmitted(true);

    try {
      // Replace the following line with your actual authentication logic
      // const result = await authService.login(enteredEmail, enteredPassword);
      
      // Example: Check if authentication is successful
      // if (result.success) {
      //   // Redirect or perform some action on success
      // } else {
      //   // Handle authentication failure, show error message, etc.
      // }

    } catch (error) {
      console.error('Authentication error:', error);
      // Handle other errors if necessary
    }
  };

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.length < 6;

  // Styled components for label and input
  const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ $invalid }) => ($invalid ? '#f87171' : '#6b7280')};
  `;

  const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    background-color: ${function hello({ $invalid }) {
      return $invalid ? '#f73f3f' : '#d1d5db';
    }};
    color: ${function hello({ $invalid }) {
      return $invalid ? '#ef4444' : '#374151';
    }};
    border: 1px solid ${function hello({ $invalid }) {
      return $invalid ? '#f87171' : 'transparent';
    }};
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  `;

  return (
    <form id="auth-inputs" onSubmit={handleLogin}>
      <div className="controls">
        <div>
          <Label htmlFor="email" $invalid={emailNotValid}>
            Email
          </Label>
          <Input
            id="email"
            $invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password" $invalid={passwordNotValid}>
            Password
          </Label>
          <Input
            id="password"
            $invalid={passwordNotValid}
            type="password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </div>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button type="submit" className="button">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default AuthInputs;
