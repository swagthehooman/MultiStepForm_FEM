import { useAppDispatch, useAppSelector } from "../hooks";
import { jumpToPageNumber } from "../slices/StepSlice";
import { reset } from "../slices/AddOnSlice";
import { resetMethod } from "../slices/PaymentPeriodSlice";
import { resetPlan } from "../slices/PlanOptionSlice";
import Footer from "./Footer";

const Choices = ({ addOns, prices, period }: { addOns: string, prices: number, period: boolean }) => {
    return <div className="flex justify-between items-center">
        <p className="text-neutralCoolGray font-thin text-sm">{addOns}</p>
        <p className="text-sm font-semibold text-neutralCoolGray">+${prices}/{period ? 'mo' : 'yr'}</p>
    </div>
}

export default function Summary() {
    const addOns = useAppSelector(state => state.addOns)
    const planOption = useAppSelector(state => state.planOption)
    const paymentMethod = useAppSelector(state => state.paymentPeriod.paymentMethod)
    const stepDispatch = useAppDispatch()
    const addOnDispatch = useAppDispatch()
    const planOptionDispatch = useAppDispatch()
    const paymentMethodDispatch = useAppDispatch()

    const getTotal = () => {
        let sum = 0
        addOns.map(i => sum += i.price)
        return sum + planOption.price
    }

    const changeAllSelections = () => {
        stepDispatch(jumpToPageNumber(2))
        planOptionDispatch(resetPlan())
        paymentMethodDispatch(resetMethod())
        addOnDispatch(reset())
    }

    return (
        <div className="pt-8 pb-8 flex justify-center items-center">
            <div className="w-3/4">
                <div className="mb-8">
                    <p className="text-primaryMarineBlue font-bold text-2xl">Finishing up</p>
                    <p className="text-neutralCoolGray font-thin text-sm">Double-check everything looks OK before confirming.</p>
                </div>
                <div className="mb-8 bg-neutralMagnolia rounded-md p-4">
                    <div className="flex justify-between items-center pb-4 border-b-[1px] border-neutralLightGray">
                        <div>
                            <p className="text-primaryMarineBlue font-semibold text-base">{planOption.planType} {paymentMethod ? '(Yearly)' : '(Monthly)'}</p>
                            <button className="cursor-pointer underline text-primaryPurplishBlue text-sm" onClick={changeAllSelections}>Change</button>
                        </div>
                        <p className="text-primaryMarineBlue font-semibold text-base">${planOption.price}/{paymentMethod ? 'yr' : 'mo'}</p>
                    </div>
                    <div className="flex flex-col gap-2 pt-4">
                        {addOns.map((i, index: number) => <Choices key={index} addOns={i.addOn} prices={i.price} period={paymentMethod} />)}
                    </div>
                </div>
                <div className="mb-16 p-4 flex justify-between">
                    <p className="text-sm font-thin text-neutralCoolGray">Total (per {paymentMethod ? 'year' : 'month'})</p>
                    <p className="text-primaryPurplishBlue font-bold text-xl">${getTotal()}/{paymentMethod ? 'mo' : 'yr'}</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}
