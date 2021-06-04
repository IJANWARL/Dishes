import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import { reduxForm, SubmitHandler } from 'redux-form';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import RadioGroup from 'components/inputs/RadioGroup';
import { IListElementState } from 'containers/List/duck/models';
import { DISHES_OPTIONS } from 'consts';

import { SaveButtonWrapper, TextInput, Header } from './styled-components';

interface IDishFormProps {
  handleSubmit: SubmitHandler<IListElementState, {}, string>;
}

const DishForm = reduxForm<IListElementState>({
  form: 'newDish'
})(({ handleSubmit }: IDishFormProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('titles.edit')}</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <SaveButtonWrapper>
          <Button color="primary" variant="contained" type="submit">
            <SaveIcon style={{ marginRight: '10px' }} />
            {t('common.save')}
          </Button>
        </SaveButtonWrapper>
        <Header>{t('headers.basicData')}</Header>
        <TextInput name="name" label={t('labels.name')} multiline />
        <TextInput name="preparationTime" label={t('labels.preparationTime')} />
        <Header>{t('headers.type')}</Header>
        <RadioGroup name="type" options={DISHES_OPTIONS} />
      </form>
    </>
  );
});

const ContactPage = () => {
  const submit = (values: IListElementState) => {
    // print the form values to the console
    console.log(values);
  };

  return <DishForm onSubmit={submit} />;
};

export default ContactPage;
