import { DeepMap, FieldError, RegisterOptions } from 'react-hook-form';

export interface ErrorType extends DeepMap<InputFormFields, FieldError> {
  [key: string]: any;
}

export type InputFormFields = {
  [key in string]: string;
};

export type InputType = 'text' | 'password' | 'select';

export interface TextInputs {
  id: string;
  type: InputType;
  label?: string;
  placeholder?: string;
  options?: RegisterOptions;
  icon?: JSX.Element;
}

export interface SelectInputs extends TextInputs {
  type: 'select';
  menuItems: MenuItem[];
}

export interface MenuItem {
  label: string;
  value: string;
}

export type Inputs = TextInputs | SelectInputs;
