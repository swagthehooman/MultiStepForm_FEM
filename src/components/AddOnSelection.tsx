import Footer from "./Footer";

export default function AddOnSelection() {
    return (
        <div className="pt-8 pb-8 flex justify-center items-center">
            <div className="w-3/4">
                <div className="mb-8">
                    <p className="text-primaryMarineBlue font-bold text-2xl">Pick add-ons</p>
                    <p className="text-neutralCoolGray font-thin text-sm">Add-ons help enhance your gaming experience.</p>
                </div>
                <div className="mb-8 flex items-center justify-between border-neutralCoolGray border-[1px] p-4 rounded-md
                ">
                    <div className="flex items-center gap-4">
                        <input type="checkbox" className="peer" />
                        <div>
                            <p className="text-primaryMarineBlue font-semibold text-base">Online service</p>
                            <p className="text-neutralCoolGray font-thin text-sm">Access to multiplayer games</p>
                        </div>
                    </div>
                    <p className="text-primaryPurplishBlue">+$1/mo</p>
                </div>
                <div className="mb-8 flex items-center justify-between border-neutralCoolGray border-[1px] p-4 rounded-md">
                    <div className="flex items-center gap-4">
                        <input type="checkbox" />
                        <div>
                            <p className="text-primaryMarineBlue font-semibold text-base">Large storage</p>
                            <p className="text-neutralCoolGray font-thin text-sm">Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    <p className="text-primaryPurplishBlue">+$2/mo</p>
                </div>
                <div className="mb-16 flex items-center justify-between border-neutralCoolGray border-[1px] p-4 rounded-md">
                    <div className="flex items-center gap-4">
                        <input type="checkbox" />
                        <div>
                            <p className="text-primaryMarineBlue font-semibold text-base">Customizable Profile</p>
                            <p className="text-neutralCoolGray font-thin text-sm">Custom theme on your profile</p>
                        </div>
                    </div>
                    <p className="text-primaryPurplishBlue">+$2/mo</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}
