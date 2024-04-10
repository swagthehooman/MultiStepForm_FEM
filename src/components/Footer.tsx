import { useAppDispatch, useAppSelector } from "../hooks"
import { decrement, increment } from "../slices/StepSlice"

export default function Footer() {

    const step = useAppSelector((state) => state.steps.step)
    const dispatch = useAppDispatch()

    return (
        <div className={`w-full flex justify-between`}>
            {step !== 1 &&
                <button className={`text-neutralCoolGray pl-4 pr-4 pt-2 pb-2 cursor-pointer`} onClick={() => dispatch(decrement())}>Go Back</button>
            }

            <button className={`bg-primaryMarineBlue text-neutralAlabaster pl-4 pr-4 pt-2 pb-2 rounded-md cursor-pointer ${step === 1 ? 'ml-auto' : ''}`} onClick={() => dispatch(increment())}>Next Step</button>
        </div>
    )
}
