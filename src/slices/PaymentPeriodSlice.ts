import { createSlice } from "@reduxjs/toolkit";

interface IPaymentPeriodState {
    paymentMethod: boolean
}

// false for monthly
const initialState: IPaymentPeriodState = {
    paymentMethod: false
}

const PaymentPeriodSlice = createSlice({
    name: 'paymentperiod',
    initialState,
    reducers: {
        changePaymentPeriod: (state)=>{
            state.paymentMethod = !state.paymentMethod
        }
    }
})

export const { changePaymentPeriod } = PaymentPeriodSlice.actions

export default PaymentPeriodSlice.reducer