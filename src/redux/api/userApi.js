import { api } from "./index";

const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: "/users?page=1",
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

    })
})
export const {
    useGetUsersQuery,
    useGetDetailsQuery,
    useDeleteUserMutation,
} = userApi