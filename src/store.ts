import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./slices/StepSlice";
import personalInfoReducer from "./slices/PersonalInfoSlice";
import paymentOptionReducer from "./slices/PaymentPeriodSlice";
import addOnsReducer from "./slices/AddOnSlice";
import planOptionReducer from "./slices/PlanOptionSlice";

export const store = configureStore({
    reducer:{
        steps: stepReducer,
        paymentPeriod: paymentOptionReducer,
        personalInfo: personalInfoReducer,
        planOption: planOptionReducer,
        addOns: addOnsReducer
    }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch