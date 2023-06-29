import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (builder) => {
        return {
            getAllPosts: builder.query({
                query: () => "posts",
            }),
            getComment: builder.query({
                query: (postId) => `comments?postId=${postId}`,
            }),
            createPost: builder.mutation({
                query: (newPost) => ({
                    url: "posts",
                    method: "POST",
                    body: newPost,
                }),
            }),
        };
    },
});

// Generate hook 👆
export const {
    useGetCommentQuery,
    useGetAllPostsQuery,
    useCreatePostMutation,
} = postApi;
