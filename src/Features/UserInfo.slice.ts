import { RootStore } from "@/store/store";
import { LoggedInUser, UserInfoState } from "@/types/UserInfo.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: UserInfoState = {
  user: null,
};

export const geUserInfo = createAsyncThunk<{ user: LoggedInUser }, void, { state: RootStore }>(
  "User/getUserInfo",
  async (_, { getState }) => {
    const state = getState();
    const token = state.userReducer.token;

    const options = {
      url: "https://linked-posts.routemisr.com/users/profile-data",
      method: "GET",
      headers: {
        token,
      },
    };
    const { data } = await axios.request(options);
    return data;
  }
);

const UserInfoSlice = createSlice({
  name: "UserInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(geUserInfo.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(geUserInfo.rejected, (state, action) => {
      console.log(state, action);
    });
  },
});
export const UserInfoReducer = UserInfoSlice.reducer;
