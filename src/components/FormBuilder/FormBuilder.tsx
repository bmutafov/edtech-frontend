import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Inputs, SelectInputs, InputFormFields } from './FormBuilder.types';
import SelectInput from './SelectInput';
import TextInput from './TextInput';

interface Props {
  inputs: Inputs[];
  onSubmit: (data: any) => void;
}

const isSelect = (input: Inputs | SelectInputs): input is SelectInputs => {
  return (input as SelectInputs).isSelect;
};

const FormBuilder: React.FC<Props> = ({ inputs, onSubmit }) => {
  const { register, handleSubmit, setValue, errors, watch } = useForm<InputFormFields>();

  const onFormSubmit = (inputs: InputFormFields) => {
    console.log(inputs);
    onSubmit(inputs);
  };

  useEffect(() => {
    inputs.forEach((input) => {
      register(input.id, input.options);
      setValue(input.id, '');
    });
  }, [inputs, register, setValue]);

  const handleChange = (id: string, value: string) => {
    setValue(id, value);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {inputs.map((input) => {
        return isSelect(input) && input.isSelect ? (
          <SelectInput
            id={input.id}
            label={input.label}
            onChange={handleChange}
            menuItems={input.menuItems}
            // icon={input.icon}
            value={watch('category')}
          />
        ) : (
          <TextInput
            label={input.label}
            id={input.id}
            placeholder={input.placeholder}
            key={input.id}
            error={errors}
            icon={input.icon}
            onChange={handleChange}
          />
        );
      })}
      <button type="submit">submit</button>
    </form>
  );
};

export default FormBuilder;
