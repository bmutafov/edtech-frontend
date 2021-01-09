import { DeepMap, FieldError, RegisterOptions } from 'react-hook-form';

export interface ErrorType extends DeepMap<InputFormFields, FieldError> {
  [key: string]: any;
}

export type InputFormFields = {
  [key in string]: string;
};

export interface TextInputs {
  label: string;
  id: string;
  placeholder?: string;
  options?: RegisterOptions;
  icon?: JSX.Element;
  isSelect?: boolean;
}

export interface SelectInputs extends TextInputs {
  isSelect: true;
  menuItems: MenuItem[];
}

export interface MenuItem {
  label: string;
  value: string;
}

export type Inputs = TextInputs | SelectInputs;
