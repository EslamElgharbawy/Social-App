import { userReducer } from './user.slice';
import { PostState } from './../types/posts.type';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState: PostState = {
    posts: null
}

export const getPosts = createAsyncThunk('posts/getPosts', async (_, { getState }) => {
    const state: any = getState()
    const token = state.userReducer.token ||localStorage.getItem('token')

    const options = {
        url: "https://linked-posts.routemisr.com/posts?limit=51",
        method: "GET",
        headers: {
            token
        }

    }
    let { data } = await axios.request(options)
    return data
})

export const postslice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload.posts

        })
        builder.addCase(getPosts.rejected, (state, action) => {
            console.log(state, action);
        })
    }
})

export const postReducer = postslice.reducer