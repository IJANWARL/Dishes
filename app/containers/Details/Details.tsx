import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import { Button } from '@material-ui/core';

import { Header } from './styled-components';

const Details = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('titles.details')}</title>
      </Helmet>
      <Button color="primary" variant="contained">
        {t('common.edit')}
      </Button>
      <Header>{t('headers.basicData')}</Header>
    </>
  );
};

export default Details;
