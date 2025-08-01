import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PostState } from "../types/posts.type";

// Initial state
const initialState: PostState = {
  posts: null,
  postDetails: null,
  myPosts: null,
  loading: false,
};

// Helper function to get token
const getToken = (getState: any): string | null => {
  const state = getState();
  return state.userReducer.token || localStorage.getItem("token");
};

// GET: All Posts
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { getState }) => {
    const token = getToken(getState);

    const response = await axios.get(
      "https://linked-posts.routemisr.com/posts?limit=50&page=95",
      {
        headers: { token },
      }
    );

    return response.data.posts;
  }
);

// GET: Single Post Details
export const getPostDetails = createAsyncThunk(
  "posts/getPostDetails",
  async (postId: string, { getState }) => {
    const token = getToken(getState);

    const response = await axios.get(
      `https://linked-posts.routemisr.com/posts/${postId}`,
      {
        headers: { token },
      }
    );

    return response.data.post;
  }
);

// GET: My Posts
export const getMyPosts = createAsyncThunk(
  "posts/getMyPosts",
  async (userId: string, { getState }) => {
    const token = getToken(getState);

    const response = await axios.get(
      `https://linked-posts.routemisr.com/users/${userId}/posts?limit=2`,
      {
        headers: { token },
      }
    );

    return response.data.posts;
  }
);

// Posts Slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // getPosts
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
      })

      // getPostDetails
      .addCase(getPostDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.postDetails = action.payload;
      })
      .addCase(getPostDetails.rejected, (state) => {
        state.loading = false;
      })

      // getMyPosts
      .addCase(getMyPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.myPosts = action.payload;
      })
      .addCase(getMyPosts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const postReducer = postsSlice.reducer;
