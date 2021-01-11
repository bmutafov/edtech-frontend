import { Box } from '@material-ui/core';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Inputs, SelectInputs, InputFormFields } from './FormBuilder.types';
import SelectInput from './SelectInput';
import TextInput from './TextInput';

interface Props {
  isCompact?: boolean;
  inputs: Inputs[];
  submitButtonText?: string;
  onSubmit: (data: any) => void;
}

const objectWithoutProp = (obj: Inputs, prop: keyof Inputs): Inputs => {
  const shallowCopy = { ...obj };
  delete shallowCopy[prop];
  return shallowCopy;
};

const isSelect = (input: Inputs | SelectInputs): input is SelectInputs => {
  return input.type === 'select';
};

const FormBuilder: React.FC<Props> = ({ inputs, onSubmit, isCompact = true, submitButtonText = 'Submit' }) => {
  const { register, handleSubmit, setValue, errors, watch } = useForm<InputFormFields>();

  const onFormSubmit = useCallback(
    (inputs: InputFormFields) => {
      console.log(inputs);
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

  const renderCompactView = useCallback(
    (input: Inputs): JSX.Element =>
      isSelect(input) ? (
        <SelectInput
          key={input.id}
          id={input.id}
          label={input.label}
          onChange={handleChange}
          menuItems={input.menuItems}
          // icon={input.icon}
          value={watch('category')}
        />
      ) : (
        <TextInput
          key={input.id}
          type={input.type}
          label={input.label}
          id={input.id}
          placeholder={input.placeholder}
          error={errors}
          icon={input.icon}
          onChange={handleChange}
        />
      ),
    [errors, handleChange, watch]
  );

  const renderWideView = useCallback(
    (input: Inputs): JSX.Element => (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box flex={1}>{input.label}</Box>
        <Box flex={3}>{renderCompactView(objectWithoutProp(input, 'label'))}</Box>
      </Box>
    ),
    [renderCompactView]
  );

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {inputs.map((input) => {
        return isCompact ? renderCompactView(input) : renderWideView(input);
      })}
      <button type="submit">{submitButtonText}</button>
    </form>
  );
};

export default FormBuilder;
