import { api } from "./index";

const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: "/users?page=1",
            }),
            providesTags: ["USERS"],
        }),
        getUsersv2: build.query({
            query: () => ({
                url: "/users?page=2",
            }),
            providesTags: ["USERS"],
        }),
        getDetails: build.query({
            query: ({ id }) => ({
                url: `/users/${id}`,
            }),
            providesTags: ["USERS"],
        }),
        deleteUser: build.mutation({
            query: ({ id }) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["USERS"],
        }),
        createUser: build.mutation({
            query: ({ data }) => ({
                url: `/users/`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["USERS"],
        }),
        updateUser: build.mutation({
            query: ({ id, data }) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["USERS"],
        }),
    })
})
export const {
    useGetUsersQuery,
    useGetUsersv2Query,
    useGetDetailsQuery,
    useDeleteUserMutation,
    useCreateUserMutation,
    useUpdateUserMutation,
} = userApi