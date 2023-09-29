import { RecipeReducer } from './recipe/RecipeSlice';
import {configureStore} from '@reduxjs/toolkit'

export const Store = configureStore({
    reducer:{
        Recipe:RecipeReducer
    }
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch