import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPlanOptionState {
    planType: string,
    price: number
}

const initialState: IPlanOptionState = {
    planType: '',
    price: 0
}

const PlanOptionSlice = createSlice({
    name: 'planoption',
    initialState,
    reducers: {
        selectPlan: (state, action: PayloadAction<IPlanOptionState>)=>{
            state.planType = action.payload.planType
            state.price = action.payload.price
        },
        resetPlan: (state)=>{
            state.planType = ''
            state.price = 0
        }
    }
})

export const {selectPlan, resetPlan} = PlanOptionSlice.actions

export default PlanOptionSlice.reducer