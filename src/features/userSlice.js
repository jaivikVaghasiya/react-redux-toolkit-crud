import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const listUser = createAsyncThunk(
  'users/listUser',
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      'https://65f92e9cdf1514524610a4aa.mockapi.io/userData',
    );
    try {
      const result = await response.json();
      console.log('result :>> ', result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const createUser = createAsyncThunk(
  'users/createUser',
  async (data, { rejectWithValue }) => {
    console.log('data :>> ', data);
    const response = await fetch(
      'https://65f92e9cdf1514524610a4aa.mockapi.io/userData',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    try {
      const result = await response.json();
      console.log('result :>> ', result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (data, { rejectWithValue }) => {
    console.log('data :>> ', data);
    const response = await fetch(
      `https://65f92e9cdf1514524610a4aa.mockapi.io/userData/${data}`,
      {
        method: 'DELETE',
      },
    );
    try {
      const result = await response.json();
      console.log('result :>> ', result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(listUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(listUser.fulfilled, (state, action) => {
        console.log('action :>> ', action);
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(listUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        console.log('action create:>> ', action);
        state.loading = false;
        state.users = [...state.users, action.payload];
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        console.log('action delete:>> ', action);
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((ele) => ele.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
