import { privateAPi } from './private';
import { publicApi } from './public';
import { adminAPi } from './admin';

export const serviceReducers = {
  [publicApi.reducerPath]: publicApi.reducer,
  [privateAPi.reducerPath]: privateAPi.reducer,
  [adminAPi.reducerPath]: adminAPi.reducer,
};

export const serviceMiddlewares = [publicApi.middleware, privateAPi.middleware, adminAPi.middleware];
