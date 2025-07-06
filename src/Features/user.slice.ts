import axios from 'axios';
import { UserState } from '../types/user.type';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

const initialState: UserState = {
  token:
    localStorage.getItem("token")
}

export let login = createAsyncThunk('user/login', async (values: { email: string, password: string }) => {
  const options = {
    url: "https://linked-posts.routemisr.com/users/signin",
    method: "POST",
    data: values
  }
  let { data } = await axios.request(options)
  return data
})

export let SignUp = createAsyncThunk('user/SignUp', async (values: { name: string, email: string, password: string, rePassword: string, dateOfBirth: string, gender: string }) => {
  const options = {
    url: "https://linked-posts.routemisr.com/users/signup",
    method: "POST",
    data: values
  }
  let { data } = await axios.request(options)
  return data

})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    }
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token
      localStorage.setItem("token", action.payload.token)
      toast.success("Welcome back!")
    })
    builder.addCase(login.rejected, () => {
      toast.error("Incorrect email or password")
    })
    builder.addCase(SignUp.fulfilled, () => {
      toast.success("Account created successfully!")
    })
    builder.addCase(SignUp.rejected, () => {
      toast.error("Failed to create account. Please try again.")

    })
  }
})

export const userReducer = userSlice.reducer
export const { logout } = userSlice.actions;
