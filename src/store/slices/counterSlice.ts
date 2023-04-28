// src/store/slices/counterSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// 初始状态类型
interface CounterState {
  value: number;
}

// 定义一个初始状态
const initialState: CounterState = {
  value: 0,
} as CounterState;


// 异步处理函数:
export const incrementDelay = createAsyncThunk(
  'counter/incrementDelay',
  async (payload: number) => {
    return new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(payload);
      }, 1000);
    });
  },
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit 内置 Immer 库，可以直接修改 state
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // 将异步函数回调加入slice
  extraReducers: builder => {
    builder
      // incrementDelay fulfilled后会触发这个函数
      .addCase(incrementDelay.fulfilled, (state, action) => {
        state.value += action.payload;
      })
      // incrementDelay pending 触发
      .addCase(incrementDelay.pending, (state, action) => { })
      // incrementDelay rejected 触发
      .addCase(incrementDelay.rejected, (state, action) => { });
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
