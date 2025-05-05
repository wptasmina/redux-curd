import { createSlice } from '@reduxjs/toolkit'
import { usreList } from '../../../components/Data'


export const userSlice = createSlice({
    name: 'users',
    initialState: usreList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload
            const update = state.find(user => user.id == id)
            if (update) {
                update.name = name,
                    update.email = email
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload
            const update = state.find(user => user.id == id)
            if (update) {
                return state.filter(f => f.id !== id)
            }
        }

    }

})

export const { addUser, updateUser, deleteUser } = userSlice.actions
export const userReducer = userSlice.reducer