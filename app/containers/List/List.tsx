import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { useAppSelector } from 'redux/hooks';
import pageUrls from 'pageUrls';

import { getProductsList } from './duck/selectors';
import { Container, Column, Row } from './styled-components';

const List = () => {
  const { t } = useTranslation();
  const list = useAppSelector(getProductsList);

  return (
    <>
      <Helmet>
        <title>{t('titles.list')}</title>
      </Helmet>
      <div>
        <Container>
          <Row header>
            <Column>{t('labels.name')}</Column>
            <Column>{t('labels.number')}</Column>
            <Column>{t('labels.description')}</Column>
          </Row>
          {list.map((el, idx) => (
            <Link
              key={idx.toString()}
              to={pageUrls.PRODUCT_DETAILS.format({ productId: idx })}
            >
              <Row last={idx === list.length - 1}>
                <Column>{el.name || '-'}</Column>
                <Column>{el.type || '-'}</Column>
                <Column>{el.preparationTime || '-'}</Column>
              </Row>
            </Link>
          ))}
        </Container>
      </div>
    </>
  );
};

export default List;
