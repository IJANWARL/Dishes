import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { Button } from '@material-ui/core';

import { initialDishState } from 'containers/List/duck/models';
import { redirect } from 'utils/history';
import pageUrls from 'pageUrls';
import { useAppSelector } from 'redux/hooks';
import { getDishesList } from 'containers/List/duck/selectors';
import { durationToString } from 'utils/formatters';

import { ButtonLink, Column, Header, Row } from './styled-components';

interface IEditUrlParams {
  dishId: string;
}

const Details = () => {
  const { t } = useTranslation();
  const { dishId } = useParams<IEditUrlParams>();

  const [
    {
      name,
      type,
      diameter,
      noOfSlices,
      slicesOfBread,
      spicinessScale,
      preparationTime
    },
    setDetails
  ] = useState(initialDishState);
  const list = useAppSelector(getDishesList);

  useEffect(() => {
    if (!dishId || parseInt(dishId) >= list.length) redirect(pageUrls.ROOT);

    setDetails(list[parseInt(dishId)]);
  }, [list, dishId]);

  return (
    <>
      <Helmet>
        <title>{t('titles.details')}</title>
      </Helmet>
      <ButtonLink to={pageUrls.DISH_EDIT.format({ dishId })}>
        <Button color="primary" variant="contained">
          {t('common.edit')}
        </Button>
      </ButtonLink>
      <Header>{t('headers.basicData')}</Header>
      <Row>
        <Column>
          <span>{t('labels.name')}</span>
          <p>{name}</p>
        </Column>
        <Column>
          <span>{t('labels.type')}</span>
          <p>{type}</p>
        </Column>
        <Column>
          <span>{t('labels.preparationTime')}</span>
          <p>{durationToString(preparationTime)}</p>
        </Column>
      </Row>

      <Header>{t('headers.basicData')}</Header>
      {type === 'pizza' && (
        <>
          <Row>
            <Column>
              <span>{t('labels.noOfSlices')}</span>
              <p>{noOfSlices}</p>
            </Column>
            <Column>
              <span>{t('labels.diameter')}</span>
              <p>{diameter}</p>
            </Column>
          </Row>
        </>
      )}
      {type === 'soup' && (
        <Row>
          <Column>
            <span>{t('labels.spicinessScale')}</span>
            <p>{spicinessScale}</p>
          </Column>
        </Row>
      )}
      {type === 'sandwich' && (
        <Row>
          <Column>
            <span>{t('labels.slicesOfBread')}</span>
            <p>{slicesOfBread}</p>
          </Column>
        </Row>
      )}
    </>
  );
};

export default Details;
