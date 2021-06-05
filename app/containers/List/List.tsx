import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { useAppSelector } from 'redux/hooks';
import pageUrls from 'pageUrls';
import { durationToString } from 'utils/formatters';

import { getDishesList } from './duck/selectors';
import {
  AddNewButtonWrapper,
  Container,
  Column,
  Row
} from './styled-components';

const List = () => {
  const { t } = useTranslation();
  const list = useAppSelector(getDishesList);

  return (
    <>
      <Helmet>
        <title>{t('titles.list')}</title>
      </Helmet>
      <div>
        <AddNewButtonWrapper to={pageUrls.DISH_NEW}>
          <Button color="primary" variant="contained" type="submit">
            <AddIcon style={{ marginRight: '10px' }} />
            {t('common.add')}
          </Button>
        </AddNewButtonWrapper>
        <Container>
          <Row header>
            <Column>{t('labels.name')}</Column>
            <Column>{t('labels.type')}</Column>
            <Column>{t('labels.preparationTime')}</Column>
          </Row>
          {list.map((el, idx) => (
            <Link
              key={idx.toString()}
              to={pageUrls.DISH_DETAILS.format({ dishId: idx })}
            >
              <Row last={idx === list.length - 1}>
                <Column>{el.name}</Column>
                <Column>{el.type}</Column>
                <Column>{durationToString(el.preparationTime)}</Column>
              </Row>
            </Link>
          ))}
        </Container>
      </div>
    </>
  );
};

export default List;
