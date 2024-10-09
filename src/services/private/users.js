import { privateAPi } from '.';

export const usersApi = privateAPi.injectEndpoints({
  endpoints: build => ({
    getUser: build.query({
      query: params => ({
        url: '/user-profile/user-profile/',
        method: 'GET',
        params,
      }),
      providesTags: ['GetUser'],
    }),

    getUserById: build.query({
      query: slug => `/services/company/${slug}/`,
      providesTags: ['GetUserById'],
    }),

    addUser: build.mutation({
      query: body => ({
        url: '/user-profile/user-profile/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['GetUser'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useAddUserMutation,
  useGetUserByIdQuery,
} = usersApi;
