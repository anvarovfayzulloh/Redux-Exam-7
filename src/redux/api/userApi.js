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
            query: ({id}) => ({
                url: `/users/${id}`,
            }),
            invalidatesTags: ["USERS"],
        }),
    })
})
export const { 
    useGetUsersQuery,
    useGetDetailsQuery,
 } = userApi