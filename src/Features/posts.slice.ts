import { RootStore } from "@/store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Post, PostState } from "../types/posts.type";

const initialState: PostState = {
  posts: null,
  postDetails: null,
  myPosts: null,
  loading: false,
};

const getToken = (getState: () => RootStore): string | null => {
  const state = getState();
  return state.userReducer.token || localStorage.getItem("token");
};

//^ GET: All Posts
export const getPosts = createAsyncThunk<Post[], void, { state: RootStore }>(
  "posts/getPosts",
  async (_, { getState }) => {
    const token = getToken(getState);
    const limit = 50;

    const firstReq = await axios.get(
      `https://linked-posts.routemisr.com/posts?limit=${limit}&page=1`,
      { headers: { token } }
    );

    const totalPages = firstReq.data.paginationInfo.numberOfPages; 

    const lastReq = await axios.get(
      `https://linked-posts.routemisr.com/posts?limit=${limit}&page=${totalPages}`,
      { headers: { token } }
    );
    return lastReq.data.posts;
  }
);

//? GET: Single Post Details
export const getPostDetails = createAsyncThunk<
  Post,
  string,
  { state: RootStore }
>("posts/getPostDetails", async (postId, { getState }) => {
  const token = getToken(getState);
  const options = {
    url: `https://linked-posts.routemisr.com/posts/${postId}`,
    method: "GET",
    headers: {
      token,
    },
  };
  const { data } = await axios.request(options);
  return data.post;
});

//~ GET: My Posts
export const getMyPosts = createAsyncThunk<
  Post[],
  string,
  { state: RootStore }
>("posts/getMyPosts", async (userId: string, { getState }) => {
  const token = getToken(getState);

  const options = {
    url: `https://linked-posts.routemisr.com/users/${userId}/posts?limit=2`,
    method: "GET",
    headers: {
      token,
    },
  };
  const { data } = await axios.request(options);
  return data.posts;
});

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
