import { useState } from "react";
import { generateAIPlan } from "../services/geminiService";
export default function UserForm({ onPlanGenerated }) {

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    heightFeet: "",
    heightInches: "",
    weight: "",
    goal: "",
    level: "",
    location: "",
    diet: "",
  });
  const [loading,setLoading]=useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleDietPlan=async()=>{
    console.log("diet plan value")
   // setLoading(true)
    console.log("diet plan")
   const result = await generateAIPlan(form);
  onPlanGenerated(result);

  //setLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form Submitted:", form);
    handleDietPlan();
  };


  return (
    <div className="bg-white p-6 rounded-xl shadow-xl max-w-2xl w-full">

      <h2 className="text-3xl font-bold mb-6">Fitness Details</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div>
          <label className="font-semibold">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            placeholder="Your Name"
          />
        </div>

        {/* Age */}
        <div>
          <label className="font-semibold">Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            placeholder="Age"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="font-semibold">Gender</label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              Male
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        {/* Height */}
        <div>
          <label className="font-semibold">Height</label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input
              type="number"
              name="heightFeet"
              value={form.heightFeet}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              placeholder="Feet"
            />
            <input
              type="number"
              name="heightInches"
              value={form.heightInches}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              placeholder="Inches"
            />
          </div>
        </div>

        {/* Weight */}
        <div>
          <label className="font-semibold">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            placeholder="Weight in kg"
          />
        </div>

        {/* Goal */}
        <div>
          <label className="font-semibold">Fitness Goal</label>
          <select
            name="goal"
            value={form.goal}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Goal</option>
            <option value="weight_loss">Weight Loss</option>
            <option value="muscle_gain">Muscle Gain</option>
            <option value="general_fitness">General Fitness</option>
          </select>
        </div>

        {/* Fitness Level */}
        <div>
          <label className="font-semibold">Fitness Level</label>
          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Workout Location */}
        <div>
          <label className="font-semibold">Workout Location</label>
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Choose Location</option>
            <option value="home">Home</option>
            <option value="gym">Gym</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </div>

        {/* Diet Preference */}
        <div>
          <label className="font-semibold">Diet Preference</label>
          <select
            name="diet"
            value={form.diet}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Diet</option>
            <option value="veg">Vegetarian</option>
            <option value="non_veg">Non-Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="keto">Keto</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Generate Plan
        </button>
      </form>
    </div>
  );
}
