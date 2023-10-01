import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IToken {
    token:string | null
}
const initialState :IToken = {
    token:''
};

const TokenSlice = createSlice({
    name:'token',
    initialState,
    reducers:{
        setToken:(state )=>{
            let token = sessionStorage.getItem('token');
            state.token=token;
            return state;
        },
        removeToken:state=>{
            state.token=null;
            sessionStorage.removeItem('token')
            return state;
        }
    }
})

export const {removeToken,setToken} = TokenSlice.actions;
export const TokenReducer = TokenSlice.reducer;
