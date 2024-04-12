import { useAppDispatch, useAppSelector } from "../hooks"
import { decrement, increment } from "../slices/StepSlice"

export default function Footer() {

    const step = useAppSelector((state) => state.steps.step)
    const dispatch = useAppDispatch()
    const personalInfo = useAppSelector((state) => state.personalInfo)
    const planSelection = useAppSelector((state) => state.planOption.planType)

    const handleNextStep = () => {
        if (step === 1) {
            if (personalInfo.isEmailCorrect && personalInfo.isNameCorrect && personalInfo.isPhoneCorrect)
                dispatch(increment())
        }
        else if (step === 2) {
            if (planSelection !== '')
                dispatch(increment())
        }
        else
            dispatch(increment())
    }


    return (
        <div className={`w-full flex justify-between`}>
            {(step !== 1 && step !== 4) &&
                <button className={`text-neutralCoolGray pl-4 pr-4 pt-2 pb-2 cursor-pointer`} onClick={() => dispatch(decrement())}>Go Back</button>
            }

            <button className={`bg-primaryMarineBlue text-neutralAlabaster pl-4 pr-4 pt-2 pb-2 rounded-md cursor-pointer ${(step === 1 || step === 4) ? 'ml-auto' : ''}`} onClick={handleNextStep}>Next Step</button>
        </div>
    )
}
