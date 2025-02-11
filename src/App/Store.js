import { configureStore } from '@reduxjs/toolkit';
import NewBankAccToggle from '../Slices/BankPopSlice'
import PrimaryAccountToggle from '../Slices/PrimaryAccChangePop'
import RomoveAccount from '../Slices/ConfirmRemovePop'
export const store = configureStore({
    reducer: {
      NewBankAccInfo: NewBankAccToggle,
      PrimaryAccountToggleInfo:PrimaryAccountToggle,
      RomoveAccountInfo:RomoveAccount
    },
  });
  

