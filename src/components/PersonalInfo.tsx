import Footer from "./Footer";

export default function PersonalInfo() {
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
                        <label className="text-primaryStrawberryRed text-sm font-bold">This field is required</label>
                    </div>
                    <input type="text" className="w-full border-2 rounded-md p-2 border-neutralCoolGray focus:outline-none text-primaryMarineBlue font-bold cursor-pointer" />
                </div>
                <div className="flex flex-col mb-4">
                    <div className="flex justify-between mb-1">
                        <label className="text-primaryMarineBlue text-sm font-medium">Email Address</label>
                        <label className="text-primaryStrawberryRed text-sm font-bold">This field is required</label>
                    </div>
                    <input type="email" className="w-full border-2 rounded-md p-2 border-neutralCoolGray focus:outline-none text-primaryMarineBlue font-bold cursor-pointer" />
                </div>
                <div className="flex flex-col mb-16">
                    <div className="flex justify-between mb-1">
                        <label className="text-primaryMarineBlue text-sm font-medium">Phone Number</label>
                        <label className="text-primaryStrawberryRed text-sm font-bold">This field is required</label>
                    </div>
                    <input type="text" className="w-full border-2 rounded-md p-2 border-neutralCoolGray focus:outline-none text-primaryMarineBlue font-bold cursor-pointer" />
                </div>
                <Footer />
            </div>

        </div>
    )
}
