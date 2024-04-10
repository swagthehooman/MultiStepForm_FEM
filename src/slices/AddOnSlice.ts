import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAddOnState {
    addOns: string[],
    prices: number[]
}

interface IPayload {
    addOn: string,
    price: number
}

const initialState: IAddOnState = {
    addOns: [],
    prices: []
}

const AddOnSlice = createSlice({
    name: 'addons',
    initialState,
    reducers: {
        selectItem: (state, action: PayloadAction<IPayload>)=>{
            if(!state.addOns.includes(action.payload.addOn)){
                state.addOns = [...state.addOns, action.payload.addOn]
                state.prices = [...state.prices, action.payload.price]
            }
        },
        removeItem: (state, action: PayloadAction<IPayload>)=>{
            if(state.addOns.includes(action.payload.addOn)){
                state.addOns = state.addOns.filter(i=> i===action.payload.addOn)
                state.prices = state.prices.filter(i=> i===action.payload.price)
            }
        }

    }
})

export const {removeItem, selectItem} = AddOnSlice.actions

export default AddOnSlice.reducer