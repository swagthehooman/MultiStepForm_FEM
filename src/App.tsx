import AddOnSelection from "./components/AddOnSelection";
import PersonalInfo from "./components/PersonalInfo";
import PlanSelection from "./components/PlanSelection";
import StepTrack from "./components/StepTrack";

export default function App() {
  return <div className="font-ubuntu font-normal grid grid-cols-custom p-4 rounded-md bg-neutralWhite">
    <StepTrack />
    <AddOnSelection />
    {/* <PlanSelection /> */}
    {/* <PersonalInfo /> */}
  </div>
}