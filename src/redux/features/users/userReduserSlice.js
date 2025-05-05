import { createSlice } from '@reduxjs/toolkit'
import { usreList } from '../../../components/Data'


export const userSlice = createSlice({
    name: 'users',
    initialState: usreList,
    reducers: {
        addUser: (state, action)=> {
            state.push(action.payload);
            console.log(action);
            
            
        }

    }

})

export const { addUser } = userSlice.actions
export const userReducer =  userSlice.reducer