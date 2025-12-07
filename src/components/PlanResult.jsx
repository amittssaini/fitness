export default function PlanResult({ plan, onBack }) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl max-w-2xl w-full">

      <button
        onClick={onBack}
        className="mb-4 text-sm bg-gray-700 px-3 py-1 rounded-lg"
      >
        ← Back to Form
      </button>

      <h2 className="text-3xl font-bold mb-4">Your AI Fitness Plan</h2>

      <div className="space-y-6">

        <section>
          <h3 className="text-xl font-bold">🏋️ Workout Plan</h3>
          <p className="whitespace-pre-wrap mt-2">{plan.workout}</p>
        </section>

        <section>
          <h3 className="text-xl font-bold">🥗 Diet Plan</h3>
          <p className="whitespace-pre-wrap mt-2">{plan.diet}</p>
        </section>

        <section>
          <h3 className="text-xl font-bold">💡 Tips</h3>
          <p className="whitespace-pre-wrap mt-2">{plan.tips}</p>
        </section>

        <section>
          <h3 className="text-xl font-bold">🔥 Motivation</h3>
          <p className="whitespace-pre-wrap mt-2">{plan.motivation}</p>
        </section>
      </div>
    </div>
  );
}
