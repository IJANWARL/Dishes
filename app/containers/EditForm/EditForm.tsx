import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { reduxForm } from 'redux-form';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useSnackbar } from 'notistack';

import RadioGroup from 'components/inputs/RadioGroup';
import { IDishState, initialDishState } from 'containers/List/duck/models';
import { DISHES_OPTIONS } from 'consts';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getDishesList } from 'containers/List/duck/selectors';
import { addToList, editDish } from 'containers/List/duck/actions';
import { redirect } from 'utils/history';
import pageUrls from 'pageUrls';
import { durationToString } from 'utils/formatters';
import IState from 'redux/models';
import RestClient from 'services/RestClient/RestClient';

import {
  SaveButtonWrapper,
  SelectInput,
  TextInput,
  Header
} from './styled-components';
import { SPICINESS_SCALE_OPTIONS } from './consts';

interface IEditUrlParams {
  dishId: string;
}

const FORM_NAME = 'DISHES';

const DishForm = reduxForm<IDishState>({
  form: FORM_NAME
})(({ handleSubmit }) => {
  const { t } = useTranslation();

  const [leadingZeros, setLeadingZeros] = useState(true);
  const { type } = useAppSelector(
    (state: IState) => state.form[FORM_NAME]?.values
  );

  const biggerTanZero = (v: string) => (parseInt(v) < 1 ? '1' : v);

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
        <Header>{t('headers.type')}</Header>
        <RadioGroup name="type" options={DISHES_OPTIONS} />
        <Header>{t('headers.basicData')}</Header>
        <TextInput name="name" label={t('labels.name')} required />
        <TextInput
          name="preparationTime"
          label={t('labels.preparationTime')}
          required
          onFocus={() => setLeadingZeros(false)}
          onBlur={() => setLeadingZeros(true)}
          format={v => durationToString(v, leadingZeros)}
          parse={(v: string) => v.toDuration()}
        />
        <Header>{t('headers.additionalData')}</Header>
        {type === 'pizza' && (
          <>
            <TextInput
              required
              type="number"
              name="noOfSlices"
              label={t('labels.noOfSlices')}
              parse={v => v && parseInt(biggerTanZero(v))}
            />
            <TextInput
              required
              type="number"
              name="diameter"
              label={t('labels.diameter')}
              parse={v => v && parseFloat(biggerTanZero(v))}
            />
          </>
        )}
        {type === 'soup' && (
          <SelectInput
            type="number"
            name="spicinessScale"
            label={t('labels.spicinessScale')}
            parse={v => v && parseInt(biggerTanZero(v))}
            selectValues={SPICINESS_SCALE_OPTIONS}
          />
        )}
        {type === 'sandwich' && (
          <TextInput
            required
            type="number"
            name="slicesOfBread"
            label={t('labels.slicesOfBread')}
            parse={v => v && parseInt(biggerTanZero(v))}
          />
        )}
      </form>
    </>
  );
});

const ContactPage = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(getDishesList);

  const { dishId } = useParams<IEditUrlParams>();

  const newDish = !dishId || parseInt(dishId) >= list.length;
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveDish = (data: IDishState) =>
    RestClient.saveDish({
      ...data,
      preparationTime: durationToString(data.preparationTime)
    }).then(
      response => {
        dispatch(
          addToList({
            ...response.data,
            preparationTime: response.data.preparationTime.toDuration()
          })
        );
        redirect(pageUrls.ROOT);
      },
      e =>
        enqueueSnackbar(Object.values(e.response.data).join(' '), {
          variant: 'error'
        })
    );

  const handleEditDish = (data: IDishState) => {
    dispatch(editDish(parseInt(dishId), data));
    redirect(pageUrls.ROOT);
  };

  const submit = (data: IDishState) =>
    newDish ? handleSaveDish(data) : handleEditDish(data);

  const initialValues = useMemo(() => {
    if (newDish) return initialDishState;

    return list[parseInt(dishId)];
  }, [dishId]);

  return <DishForm initialValues={initialValues} onSubmit={submit} />;
};

export default ContactPage;
