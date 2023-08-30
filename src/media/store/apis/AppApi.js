import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AppApi = createApi({
    reducerPath: 'media',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    tagTypes:['users'],
    endpoints: builder => ({
        getUsers: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: () => '/users',
            providesTags: ['users']
        }),
        getUser: builder.query({
            query: (userId) => `/users/${userId}`
        }),
        addNewUser: builder.mutation({
            query: user => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['users']
        }),
        deleteUser: builder.mutation({
            query: userId => ({
                url: `/users/${userId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['users']
        })
    })
});

export const {
    useGetUsersQuery,
    useGetUserQuery,
    useAddNewUserMutation,
    useDeleteUserMutation,
} = AppApi;
