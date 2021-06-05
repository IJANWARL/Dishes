import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
import { InputLabel, MenuItem, Select, SelectProps } from '@material-ui/core';
import { Field, BaseFieldProps, WrappedFieldProps } from 'redux-form';

type ISelectProps = SelectProps & {
  selectValues: ISelectValue[];
  className?: string;
};

export interface ISelectValue {
  value: string | number;
  name: string;
}

const SelectComponent = styled(
  ({
    selectValues,
    className,
    disabled,
    classes,
    label,
    input,
    ...props
  }: ISelectProps & WrappedFieldProps) => {
    const { t } = useTranslation();
    return (
      <div className={className}>
        {label && <InputLabel>{label}</InputLabel>}
        <Select classes={{ root: classes?.root }} {...input} {...props}>
          {selectValues.map(({ name, value }) => (
            <MenuItem key={value} value={value}>
              {t(name)}
            </MenuItem>
          ))}
        </Select>
      </div>
    );
  }
)`
  width: 100%;
`;

const SelectForm = ({
  name,
  parse,
  format,
  ...props
}: BaseFieldProps & ISelectProps) => (
  <Field
    name={name}
    parse={parse}
    format={format}
    component={SelectComponent}
    props={{ ...props, name }}
  />
);
export default SelectForm;
