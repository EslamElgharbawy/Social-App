import { userReducer } from '@/Features/user.slice';
import { UserInfoState } from "@/types/UserInfo.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: UserInfoState = {
    user: null
}


export const geUserInfo = createAsyncThunk('User/getUserInfo', async (_, { getState }) => {
    const state: any = getState()
    const token = state.userReducer.token

    const options = {
        url: "https://linked-posts.routemisr.com/users/profile-data",
        method: "GET",
        headers: {
            token
        }

    }
    let { data } = await axios.request(options)
    return data
})

const UserInfoSlice = createSlice({
    name: 'UserInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(geUserInfo.fulfilled, (state, action) => {
            state.user = action.payload.user

        })
         builder.addCase(geUserInfo.rejected, (state, action) => {
            console.log(state, action);

        })
    }
})
export const UserInfoReducer = UserInfoSlice.reducer