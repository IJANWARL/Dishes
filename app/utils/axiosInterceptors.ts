import axios from 'axios';

const normalizeResponseData = (data: any): any => {
  switch (typeof data) {
    case 'object':
      if (data === null) return '';
      if (data instanceof Array) {
        return data.map(normalizeResponseData);
      }

      return Object.fromEntries(
        Object.keys(data).map(key => [
          key.toCamelCase(),
          normalizeResponseData(data[key])
        ])
      );
    default:
      return data;
  }
};

const normalizeRequestData = (data: any): any => {
  switch (typeof data) {
    case 'object':
      if (data instanceof Array) {
        return data.map(normalizeRequestData);
      }

      return Object.fromEntries(
        Object.keys(data).map(key => [
          key.toSnakeCase(),
          normalizeRequestData(data[key])
        ])
      );
    default:
      return data;
  }
};

axios.interceptors.response.use(
  response => {
    response.data = normalizeResponseData(response.data);
    return response;
  },
  error => {
    throw error;
  }
);

axios.interceptors.request.use(
  config => ({
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers
    },
    data: normalizeRequestData(config.data)
  }),
  error => Promise.reject(error)
);
