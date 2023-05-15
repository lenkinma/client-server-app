import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	tagTypes: ['Users'],
	baseQuery: fetchBaseQuery({baseUrl: 'http://25.59.110.206:8080/'}),
	endpoints: (build) => ({
		getUsers: build.query({
			query: (skip) => `users`,
			providesTags: (result) => result
				? [
					...result.map(({ id }) => ({ type: 'Users', id })),
					{ type: 'Users', id: 'LIST' },
				]
				: [{ type: 'Users', id: 'LIST' }],
		}),
		getUser: build.query({
			query: (id= '1') => `users/${id}`,
		}),
		addUser: build.mutation({
			query: (body) => ({
				url: 'users',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{type: 'Users', id: 'LIST'}]
		}),
		deleteUser: build.mutation({
			query: (id) => ({
				url: `users/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [{type: 'Users', id: 'LIST'}]
		})
	})
});


export const {useGetUsersQuery, useGetUserQuery, useAddUserMutation, useDeleteUserMutation} = usersApi;