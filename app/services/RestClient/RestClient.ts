import axios, { AxiosRequestConfig } from 'axios';

import urls from './urls';
import { ISaveDishRequest, ISaveDishResponse } from './interfaces';

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

  static saveDish = (data: ISaveDishRequest) =>
    RestClient.makeRequest<ISaveDishResponse, ISaveDishRequest>(
      HttpMethod.Post,
      urls.DISHES,
      data
    );
}
