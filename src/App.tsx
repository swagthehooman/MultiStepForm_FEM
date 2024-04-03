import PersonalInfo from "./components/PersonalInfo";
import StepTrack from "./components/StepTrack";

export default function App() {
  return <div className="font-ubuntu font-normal grid grid-cols-custom p-4 rounded-md bg-neutralWhite h-3/5">
    <StepTrack />
    <PersonalInfo />
  </div>
}