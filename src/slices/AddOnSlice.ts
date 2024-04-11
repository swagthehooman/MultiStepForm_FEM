import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAddOnState {
    addOn: string,
    price: number
}

const initialState: IAddOnState[] = []

const AddOnSlice = createSlice({
    name: 'addons',
    initialState,
    reducers: {
        selectItem: (state, action: PayloadAction<IAddOnState>)=>{
            state = [...state, {
                addOn: action.payload.addOn,
                price: action.payload.price
            }]
        },
        removeItem: (state, action: PayloadAction<IAddOnState>)=>{
            state = state.filter(i=> i.addOn!==action.payload.addOn)
        },
        reset: (state)=>{
            state = []
        }

    }
})

export const {removeItem, selectItem, reset} = AddOnSlice.actions

export default AddOnSlice.reducer