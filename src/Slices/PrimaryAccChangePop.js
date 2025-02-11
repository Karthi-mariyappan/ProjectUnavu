import { createSlice } from "@reduxjs/toolkit";

const initialState={
  ToggleBtn:false
}

export const PrimaryAccountToggle = createSlice({
  name:"PrimaryAccountChange",
  initialState,
  reducers:{
    setPrimaryAccountToggle:(state)=>{
      state.ToggleBtn=!state.ToggleBtn
    }
  }
})

export const {setPrimaryAccountToggle}=PrimaryAccountToggle.actions;

export default PrimaryAccountToggle.reducer;