import { useAppDispatch, useAppSelector } from "../hooks";
import { setName, setEmail, setPhone, isEmailCorrect, isNameCorrect, isPhoneCorrect } from "../slices/PersonalInfoSlice";
import Footer from "./Footer";

export default function PersonalInfo() {

    const personalInfo = useAppSelector((state) => state.personalInfo)
    const dispatch = useAppDispatch()

    return (
        <div className="pt-8 pb-8 flex justify-center items-center">
            <div className="w-3/4">
                <div className="mb-8">
                    <p className="text-primaryMarineBlue font-bold text-2xl">Personal info</p>
                    <p className="text-neutralCoolGray font-thin text-sm">Please provide your name, email address, and phone number.</p>
                </div>

                <div className="flex flex-col mb-4">
                    <div className="flex justify-between mb-1">
                        <label className="text-primaryMarineBlue text-sm font-medium">Name</label>
                        {!personalInfo.isNameCorrect &&
                            <label className="text-primaryStrawberryRed text-sm font-bold">This field is required</label>
                        }
                    </div>
                    <input type="text" value={personalInfo.name} placeholder="e.g. Stephen King" onChange={(e) => {
                        dispatch(setName(e.target.value))
                        dispatch(isNameCorrect())
                    }} className="w-full border-2 rounded-md p-2 border-neutralCoolGray focus:outline-none text-primaryMarineBlue font-bold cursor-pointer" />
                </div>
                <div className="flex flex-col mb-4">
                    <div className="flex justify-between mb-1">
                        <label className="text-primaryMarineBlue text-sm font-medium">Email Address</label>
                        {!personalInfo.isEmailCorrect && personalInfo.email === '' &&
                            <label className="text-primaryStrawberryRed text-sm font-bold">This field is required</label>
                        }
                        {!personalInfo.isEmailCorrect && personalInfo.email !== '' &&
                            <label className="text-primaryStrawberryRed text-sm font-bold">wrong email</label>
                        }
                    </div>
                    <input type="email" value={personalInfo.email} placeholder="e.g. stephenking@lorem.com" onChange={(e) => {
                        dispatch(setEmail(e.target.value))
                        dispatch(isEmailCorrect())
                    }} className="w-full border-2 rounded-md p-2 border-neutralCoolGray focus:outline-none text-primaryMarineBlue font-bold cursor-pointer" />
                </div>
                <div className="flex flex-col mb-16">
                    <div className="flex justify-between mb-1">
                        <label className="text-primaryMarineBlue text-sm font-medium">Phone Number</label>
                        {!personalInfo.isPhoneCorrect && personalInfo.phone === '' &&
                            <label className="text-primaryStrawberryRed text-sm font-bold">This field is required</label>
                        }
                        {personalInfo.phone !== '' && !personalInfo.isPhoneCorrect &&
                            <label className="text-primaryStrawberryRed text-sm font-bold">wrong phone number</label>
                        }
                    </div>
                    <input type="text" value={personalInfo.phone} placeholder="e.g. +1234567890" onChange={(e) => {
                        dispatch(setPhone(e.target.value))
                        dispatch(isPhoneCorrect())
                    }} className="w-full border-2 rounded-md p-2 border-neutralCoolGray focus:outline-none text-primaryMarineBlue font-bold cursor-pointer" />
                </div>
                <Footer />
            </div>

        </div>
    )
}
