import React from 'react';

import { Checkbox, CheckboxProps } from '@material-ui/core';
import { Field, WrappedFieldProps } from 'redux-form';

type ICheckboxProps = CheckboxProps & WrappedFieldProps;

const CheckboxComponent = ({ input, ...props }: ICheckboxProps) => (
  <Checkbox {...input} {...props} />
);

const CheckboxForm = ({ name, ...props }: { name: string } & CheckboxProps) => (
  <Field name={name} component={CheckboxComponent} props={{ ...props, name }} />
);
export default CheckboxForm;
