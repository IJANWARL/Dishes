import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import pageUrls from 'pageUrls';
import ProductsList from 'containers/List/List';
import Details from 'containers/Details/Details';
import ProductEditForm from 'containers/EditForm/EditForm';
import { redirectBack } from 'utils/history';

import { Header, ContentContainer } from './styled-components';

const MainLayout = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <Header>
        {location.pathname !== pageUrls.ROOT && (
          <ArrowBackIosIcon
            style={{ cursor: 'pointer' }}
            onClick={() => redirectBack()}
          />
        )}
        <h1>{t('header')}</h1>
      </Header>
      <ContentContainer>
        <Switch>
          <Route exact path={pageUrls.ROOT}>
            <ProductsList />
          </Route>
          <Route exact path={pageUrls.DISH_DETAILS}>
            <Details />
          </Route>
          <Route exact path={pageUrls.DISH_NEW}>
            <ProductEditForm />
          </Route>
          <Route exact path={pageUrls.DISH_EDIT}>
            <ProductEditForm />
          </Route>
          <Route>
            <Redirect to={{ pathname: pageUrls.ROOT }} />
          </Route>
        </Switch>
      </ContentContainer>
    </>
  );
};

export default MainLayout;
