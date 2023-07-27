import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'user',
    initialSatate:[{}],
    reducers:{
        getUser:(state)=>{
            state.push ({name:"SN"})
            state.push ({name:"SSN"})
        }
    }
})

export default slice.reducer;

export const{getUser} = slice.actions;