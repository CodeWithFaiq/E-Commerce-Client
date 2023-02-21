import { createSlice } from "@reduxjs/toolkit";

const ThemeSlicer=createSlice({
    name:'Theme',
    initialState:{
        mode:'white'
    },
    reducers:{
        changeTheme:(state,action)=>{
          state.mode=action.payload;
        }
    },
})
export const {changeTheme}=ThemeSlicer.actions;
export default ThemeSlicer.reducer;