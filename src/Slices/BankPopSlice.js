import { createSlice } from "@reduxjs/toolkit";

const initialState={
  ToggleBtn:false
}

export const NewBankAccToggle = createSlice({
  name:"NewBankAccountAdd",
  initialState,
  reducers:{
    setChangeToggle:(state)=>{
      state.ToggleBtn=!state.ToggleBtn
    }
  }
})

export const {setChangeToggle}=NewBankAccToggle.actions;

export default NewBankAccToggle.reducer;