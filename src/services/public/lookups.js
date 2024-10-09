import { publicApi } from '.';

export const lookupsApi = publicApi.injectEndpoints({
  endpoints: build => ({
    getCountryCallingCodes: build.query({
      query: () => '/assets/calling-code/',
    }),
  }),
});

export const { useGetCountryCallingCodesQuery } = lookupsApi;
