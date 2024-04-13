import { useAppSelector } from "../hooks"

export default function StepTrack() {

    const step = useAppSelector(state => state.steps.step)

    return (
        <div className="bg-desktop bg-cover bg-no-repeat rounded-md p-8 max-sm:bg-mobile max-sm:rounded-none max-sm:h-1/3 max-sm:w-screen max-sm:bg-contain">
            <ul className="flex flex-col gap-2 max-sm:flex-row max-sm:justify-center max-sm:items-center">
                <li className="flex gap-2 items-center">
                    <button className={`p-2 pr-4 pl-4 rounded-full ${step === 1 ? 'bg-primaryPastelBlue' : 'border-neutralAlabaster border-[1px]'}`}>
                        1
                    </button>
                    <div className="max-sm:hidden">
                        <span className="text-neutralLightGray text-xs">STEP 1</span>
                        <p className="text-neutralAlabaster text-sm font-semibold">YOUR INFO</p>
                    </div>
                </li>
                <li className="flex gap-2 items-center">
                    <button className={`p-2 pr-4 pl-4 rounded-full ${step === 2 ? 'bg-primaryPastelBlue' : 'border-neutralAlabaster border-[1px]'}`}>
                        2
                    </button>
                    <div className="max-sm:hidden">
                        <span className="text-neutralLightGray text-xs">STEP 2</span>
                        <p className="text-neutralAlabaster text-sm font-semibold">SELECT PLAN</p>
                    </div>
                </li>
                <li className="flex gap-2 items-center">
                    <button className={`p-2 pr-4 pl-4 rounded-full ${step === 3 ? 'bg-primaryPastelBlue' : 'border-neutralAlabaster border-[1px]'}`}>
                        3
                    </button>
                    <div className="max-sm:hidden">
                        <span className="text-neutralLightGray text-xs">STEP 3</span>
                        <p className="text-neutralAlabaster text-sm font-semibold">ADD-ONS</p>
                    </div>
                </li>
                <li className="flex gap-2 items-center">
                    <button className={`p-2 pr-4 pl-4 rounded-full ${step === 4 ? 'bg-primaryPastelBlue' : 'border-neutralAlabaster border-[1px]'}`}>
                        4
                    </button>
                    <div className="max-sm:hidden">
                        <span className="text-neutralLightGray text-xs">STEP 4</span>
                        <p className="text-neutralAlabaster text-sm font-semibold">SUMMARY</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}