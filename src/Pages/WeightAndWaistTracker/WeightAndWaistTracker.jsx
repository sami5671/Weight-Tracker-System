import React, { useState } from "react";

const WeightWaistTracker = () => {
  const [morningWeight, setMorningWeight] = useState("");
  const [eveningWeight, setEveningWeight] = useState("");
  const [morningWaistSize, setMorningWaistSize] = useState("");
  const [eveningWaistSize, setEveningWaistSize] = useState("");

  const handleSaveMeasurements = () => {
    // Handle saving weight and waist measurements
    console.log("Measurements saved:", {
      morningWeight,
      eveningWeight,
      morningWaistSize,
      eveningWaistSize,
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Weight and Waist Tracker</h2>
      <div className="mb-4">
        <label
          htmlFor="morningWeight"
          className="block text-sm font-medium text-gray-700"
        >
          Morning Weight:
        </label>
        <input
          type="number"
          id="morningWeight"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={morningWeight}
          onChange={(e) => setMorningWeight(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="eveningWeight"
          className="block text-sm font-medium text-gray-700"
        >
          Evening Weight:
        </label>
        <input
          type="number"
          id="eveningWeight"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={eveningWeight}
          onChange={(e) => setEveningWeight(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="morningWaistSize"
          className="block text-sm font-medium text-gray-700"
        >
          Morning Waist Size:
        </label>
        <input
          type="number"
          id="morningWaistSize"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={morningWaistSize}
          onChange={(e) => setMorningWaistSize(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="eveningWaistSize"
          className="block text-sm font-medium text-gray-700"
        >
          Evening Waist Size:
        </label>
        <input
          type="number"
          id="eveningWaistSize"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={eveningWaistSize}
          onChange={(e) => setEveningWaistSize(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSaveMeasurements}
      >
        Save Measurements
      </button>
    </div>
  );
};

export default WeightWaistTracker;
