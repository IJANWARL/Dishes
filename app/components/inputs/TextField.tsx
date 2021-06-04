import React from 'react';

import { TextField, TextFieldProps } from '@material-ui/core';
import { Field, WrappedFieldProps } from 'redux-form';

type ITextFieldProps = TextFieldProps & WrappedFieldProps;

const TextFieldComponent = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...props
}: ITextFieldProps) => (
  <TextField
    label={label}
    placeholder={label?.toString()}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...props}
  />
);

const TextFieldForm = ({
  name,
  ...props
}: { name: string } & TextFieldProps) => (
  <Field
    name={name}
    component={TextFieldComponent}
    props={{ ...props, name }}
  />
);
export default TextFieldForm;
