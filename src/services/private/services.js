import { privateAPi } from '.';

export const servicesApi = privateAPi.injectEndpoints({
  endpoints: build => ({
    getService: build.query({
      query: params => ({
        url: '/services/company/',
        method: 'GET',
        params,
      }),
      providesTags: ['GetService'],
    }),

    getPopularService: build.query({
      query: () => '/api/service/popular-services/',
      providesTags: ['GetPopularService'],
    }),

    getServiceById: build.query({
      query: slug => `/services/company/${slug}/`,
      providesTags: ['GetServiceById'],
    }),

    addService: build.mutation({
      query: formData => ({
        url: '/services/company/',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['GetService'],
    }),

    UpdateService: build.mutation({
      query: body => ({
        url: `/services/company/${body?.slug}/`,
        method: 'PUT',
        body: body?.formData,
      }),
      invalidatesTags: ['GetService', 'GetServiceById'],
    }),

    deleteService: build.mutation({
      query: slug => ({
        url: `/api/service/services/${slug}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['GetService', 'GetServiceById'],
    }),

    updateServiceStatus: build.mutation({
      query: body => ({
        url: `/api/service/services/${body?.slug}/`,
        method: 'PATCH',
        body: {
          service_status: body.status,
        },
      }),
      invalidatesTags: ['GetService', 'GetServiceById'],
    }),
  }),
});

export const {
  useGetServiceQuery,
  useGetPopularServiceQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useGetServiceByIdQuery,
  useDeleteServiceMutation,
  useUpdateServiceStatusMutation,
} = servicesApi;
