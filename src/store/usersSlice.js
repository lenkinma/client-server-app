import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userAPI} from "../api/api";

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async function(_, {rejectWithValue}){
		let data = userAPI.getUser(1);
		return data;
	}
);

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		user: null,
	},
	extraReducers: {
		[fetchUser.fulfilled]: (state, action) => {
			state.user = action.payload;
		},
	}
});

export default usersSlice.reducer;