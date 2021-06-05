import 'utils/commonExtensions';
import 'utils/axiosInterceptors';

import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider } from '@material-ui/core/styles';

import store from 'redux/store';
import i18next from 'services/translate';
import GlobalStyles from 'styles/GlobalStyles';
import mainMuiTheme from 'styles/mainMuiTheme';
import MainLayout from 'containers/MainLayout/MainLayout';
import history from 'utils/history';

import reportWebVitals from './reportWebVitals';

const appContainer = document.getElementById('app');

render(
  <I18nextProvider i18n={i18next}>
    <Suspense fallback="">
      <HelmetProvider>
        <Provider store={store}>
          <MuiThemeProvider theme={mainMuiTheme}>
            <SnackbarProvider
              maxSnack={5}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
            >
              <Router history={history}>
                <GlobalStyles />
                <MainLayout />
              </Router>
            </SnackbarProvider>
          </MuiThemeProvider>
        </Provider>
      </HelmetProvider>
    </Suspense>
  </I18nextProvider>,
  appContainer
);

reportWebVitals();
