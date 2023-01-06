import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface userState {
  userId: string | null;
  isShowSingleUserDetailsOpen: boolean;
  currentPage: number;
  admin: string | null;
}

const initialState: userState = {
  userId: '',
  isShowSingleUserDetailsOpen: false,
  currentPage: 1,
  admin: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    updateCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    toggleIsShowSingleUserDetailsOpen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isShowSingleUserDetailsOpen = action.payload;
    },
    updateAdmin: (state, action: PayloadAction<string>) => {
      state.admin = action.payload;
    },
  },
});

export const {
  updateUserId,
  toggleIsShowSingleUserDetailsOpen,
  updateCurrentPage,
  updateAdmin,
} = userSlice.actions;
export default userSlice.reducer;
