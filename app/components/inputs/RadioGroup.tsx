import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Radio,
  RadioProps,
  RadioGroup,
  RadioGroupProps,
  FormControlLabel
} from '@material-ui/core';
import { Field, WrappedFieldProps } from 'redux-form';

type IRadioGroupProps = RadioGroupProps & {
  radioProps?: RadioProps;
  options: { value: string; name: string }[];
};

const RadioGroupComponent = ({
  input,
  options,
  radioProps,
  ...props
}: IRadioGroupProps & WrappedFieldProps) => {
  const { t } = useTranslation();
  return (
    <RadioGroup {...input} {...props}>
      {options.map(option => (
        <FormControlLabel
          key={option.value}
          control={<Radio {...radioProps} />}
          value={option.value}
          label={t(option.name)}
        />
      ))}
    </RadioGroup>
  );
};

const RadioGroupForm = ({
  name,
  ...props
}: { name: string } & IRadioGroupProps) => (
  <Field
    name={name}
    component={RadioGroupComponent}
    props={{ ...props, name }}
  />
);

export default RadioGroupForm;
