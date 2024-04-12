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

            return [...state, {
                addOn: action.payload.addOn,
                price: action.payload.price
            }]
        },
        removeItem: (state, action: PayloadAction<string>)=>{
            return state.filter(i=> i.addOn!==action.payload)           
        },
        reset: ()=>{
            return []
        }

    }
})

export const {removeItem, selectItem, reset} = AddOnSlice.actions

export default AddOnSlice.reducer