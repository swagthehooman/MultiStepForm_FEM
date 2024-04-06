export default function StepTrack() {
    return (
        <div className="bg-desktop bg-cover bg-no-repeat rounded-md p-8">
            <ul className="flex flex-col gap-4">
                <li className="flex gap-2 items-center">
                    <button className="p-2 pr-4 pl-4 rounded-full bg-primaryPastelBlue">
                        1
                    </button>
                    <div>
                        <span className="text-neutralLightGray text-xs">STEP 1</span>
                        <p className="text-neutralAlabaster text-sm font-semibold">YOUR INFO</p>
                    </div>
                </li>
                <li className="flex gap-2 items-center">
                    <button className="p-2 pr-4 pl-4 rounded-full border-neutralAlabaster border-[1px]">
                        2
                    </button>
                    <div>
                        <span className="text-neutralLightGray text-xs">STEP 2</span>
                        <p className="text-neutralAlabaster text-sm font-semibold">SELECT PLAN</p>
                    </div>
                </li>
                <li className="flex gap-2 items-center">
                    <button className="p-2 pr-4 pl-4 rounded-full border-neutralAlabaster border-[1px]">
                        3
                    </button>
                    <div>
                        <span className="text-neutralLightGray text-xs">STEP 3</span>
                        <p className="text-neutralAlabaster text-sm font-semibold">ADD-ONS</p>
                    </div>
                </li>
                <li className="flex gap-2 items-center">
                    <button className="p-2 pr-4 pl-4 rounded-full border-neutralAlabaster border-[1px]">
                        4
                    </button>
                    <div>
                        <span className="text-neutralLightGray text-xs">STEP 4</span>
                        <p className="text-neutralAlabaster text-sm font-semibold">SUMMARY</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}