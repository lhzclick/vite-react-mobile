// src/store/store.ts
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import userInfoSlice from './slices/userInfoSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
  userInfo:userInfoSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

// 从 store 中推断出 `RootState` 和 `AppDispatch` 的类型
export type RootState = ReturnType<typeof store.getState>;
// 推断出类型: {counter: CounterState}
export type AppDispatch = typeof store.dispatch;


