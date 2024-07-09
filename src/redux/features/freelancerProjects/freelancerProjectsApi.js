import { baseApi } from "../../api/baseApi";

//! TODO: This is dummy api link
const freelancerProjectsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFreelancerProjects: build.query({
      query: () => ({
        url: "/freelancer-projects",
        method: "GET",
      }),
    }),
  }),
});

export const { getFreelancerProjects } = freelancerProjectsApi;
