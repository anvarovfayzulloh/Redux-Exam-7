import { api } from "./index";

const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: "/users?page=1",
            })
        })
    })
})
export const { 
    useGetUsersQuery,
 } = userApi