import React from 'react';

import { TextField, TextFieldProps } from '@material-ui/core';
import { Field, BaseFieldProps, WrappedFieldProps } from 'redux-form';

type ITextFieldProps = TextFieldProps;

const TextFieldComponent = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...props
}: ITextFieldProps & WrappedFieldProps) => (
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
  parse,
  format,
  ...props
}: BaseFieldProps & ITextFieldProps) => (
  <Field
    name={name}
    parse={parse}
    format={format}
    component={TextFieldComponent}
    props={{ ...props, name }}
  />
);
export default TextFieldForm;
