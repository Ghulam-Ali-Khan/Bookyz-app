import { publicApi } from '.';

export const authApi = publicApi.injectEndpoints({
  endpoints: build => ({
    signUp: build.mutation({
      query: body => {
        const profile = {
          first_name: body?.first_name,
          last_name: body?.last_name,
        };

        const payload = {
          profile,
          username: body?.username,
          email: body?.email,
          user_type: body?.user_type,
          password: body?.password,
        };
        return {
          url: '/user/register/',
          method: 'POST',
          body: payload,
        };
      },
    }),
    login: build.mutation({
      query: body => ({
        url: '/user/login/',
        method: 'POST',
        body,
      }),
    }),
    forgotPassword: build.mutation({
      query: body => ({ url: '/user/forget/password/', method: 'POST', body }),
    }),
    verifyToken: build.mutation({
      query: id => ({ url: `/user/account/activation/${id}`, method: 'POST' }),
    }),
    resetPassword: build.mutation({
      query: body => ({
        url: '/user/reset/password/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyTokenMutation,
} = authApi;
