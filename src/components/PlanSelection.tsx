import Footer from "./Footer";

export default function PlanSelection() {
    return (
        <div className="pt-8 pb-8 flex justify-center items-center">
            <div className="w-3/4">
                <div className="mb-8">
                    <p className="text-primaryMarineBlue font-bold text-2xl">Select your plan</p>
                    <p className="text-neutralCoolGray font-thin text-sm">You have the option of monthly or yearly billing.</p>
                </div>
                <div className="flex gap-4 justify-between h-40">
                    <button className="p-3 w-1/3 border-neutralLightGray hover:border-primaryPurplishBlue border-2 rounded-md flex flex-col justify-between hover:bg-neutralMagnolia">
                        <img src="./assets/images/icon-arcade.svg" />
                        <div>
                            <p>Arcade</p>
                            <p>$9/mo</p>
                        </div>
                    </button>
                    <button className="p-3 w-1/3 border-neutralLightGray hover:border-primaryPurplishBlue border-2 rounded-md flex flex-col justify-between hover:bg-neutralMagnolia">
                        <img src="./assets/images/icon-advanced.svg" />
                        <div>
                            <p>Advanced</p>
                            <p>$12/mo</p>
                        </div>
                    </button>
                    <button className="p-3 w-1/3 border-neutralLightGray hover:border-primaryPurplishBlue border-2 rounded-md flex flex-col justify-between hover:bg-neutralMagnolia">
                        <img src="./assets/images/icon-pro.svg" />
                        <div>
                            <p>Pro</p>
                            <p>$15/mo</p>
                        </div>
                    </button>
                </div>
                <div className="w-full p-4 rounded-md mt-8 mb-16 flex items-center justify-center gap-4 bg-neutralMagnolia">
                    <p>Monthly</p>
                    <label className="bg-primaryMarineBlue relative w-12 h-6 rounded-full cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <span className="w-1/4 h-2/4 bg-neutralAlabaster absolute top-1.5 left-1 rounded-full peer-checked:left-8 transition-all duration-200" />
                    </label>

                    <p>Yearly</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}
