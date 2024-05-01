import React, { useState } from "react";

const ExerciseTracker = () => {
  const [exerciseType, setExerciseType] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");

  const handleSaveExercise = () => {
    // Handle saving exercise data
    console.log("Exercise saved:", { exerciseType, duration, caloriesBurned });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Exercise Tracker</h2>
      <div className="mb-4">
        <label
          htmlFor="exerciseType"
          className="block text-sm font-medium text-gray-700"
        >
          Exercise Type:
        </label>
        <input
          type="text"
          id="exerciseType"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={exerciseType}
          onChange={(e) => setExerciseType(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="duration"
          className="block text-sm font-medium text-gray-700"
        >
          Duration (minutes):
        </label>
        <input
          type="number"
          id="duration"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="caloriesBurned"
          className="block text-sm font-medium text-gray-700"
        >
          Calories Burned:
        </label>
        <input
          type="number"
          id="caloriesBurned"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSaveExercise}
      >
        Save Exercise
      </button>
    </div>
  );
};

export default ExerciseTracker;
