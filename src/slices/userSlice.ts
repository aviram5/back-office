import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  isLogged: boolean;
  isAuth: boolean;
}

const someUser = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve({
          isLogged: true,
          isAuth: true,
        });
      } else {
        reject("some error");
      }
    }, 500);
  });
};

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (_, thunkApi) => {
    try {
      const response = await someUser();
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export interface UserState {
  isLogged: boolean;
  isAuth: boolean;
  // isLoading: boolean;
  error?: string;
}

const initialState: UserState = {
  isLogged: true,
  isAuth: true,
  // isLoading: false,
  error: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, { payload }: PayloadAction<boolean>) => {
      state.isLogged = payload;
    },
    setAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchUser.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        // state.isLoading = false;
        state.isAuth = payload.isAuth;
        state.isLogged = payload.isLogged;
      }
    );
    builder.addCase(fetchUser.pending, () => {
      // state.isLoading = true;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      // state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setLogin, setAuth } = userSlice.actions;

export default userSlice;
