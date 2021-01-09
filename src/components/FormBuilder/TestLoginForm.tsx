import { Email } from '@material-ui/icons';
import React from 'react';
import FormBuilder from './FormBuilder';
import { Inputs } from './FormBuilder.types';

const inputs: Inputs[] = [
  {
    id: 'username',
    label: 'Username',
    placeholder: 'Enter your username',
    options: {
      required: 'This is required field',
    },
  },
  {
    id: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    options: {
      required: 'This is required field',
    },
  },
  {
    id: 'confirmPassword',
    label: 'Confirm password',
    icon: <Email />,
    placeholder: 'Enter your password again',
    options: {
      required: 'This is required field',
    },
  },
];

interface InputIds {
  username: string;
  password: string;
  confirmPassword: string;
}

const TestLoginForm: React.FC = () => {
  const handleSubmit = (data: InputIds) => {
    console.log(data);
  };

  return <FormBuilder inputs={inputs} onSubmit={handleSubmit} />;
};

export default TestLoginForm;
