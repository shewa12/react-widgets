import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AppApi = createApi({
    reducerPath: 'media',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints: builder => ({
        getUsers: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: () => '/users'
        })
    })
});

export const { useGetUsersQuery } = AppApi;
