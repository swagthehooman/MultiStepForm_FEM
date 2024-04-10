import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStepState {
    step: number
}

const initialState: IStepState = {
    step: 1
}

const StepSlice = createSlice({
    name: 'steps',
    initialState,
    reducers:{
        increment: (state)=>{
            state.step += 1
        },
        decrement: (state)=>{
            state.step -= 1
        },
        sendToPageNumber: (state, action: PayloadAction<number>)=>{
            state.step = action.payload
        }
    }
})

export const {increment, decrement, sendToPageNumber} = StepSlice.actions

export default StepSlice.reducer