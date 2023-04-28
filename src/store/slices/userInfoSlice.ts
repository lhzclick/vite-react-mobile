// src/store/slices/counterSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface IInfo{
    userName:String,
    tel:String,
    idNo:Number,
}

interface IuserInfo{
    info:IInfo,
    error:String
}

const userInfo:IuserInfo = {
    info:{
        userName:'--',
        tel:'--',
        idNo:0,
    },
    error:'00'
} as IuserInfo

export const changeUserInfoDelay = createAsyncThunk('userInfoSlice/changeUserInfoDelay',
   async () => {
    // 模拟请求数据
    return new Promise<IuserInfo>(resolve => {
        setTimeout(() => {
            resolve({
                info:{
                    userName:'jack',
                    tel:'153****1098',
                    idNo:42237783274,
                },
                error:'200'
            });
        }, 1000);
    });
})

const userSlice = createSlice({
    name:'user',
    initialState:userInfo,
    reducers:{
        changeUserInfo:(state,action:PayloadAction<IuserInfo>)=>{
            const { info } = action.payload
            state.info = info
        }
    },
    extraReducers:builder=>{
        builder.addCase(changeUserInfoDelay.fulfilled,(state, action)=>{
            const { info } = action.payload
            state.info = info
        })
        builder.addCase(changeUserInfoDelay.pending,(state, action)=>{})
        builder.addCase(changeUserInfoDelay.rejected,(state, action)=>{})
    }
})

// 每个 case reducer 函数会生成对应的 Action creators
export const { changeUserInfo } = userSlice.actions;

export default userSlice.reducer;
