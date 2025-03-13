import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: string | null;
    token: string | null;
}

const initialState: AuthState = {
    user: localStorage.getItem("user") || null,
    token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{ user: string; token: string }>
        ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("user", action.payload.user);
            localStorage.setItem("token", action.payload.token);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
