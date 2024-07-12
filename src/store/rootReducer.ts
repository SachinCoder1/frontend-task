'use client'

import { combineReducers } from '@reduxjs/toolkit';
import leverageReducer from './slices/leverageSlice';

const rootReducer = combineReducers({
  leverage: leverageReducer,
});

export default rootReducer;
