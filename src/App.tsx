import AddOnSelection from "./components/AddOnSelection";
import PersonalInfo from "./components/PersonalInfo";
import PlanSelection from "./components/PlanSelection";
import StepTrack from "./components/StepTrack";
import Summary from "./components/Summary";
import ThankYou from "./components/ThankYou";
import { useAppSelector } from "./hooks";

export default function App() {

  const step = useAppSelector((state) => state.steps.step)

  return <div className="font-ubuntu font-normal grid grid-cols-custom p-4 rounded-md bg-neutralWhite">
    <StepTrack />
    {
      step === 1 ? <PersonalInfo /> :
        step === 2 ? <PlanSelection /> :
          step === 3 ? <AddOnSelection /> :
            step === 4 ? <Summary /> :
              <ThankYou />
    }
  </div>
}