import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LeverageState {
  currency: string;
  walletBalance: number;
  inputValue: number;
  leverage: number;
  currencySrc: string;
}

const initialState: LeverageState = {
  currency: 'ETH',
  currencySrc: "/currencies/ETH.svg",
  walletBalance: 5,
  inputValue: 0,
  leverage: 1,
};

const leverageSlice = createSlice({
  name: 'leverage',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setWalletBalance: (state, action: PayloadAction<number>) => {
      state.walletBalance = action.payload;
    },
    setInputValue: (state, action: PayloadAction<number>) => {
      state.inputValue = action.payload || 0;
    },
    setLeverage: (state, action: PayloadAction<number>) => {
      state.leverage = action.payload;
    },
  },
});

export const { setCurrency, setWalletBalance, setInputValue, setLeverage } = leverageSlice.actions;
export default leverageSlice.reducer;
