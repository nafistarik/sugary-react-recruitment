import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  user: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.User;
      // state.user = {name : 'John Doe', email: 'john@example.com', accessToken: 'your-access-token'}
      const accessToken = action.payload.Token;
      const refreshToken = action.payload.RefreshToken;
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      }
    },
    removeUser: (state) => {
      state.user = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
