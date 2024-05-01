import React, { useState } from "react";

const MealTracker = () => {
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [portionSize, setPortionSize] = useState("");

  const handleSaveMeal = () => {
    // Handle saving meal data
    console.log("Meal saved:", { mealName, calories, portionSize });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Meal Tracker</h2>
      <div className="mb-4">
        <label
          htmlFor="mealName"
          className="block text-sm font-medium text-gray-700"
        >
          Meal Name:
        </label>
        <input
          type="text"
          id="mealName"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="calories"
          className="block text-sm font-medium text-gray-700"
        >
          Calories:
        </label>
        <input
          type="number"
          id="calories"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="portionSize"
          className="block text-sm font-medium text-gray-700"
        >
          Portion Size (grams):
        </label>
        <input
          type="number"
          id="portionSize"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={portionSize}
          onChange={(e) => setPortionSize(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSaveMeal}
      >
        Save Meal
      </button>
    </div>
  );
};

export default MealTracker;
