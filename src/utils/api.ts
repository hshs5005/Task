import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com/films',
});

type DefaultApiReponse<T> = {
  data: T;
  message: string | boolean;
  success: boolean;
};

export const api = {
  get: function <T extends any>(
    ...params: Parameters<typeof axiosInstance.get>
  ) {
    return axiosInstance.get<DefaultApiReponse<T>>(...params);
  },
  post: function <T extends any>(
    ...params: Parameters<typeof axiosInstance.post>
  ) {
    return axiosInstance.post<DefaultApiReponse<T>>(...params);
  },
  put: function <T extends any>(
    ...params: Parameters<typeof axiosInstance.put>
  ) {
    return axiosInstance.put<DefaultApiReponse<T>>(...params);
  },
  delete: function <T extends any>(
    ...params: Parameters<typeof axiosInstance.delete>
  ) {
    return axiosInstance.delete<DefaultApiReponse<T>>(...params);
  },
};
