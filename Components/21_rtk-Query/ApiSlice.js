import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi", //it is used to identify the path
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts",

      // this query for all posts..
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,

      // this query for selected post
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;
