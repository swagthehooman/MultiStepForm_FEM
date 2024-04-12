import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPersonalInfoState {
    name: string,
    email: string,
    phone: string,
    isNameCorrect: boolean,
    isEmailCorrect: boolean,
    isPhoneCorrect: boolean,
}

const initialState: IPersonalInfoState = {
    name: '',
    email: '',
    phone: '',
    isEmailCorrect: true,
    isPhoneCorrect: true,
    isNameCorrect: true
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
        },
        isPhoneCorrect: (state)=>{
            for(let i=0;i<state.phone.length; i++){
                if((state.phone.charAt(i)>='0' && state.phone.charAt(i)<='9') || (i===0 && state.phone.charAt(i)==='+'))
                    state.isPhoneCorrect = true
                else{
                    state.isPhoneCorrect = false
                    break
                }
            }
        },
        isEmailCorrect: (state)=>{
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if(!state.email.match(re))
                state.isEmailCorrect = false
            else
                state.isEmailCorrect = true
        },
        isNameCorrect: (state)=>{
            if(state.name==='')
                state.isNameCorrect = false
            else
                state.isNameCorrect = true
        }
    }
})

export const {setName, setEmail, setPhone, isEmailCorrect, isNameCorrect, isPhoneCorrect} = PersonalInfoSlice.actions



export default PersonalInfoSlice.reducer