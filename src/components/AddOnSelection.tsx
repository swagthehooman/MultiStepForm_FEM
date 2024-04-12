import { useAppDispatch, useAppSelector } from "../hooks";
import Footer from "./Footer";
import { removeItem, selectItem } from "../slices/AddOnSlice";

export default function AddOnSelection() {

    const addOnSelection = useAppSelector(state => state.addOns)
    const paymentMethod = useAppSelector(state => state.paymentPeriod.paymentMethod)
    const addOnSelectionDispatch = useAppDispatch()

    const handleAddToList = (addOn: string, price: number) => {
        if (addOnSelection.find(i => i.addOn === addOn)) {
            addOnSelectionDispatch(removeItem(addOn))
        } else {
            if (paymentMethod)
                addOnSelectionDispatch(selectItem({ addOn: addOn, price: price * 10 }))
            else
                addOnSelectionDispatch(selectItem({ addOn: addOn, price: price }))
        }
    }

    return (
        <div className="pt-8 pb-8 flex justify-center items-center">
            <div className="w-3/4">
                <div className="mb-8">
                    <p className="text-primaryMarineBlue font-bold text-2xl">Pick add-ons</p>
                    <p className="text-neutralCoolGray font-thin text-sm">Add-ons help enhance your gaming experience.</p>
                </div>
                <div className={`mb-8 flex items-center justify-between border-neutralCoolGray border-[1px] p-4 rounded-md hover:border-primaryPurplishBlue hover:bg-neutralMagnolia cursor-pointer ${addOnSelection.find(i => i.addOn === 'Online service') ? 'border-primaryPurplishBlue bg-neutralMagnolia' : ''}`} onClick={() => handleAddToList('Online service', 1)}>
                    <div className="flex items-center gap-4">
                        <div className={`p-1.5 rounded-md hover:bg-neutralMagnolia ${!addOnSelection.find(i => i.addOn === 'Online service') ? 'bg-neutralAlabaster' : 'bg-primaryPurplishBlue'}`}>
                            <img src="./assets/images/icon-checkmark.svg" />
                        </div>
                        <div>
                            <p className="text-primaryMarineBlue font-semibold text-base">Online service</p>
                            <p className="text-neutralCoolGray font-thin text-sm">Access to multiplayer games</p>
                        </div>
                    </div>
                    <p className="text-primaryPurplishBlue">{paymentMethod ? '+$10/yr' : '+$1/mo'}</p>
                </div>
                <div className={`mb-8 flex items-center justify-between border-neutralCoolGray border-[1px] p-4 rounded-md hover:border-primaryPurplishBlue hover:bg-neutralMagnolia cursor-pointer ${addOnSelection.find(i => i.addOn === 'Large storage') ? 'border-primaryPurplishBlue bg-neutralMagnolia' : ''}`} onClick={() => handleAddToList('Large storage', 2)}>
                    <div className="flex items-center gap-4">
                        <div className={`p-1.5 rounded-md hover:bg-neutralMagnolia ${!addOnSelection.find(i => i.addOn === 'Large storage') ? 'bg-neutralAlabaster' : 'bg-primaryPurplishBlue'}`}>
                            <img src="./assets/images/icon-checkmark.svg" />
                        </div>
                        <div>
                            <p className="text-primaryMarineBlue font-semibold text-base">Large storage</p>
                            <p className="text-neutralCoolGray font-thin text-sm">Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    <p className="text-primaryPurplishBlue">{paymentMethod ? '+$20/yr' : '+$2/mo'}</p>
                </div>
                <div className={`mb-16 flex items-center justify-between border-neutralCoolGray border-[1px] p-4 rounded-md hover:border-primaryPurplishBlue hover:bg-neutralMagnolia cursor-pointer ${addOnSelection.find(i => i.addOn === 'Customizable profile') ? 'border-primaryPurplishBlue bg-neutralMagnolia' : ''}`} onClick={() => handleAddToList('Customizable profile', 2)}>
                    <div className="flex items-center gap-4">
                        <div className={`p-1.5 rounded-md hover:bg-neutralMagnolia ${!addOnSelection.find(i => i.addOn === 'Customizable profile') ? 'bg-neutralAlabaster' : 'bg-primaryPurplishBlue'}`}>
                            <img src="./assets/images/icon-checkmark.svg" />
                        </div>
                        <div>
                            <p className="text-primaryMarineBlue font-semibold text-base">Customizable profile</p>
                            <p className="text-neutralCoolGray font-thin text-sm">Custom theme on your profile</p>
                        </div>
                    </div>
                    <p className="text-primaryPurplishBlue">{paymentMethod ? '+$20/yr' : '+$2/mo'}</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}
