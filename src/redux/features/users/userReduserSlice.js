import { createSlice } from '@reduxjs/toolkit'
import { usreList } from '../../../components/Data'


export const userSlice = createSlice({
    name: 'users',
    initialState: usreList,
    reducers: {
        addUser: (state, action)=> {
            state.push(action.payload);
            console.log(action);   
        },
        updateUser: (state, action)=> {
           const {id, name, email} = action.payload
           const update = state.find(user => user.id == id)
            if(update){
                update.name = name,
                update.email = email
            }   
        }

    }

})

export const { addUser, updateUser } = userSlice.actions
export const userReducer =  userSlice.reducer