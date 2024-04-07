import Footer from "./Footer";

const Choices = () => {
    return <div className="flex justify-between items-center">
        <p className="text-neutralCoolGray font-thin text-sm">Online service</p>
        <p className="text-sm font-semibold text-neutralCoolGray">+$1/mo</p>
    </div>
}

export default function Summary() {
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
                            <p className="text-primaryMarineBlue font-semibold text-base">Arcade (Monthly)</p>
                            <button className="cursor-pointer underline text-primaryPurplishBlue text-sm">Change</button>
                        </div>
                        <p className="text-primaryMarineBlue font-semibold text-base">$9/mo</p>
                    </div>
                    <div className="flex flex-col gap-2 pt-4">
                        <Choices />
                        <Choices />
                    </div>
                </div>
                <div className="mb-16 p-4 flex justify-between">
                    <p className="text-sm font-thin text-neutralCoolGray">Total (per month)</p>
                    <p className="text-primaryPurplishBlue font-bold text-xl">+$12/mo</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}
