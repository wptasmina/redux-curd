import { createSlice } from '@reduxjs/toolkit'
import { usreList } from '../../../components/Data'


export const userSlice = createSlice({
    name: 'user',
    initialState: usreList,
    reducers: {

    }

})