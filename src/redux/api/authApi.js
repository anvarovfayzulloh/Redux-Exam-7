import { api } from "./index";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSignUp: build.mutation({
      query: ({ email, password }) => ({
        url: "/register",
        method: "POST",
        body: {
            email,
            password,
        },
      }),
    }),
  }),
});

export const { useGetSignUpMutation } = authApi;
export default authApi;
