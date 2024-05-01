import { useState } from "react";
import Container from "../../Container";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSaveProfile = () => {
    // Handle saving user profile data
    console.log("User profile saved:", { name, age, gender });
  };

  return (
    <section className="">
      <Container>
        <div className="">
          <h2 className="text-2xl font-bold">User Profile</h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age:
            </label>
            <input
              type="number"
              id="age"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender:
            </label>
            <select
              id="gender"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSaveProfile}
          >
            Save Profile
          </button>
        </div>
      </Container>
    </section>
  );
};

export default UserProfile;
