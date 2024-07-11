import { baseApi } from "../../api/baseApi";

const freelancerProfileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFreelancerProfile: build.query({
      query: () => ({
        url: "/users/0.1/self/",
        method: "GET",
        headers: {
          "freelancer-oauth-v1": "U8dMnqeUdmYqfDMgnqkczfMR2bI5wN",
        },
      }),
    }),
  }),
});

export const { useGetFreelancerProfileQuery } = freelancerProfileApi;
