import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { UserState } from "../types/user.type";

const initialState: UserState = {
  token: null,
};

export const login = createAsyncThunk(
  "user/login",
  async (values: { email: string; password: string }) => {
    const { data } = await axios.post(
      "https://linked-posts.routemisr.com/users/signin",
      values
    );
    return data;
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async (values: {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    dateOfBirth: string;
    gender: string;
  }) => {
    const { data } = await axios.post(
      "https://linked-posts.routemisr.com/users/signup",
      values
    );
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Logout
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },

    // Set token manually 
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },

  extraReducers: (builder) => {
    //& Login
    builder.addCase(login.fulfilled, (state, action) => {
      const token = action.payload.token;
      state.token = token;
      localStorage.setItem("token", token);
      toast.success("Welcome back!", { duration: 3000 });
    });

    builder.addCase(login.rejected, () => {
      toast.error("Incorrect email or password", { position: "top-right" });
    });

    //* Sign Up
    builder.addCase(signUp.fulfilled, () => {
      toast.success("Account created successfully!", { position: "top-right" });
    });

    builder.addCase(signUp.rejected, () => {
      toast.error("Failed to create account. Please try again.", {
        position: "top-right",
      });
    });
  },
});

export const userReducer = userSlice.reducer;
export const { logout, setToken } = userSlice.actions;
