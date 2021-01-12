import { Email } from '@material-ui/icons';
import React from 'react';
import FormBuilder from './FormBuilder';
import { Inputs } from './FormBuilder.types';

const inputs: Inputs[] = [
  {
    id: 'username',
    type: 'text',
    label: 'Username',
    placeholder: 'Enter your username',
    options: {
      required: 'This is required field',
    },
  },
  {
    id: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    icon: <Email />,
    options: {
      required: 'This is required field',
    },
  },
  {
    id: 'confirmPassword',
    type: 'password',
    label: 'Confirm password',
    icon: <Email />,
    placeholder: 'Enter your password again',
    options: {
      required: 'This is required field',
    },
  },
  {
    id: 'role',
    type: 'select',
    label: 'Educational role',
    placeholder: 'Select role',
    icon: <Email />,
    menuItems: [
      {
        label: 'Student',
        value: 'student',
      },
      {
        label: 'Teacher',
        value: 'teacher',
      },
    ],
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

  return <FormBuilder inputs={inputs} onSubmit={handleSubmit} isCompact={true} options={{ spacing: '10px' }} />;
};

export default TestLoginForm;
