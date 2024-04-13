import { useAppDispatch, useAppSelector } from "../hooks";
import { changePaymentPeriod } from "../slices/PaymentPeriodSlice";
import { selectPlan, resetPlan } from "../slices/PlanOptionSlice";
import Footer from "./Footer";

export default function PlanSelection() {

    const planType = useAppSelector(state => state.planOption.planType)
    const paymentMethod = useAppSelector(state => state.paymentPeriod.paymentMethod)
    const paymentPeriodDispatch = useAppDispatch()
    const planSelectionDispatch = useAppDispatch()

    const handlePlanSelection = (planName: string) => {
        if (paymentMethod) {
            if (planName === 'Arcade')
                planSelectionDispatch(selectPlan({ planType: planName, price: 90 }))
            else if (planName === 'Advanced')
                planSelectionDispatch(selectPlan({ planType: planName, price: 120 }))
            else
                planSelectionDispatch(selectPlan({ planType: planName, price: 150 }))
        }
        else {
            if (planName === 'Arcade')
                planSelectionDispatch(selectPlan({ planType: planName, price: 9 }))
            else if (planName === 'Advanced')
                planSelectionDispatch(selectPlan({ planType: planName, price: 12 }))
            else
                planSelectionDispatch(selectPlan({ planType: planName, price: 15 }))
        }
    }

    const changePaymentMethod = () => {
        paymentPeriodDispatch(changePaymentPeriod())
        planSelectionDispatch(resetPlan())
    }

    return (
        <div className="pt-8 pb-8 flex justify-center items-center max-sm:absolute max-sm:top-40 max-sm:bg-neutralWhite max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:p-4 max-sm:pt-8 max-sm:pb-8 max-sm:w-4/5 max-sm:rounded-md">
            <div className="w-3/4 max-sm:w-full">
                <div className="mb-8">
                    <p className="text-primaryMarineBlue font-bold text-2xl max-sm:mb-2">Select your plan</p>
                    <p className="text-neutralCoolGray font-thin text-sm">You have the option of monthly or yearly billing.</p>
                </div>
                <div className="flex gap-4 justify-between h-40 max-sm:flex-col max-sm:w-full max-sm:h-auto">
                    <button className={`max-sm:flex-row max-sm:justify-start max-sm:gap-4 p-3 w-1/3 max-sm:w-full border-neutralLightGray hover:border-primaryPurplishBlue border-2 rounded-md flex flex-col justify-between hover:bg-neutralMagnolia ${planType === 'Arcade' ? 'border-primaryPurplishBlue bg-neutralMagnolia' : ''}`} onClick={() => handlePlanSelection('Arcade')}>
                        <img src="./assets/images/icon-arcade.svg" />
                        <div className="text-start">
                            <p className="text-primaryMarineBlue font-bold text-base">Arcade</p>
                            <p className="text-neutralCoolGray">{paymentMethod ? '$90/yr' : '$9/mo'}</p>
                            {paymentMethod && <p className="text-[0.75rem] text-primaryPurplishBlue">2 months free</p>}
                        </div>
                    </button>
                    <button className={`max-sm:flex-row max-sm:justify-start max-sm:gap-4 p-3 w-1/3 max-sm:w-full border-neutralLightGray hover:border-primaryPurplishBlue border-2 rounded-md flex flex-col justify-between hover:bg-neutralMagnolia ${planType === 'Advanced' ? 'border-primaryPurplishBlue bg-neutralMagnolia' : ''}`} onClick={() => handlePlanSelection('Advanced')}>
                        <img src="./assets/images/icon-advanced.svg" />
                        <div className="text-start">
                            <p className="text-primaryMarineBlue font-bold text-base">Advanced</p>
                            <p className="text-neutralCoolGray">{paymentMethod ? '$120/yr' : '$12/mo'}</p>
                            {paymentMethod && <p className="text-[0.75rem] text-primaryPurplishBlue">2 months free</p>}
                        </div>
                    </button>
                    <button className={`max-sm:flex-row max-sm:justify-start max-sm:gap-4 p-3 w-1/3 max-sm:w-full border-neutralLightGray hover:border-primaryPurplishBlue border-2 rounded-md flex flex-col justify-between hover:bg-neutralMagnolia ${planType === 'Pro' ? 'border-primaryPurplishBlue bg-neutralMagnolia' : ''}`} onClick={() => handlePlanSelection('Pro')}>
                        <img src="./assets/images/icon-pro.svg" />
                        <div className="text-start">
                            <p className="text-primaryMarineBlue font-bold text-base">Pro</p>
                            <p className="text-neutralCoolGray">{paymentMethod ? '$150/yr' : '$15/mo'}</p>
                            {paymentMethod && <p className="text-[0.75rem] text-primaryPurplishBlue">2 months free</p>}
                        </div>
                    </button>
                </div>
                <div className="w-full p-4 rounded-md mt-8 mb-16 flex items-center justify-center gap-4 bg-neutralMagnolia">
                    <p className={`${paymentMethod ? 'text-neutralCoolGray' : 'text-primaryMarineBlue'} font-bold text-sm`}>Monthly</p>
                    <label className="bg-primaryMarineBlue relative w-12 h-6 rounded-full cursor-pointer">
                        <input type="checkbox" className="sr-only peer" value={planType} onClick={changePaymentMethod} />
                        <span className="w-1/4 h-2/4 bg-neutralAlabaster absolute top-1.5 left-1 rounded-full peer-checked:left-8 transition-all duration-200" />
                    </label>

                    <p className={`${paymentMethod ? 'text-primaryMarineBlue' : 'text-neutralCoolGray'} font-bold text-sm`}> Yearly</p>
                </div>
                <Footer />
            </div>
        </div >
    )
}
