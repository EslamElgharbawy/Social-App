import { CommentsState } from "@/types/comments.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState: CommentsState = {
  comments: null,
  commentDetails: null,
};

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (id: string, { getState }) => {
    const state: any = getState();
    const token = state.userReducer.token || localStorage.getItem("token");

    const options = {
      url: `https://linked-posts.routemisr.com/posts/${id}/comments`,
      method: "GET",
      headers: {
        token,
      },
    };
    let { data } = await axios.request(options);
    return data.comments;
  }
);

export const CommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(getComments.rejected, (state, action) => {
      console.log(state, action);
    });
  },
});
export const CommentReducer = CommentSlice.reducer;
