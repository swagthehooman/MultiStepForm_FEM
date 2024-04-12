export default function ThankYou() {
    return (
        <div className="pt-8 pb-8 flex justify-center items-center">
            <div className="w-4/5 flex flex-col gap-4 justify-center items-center max-w-screen-sm min-h-96">
                <div className="w-full flex justify-center">
                    <img className="w-24 h-24" src="./assets/images/icon-thank-you.svg" />
                </div>
                <p className="text-primaryMarineBlue font-bold text-3xl">Thank You</p>
                <p className="text-neutralCoolGray font-thin text-md text-center">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    )
}
