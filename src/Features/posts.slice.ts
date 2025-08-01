import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { PostState } from './../types/posts.type';

const initialState: PostState = {
    posts: null,
    postDetails: null
}

export const getPosts = createAsyncThunk('posts/getPosts', async (_, { getState }) => {
    const state: any = getState()
    const token = state.userReducer.token || localStorage.getItem('token')

    const options = {
        url: "https://linked-posts.routemisr.com/posts?limit=50&page=95",
        method: "GET",
        headers: {
            token
        }

    }
    let { data } = await axios.request(options)
    return data.posts
})

export const getPostDetails = createAsyncThunk('posts/getPostDetails', async (id: string, { getState }) => {
    const state: any = getState()
    const token = state.userReducer.token || localStorage.getItem('token')

    const options = {
        url: `https://linked-posts.routemisr.com/posts/${id}`,
        method: "GET",
        headers: {
            token
        }

    }
    let { data } = await axios.request(options)
    return data.post
})

export const postslice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload

        })
        builder.addCase(getPosts.rejected, (state, action) => {
            console.log(state, action);
        })

        builder.addCase(getPostDetails.fulfilled, (state, action) => {
            state.postDetails = action.payload

        })
        builder.addCase(getPostDetails.rejected, (state, action) => {
            console.log(state, action);
        })
    }
})

export const postReducer = postslice.reducer