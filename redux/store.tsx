import { RecipeReducer } from './recipe/RecipeSlice';
import {configureStore} from '@reduxjs/toolkit'
import { TokenReducer } from './token/TokenSlice';

export const Store = configureStore({
    reducer:{
        Recipe:RecipeReducer,
        Token:TokenReducer,
    }
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch