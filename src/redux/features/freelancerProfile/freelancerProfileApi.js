import { baseApi } from "../../api/baseApi";

//! TODO: This is dummy api link
const freelancerProfileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFreelancerProfile: build.query({
      query: () => ({
        url: "/freelancer-Profile",
        method: "GET",
      }),
    }),
  }),
});

export const { getFreelancerProfile } = freelancerProfileApi;
