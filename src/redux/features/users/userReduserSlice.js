import { createSlice } from '@reduxjs/toolkit'
import { usreList } from '../../../components/Data'


export const userSlice = createSlice({
    name: 'users',
    initialState: usreList,
    reducers: {

    }

})
export const userReducer =  userSlice.reducer