import { Box } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Inputs, SelectInputs, InputFormFields } from './FormBuilder.types';
import SelectInput from './SelectInput';
import TextInput from './TextInput';

export interface FormBuilderOptions {
  spacing?: string;
}

interface Props {
  isCompact?: boolean;
  inputs: Inputs[];
  submitButtonText?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
  options?: FormBuilderOptions;
}

const objectWithoutProp = (obj: Inputs, prop: keyof Inputs): Inputs => {
  const shallowCopy = { ...obj };
  delete shallowCopy[prop];
  return shallowCopy;
};

const isSelect = (input: Inputs | SelectInputs): input is SelectInputs => {
  return input.type === 'select';
};

const FormBuilder: React.FC<Props> = ({ inputs, onSubmit, isCompact = true, submitButtonText = 'Submit', options }) => {
  const { register, handleSubmit, setValue, errors, watch } = useForm<InputFormFields>();

  const onFormSubmit = useCallback(
    (inputs: InputFormFields) => {
      onSubmit(inputs);
    },
    [onSubmit]
  );

  useEffect(() => {
    inputs.forEach((input) => {
      register(input.id, input.options);
      setValue(input.id, '');
    });
  }, [inputs, register, setValue]);

  const handleChange = useCallback(
    (id: string, value: string) => {
      setValue(id, value);
    },
    [setValue]
  );

  const renderInput = useCallback(
    (input: Inputs): JSX.Element | undefined => {
      let el: JSX.Element | undefined;

      switch (input.type) {
        case 'text':
        case 'password':
          el = (
            <TextInput
              key={input.id}
              type={input.type}
              label={input.label}
              disabled={input.disabled}
              id={input.id}
              placeholder={input.placeholder}
              error={errors}
              icon={input.icon}
              onChange={handleChange}
              options={options}
            />
          );
          break;

        case 'select': {
          el = isSelect(input) ? (
            <SelectInput
              key={input.id}
              id={input.id}
              label={input.label}
              disabled={input.disabled}
              onChange={handleChange}
              menuItems={input.menuItems}
              value={watch(input.id)}
              options={options}
              icon={input.icon}
            />
          ) : undefined;
          break;
        }
        default:
          throw Error(`Unexpected input type of field`);
      }

      return el;
    },
    [errors, handleChange, options, watch]
  );

  const renderWideView = useCallback(
    (input: Inputs): JSX.Element => (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box flex={1}>{input.label}</Box>
        <Box flex={3}>{renderInput(objectWithoutProp(input, 'label'))}</Box>
      </Box>
    ),
    [renderInput]
  );

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {inputs.map((input) => {
        return isCompact ? renderInput(input) : renderWideView(input);
      })}
      <button type="submit">{submitButtonText}</button>
    </form>
  );
};

export default FormBuilder;
