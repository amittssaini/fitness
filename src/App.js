import { useState } from "react";
import UserForm from "./components/UserForm";
import PlanResult from "./components/PlanResult";

function App() {
  const [plan, setPlan] = useState(null);

  return (
    <div className="min-h-screen p-10 bg-gray-100 flex justify-center">
      {!plan ? (
        <UserForm onPlanGenerated={setPlan} />
      ) : (
        <PlanResult plan={plan} onBack={() => setPlan(null)} />
      )}
    </div>
  );
}

export default App;
