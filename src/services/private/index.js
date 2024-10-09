import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '@/utilities/constants';

// eslint-disable-next-line import/prefer-default-export
export const privateAPi = createApi({
  reducerPath: 'privateAPi',
  tagTypes: [
    'GetAuthorizedUser',
    'listChatMessages',
    'GetCategories',
    'GetPopularService',
    'GetNotification',
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token');

      if (token) headers.set('Authorization', `JWT ${token}`);

      return headers;
    },
  }),
  endpoints: () => ({}),
});
