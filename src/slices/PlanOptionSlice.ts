import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPlanOptionState {
    planType: string,
}

const initialState: IPlanOptionState = {
    planType: ''
}

const PlanOptionSlice = createSlice({
    name: 'planoption',
    initialState,
    reducers: {
        selectPlan: (state, action: PayloadAction<string>)=>{
            state.planType = action.payload
        }
    }
})

export const {selectPlan} = PlanOptionSlice.actions

export default PlanOptionSlice.reducer