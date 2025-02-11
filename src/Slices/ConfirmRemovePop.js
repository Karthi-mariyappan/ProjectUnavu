import { createSlice } from "@reduxjs/toolkit";

const initialState={
  ToggleBtn:false,
  BankID:null
}

export const RemoveAnBankAccount = createSlice({
  name:"RomoveAccount",
  initialState,
  reducers:{
    SetRemoveToggle:(state)=>{
      state.ToggleBtn=!state.ToggleBtn
    },
    SetBankID:(state,action)=>{
        state.BankID=action.payload
    }
  }
})

export const {SetRemoveToggle,SetBankID}=RemoveAnBankAccount.actions;

export default RemoveAnBankAccount.reducer;