import { privateAPi } from '.';

const brandsApi = privateAPi.injectEndpoints({
  endpoints: build => ({
    sendPaymentStatus: build.mutation({
      query: payload => ({
        url: '/payments-and-subscription/subscriptions/',
        method: 'POST',
        body: payload,
      }),
      providesTags: ['sendPaymentStatus'],
      invalidatesTags: ['loadUser'],
    }),
    getPaypalPlansList: build.query({
      query: () => ({
        url: '/payments-and-subscription/subscriptions/',
        method: 'GET',
      }),
      providesTags: ['getPaypalPlansList'],
    }),
  }),
});

export const { useSendPaymentStatusMutation, useGetPaypalPlansListQuery } = brandsApi;
