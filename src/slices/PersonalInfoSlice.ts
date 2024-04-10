import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPersonalInfoState {
    name: string,
    email: string,
    phone: string,
}

const initialState: IPersonalInfoState = {
    name: '',
    email: '',
    phone: '',
}

const PersonalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState,
    reducers:{
        setName: (state, action: PayloadAction<string>)=>{
            state.name = action.payload
        },
        setEmail: (state, action: PayloadAction<string>)=>{
            state.email = action.payload
        },
        setPhone: (state, action: PayloadAction<string>)=>{
            state.phone = action.payload
        }
    }
})

export const {setName, setEmail, setPhone} = PersonalInfoSlice.actions



export default PersonalInfoSlice.reducer