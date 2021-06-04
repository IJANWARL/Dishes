import axios, { AxiosRequestConfig } from 'axios';

import { readFromLocalStorage } from 'utils/localStorageHandler';

import urls from './urls';
import { IListElementResponse } from './responses';

enum HttpMethod {
  Post,
  Get
}

export default class RestClient {
  static makeRequest<ResponseType = object, DataType = undefined>(
    method: HttpMethod,
    urlSuffix: string,
    data?: DataType,
    config?: AxiosRequestConfig
  ) {
    const url = `${urls.ROOT}${urlSuffix}`;
    switch (method) {
      case HttpMethod.Post:
        return axios.post<ResponseType>(url, data, config);
      default:
        return axios.get<ResponseType>(url, config);
    }
  }

  static fetchProductsList = () =>
    RestClient.makeRequest<IListElementResponse[]>(
      HttpMethod.Get,
      urls.LIST_DATA
    ).then(response => {
      const data = response.data.map((el, idx) => {
        const elem = readFromLocalStorage(`EDITED_${idx}`);
        return elem ? JSON.parse(elem) : el;
      });
      return Promise.resolve({
        ...response,
        data
      });
    });

  static fetchProductsDetails = (id: string) =>
    RestClient.fetchProductsList().then(response => {
      const idx = parseInt(id);
      if (idx < 0 || idx >= response.data.length) {
        throw Error('Invalid index');
      }
      return Promise.resolve({
        ...response,
        data: { ...response.data[idx], id }
      });
    });
}
