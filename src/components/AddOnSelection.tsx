import Footer from "./Footer";

export default function AddOnSelection() {
    return (
        <div className="pt-8 pb-8 flex justify-center items-center">
            <div className="w-3/4">
                <div className="mb-8">
                    <p className="text-primaryMarineBlue font-bold text-2xl">Pick add-ons</p>
                    <p className="text-neutralCoolGray font-thin text-sm">Add-ons help enhance your gaming experience.</p>
                </div>
                <div className="mb-8">
                    <div>
                        <input type="checkbox" />
                        <div>
                            <p>Online service</p>
                            <p>Access to multiplayer games</p>
                        </div>
                    </div>
                    <p>+$1/mo</p>
                </div>
                <div className="mb-8">
                    <div>
                        <input type="checkbox" />
                        <div>
                            <p>Online service</p>
                            <p>Access to multiplayer games</p>
                        </div>
                    </div>
                    <p>+$1/mo</p>
                </div>
                <div className="mb-16">
                    <div>
                        <input type="checkbox" />
                        <div>
                            <p>Online service</p>
                            <p>Access to multiplayer games</p>
                        </div>
                    </div>
                    <p>+$1/mo</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}
