import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateUser,
  DoLoginUser,
  Logout,
  User,
} from "../../services/login.service";

interface userState extends User {
  isLoading: boolean;
  isSucess: boolean;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface CreateUserCredentials {
  email: string;
  password: string;
  nome: string;
  typeUser: string;
}

const userInitialState: userState = {
  email: undefined,
  isAdmin: undefined,
  isLoading: false,
  isSucess: false,
};

export const login = createAsyncThunk<User, LoginCredentials>(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await DoLoginUser(userData.email, userData.password);
      return response;
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  const response = await Logout();
  return response;
});

export const createUser = createAsyncThunk<void, CreateUserCredentials>(
  "user/createUser",
  async (userData, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await CreateUser(
        userData.nome,
        userData.email,
        userData.password,
        userData.typeUser
      );
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isSucess = true;
      state.isLoading = false;
      state.email = action.payload.email;
      state.isAdmin = action.payload.isAdmin;
    });
    builder.addCase(login.pending, (state) => {
      state.isSucess = false;
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.isSucess = false;
      state.isLoading = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.email = undefined;
      state.isAdmin = undefined;

      state.isSucess = false;
      state.isLoading = false;
    });
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state) => {
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
