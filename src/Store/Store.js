import {configureStore} from '@reduxjs/toolkit';
import { AuthReducers } from './Actions/Reducers/AuthReducers';

export const store = configureStore({
    reducer :{
        AuthReducers
    }
}
    
    
);