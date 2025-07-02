import React, { useState } from "react";
import { auth, db } from "../firebase";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { FiCamera } from "react-icons/fi";
import { FaMars, FaVenus, FaGenderless } from "react-icons/fa";
import AvatarPicker from "../components/AvatarPicker";
import { get, child } from "firebase/database";



export default function ProfileCard() {
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [preference, setPreference] = useState("");
  const [bio, setBio] = useState("");

  const handleAvatarClick = () => {
    setShowAvatarPicker(!showAvatarPicker);
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setShowAvatarPicker(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      alert("You're not logged in!");
      return;
    }

    const userData = {
      name,
      gender,
      age,
      preference,
      bio,
      avatarId: selectedAvatar?.id || null,
    };

    try {
    // Save profile info
    await set(ref(db, "users/" + user.uid), userData);

    // 🔍 Check if "answers" folder exists
    const snapshot = await get(child(ref(db), `users/${user.uid}/answers`));

    if (snapshot.exists()) {
      navigate("/swipe");
    } else {
      navigate("/form");
    }
    } catch (err) {
      console.error("Error saving data:", err);
      alert("Failed to save profile. Try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="dancing text-3xl lg:text-6xl font-bold text-pink-400 mb-30 mt-12 lg:mt-6 lg:mb-5">
        Build Your Profile Card
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-3xl shadow-md w-[80%] lg:w-[70%]"
      >
        {/* Avatar */}
        <div className="flex flex-col items-center justify-center mb-6 mt-5">
          <div
            onClick={handleAvatarClick}
            className="w-32 h-32 rounded-full bg-gray-900 border-4 border-pink-400 avatar-glow flex flex-col items-center justify-center"
          >
            {selectedAvatar ? (
              <img
                src={selectedAvatar.img}
                alt="Selected Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <FiCamera className="text-pink-400 text-3xl" />
            )}
          </div>
          <p className="text-pink-100 text-sm text-center leading-tight mt-5">
            Click here to choose an avatar
          </p>
        </div>

        {showAvatarPicker && (
          <AvatarPicker
            onSelect={handleAvatarSelect}
            onClose={() => setShowAvatarPicker(false)}
          />
        )}

        {/* Name Input */}
        <div className="w-full mt-6">
          <input
            type="text"
            placeholder="Enter your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border-0 border-b-2 border-pink-400 placeholder-pink-300 text-3xl dancing focus:outline-none focus:border-pink-500 focus:ring-0 transition-all duration-300 pb-2 text-pink-300 text-center"
            required
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col items-center mt-6 w-full">
          <h3 className="text-pink-300 mb-3 text-lg">Select Your Gender</h3>
          <div className="flex justify-center gap-6">
            <div
              onClick={() => setGender("male")}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                gender === "male" ? "text-pink-300" : "hover:text-pink-300"
              }`}
            >
              <FaMars
                className={`text-4xl text-pink-400 sparkly rounded-full ${
                  gender === "male"
                    ? "p-4 bg-pink-600 bg-opacity-30"
                    : "p-2"
                }`}
              />
              <span className="mt-1 text-sm">Male</span>
            </div>

            <div
              onClick={() => setGender("female")}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                gender === "female" ? "text-pink-300" : "hover:text-pink-300"
              }`}
            >
              <FaVenus
                className={`text-4xl text-pink-400 sparkly rounded-full ${
                  gender === "female"
                    ? "p-4 bg-pink-600 bg-opacity-30"
                    : "p-2"
                }`}
              />
              <span className="mt-1 text-sm">Female</span>
            </div>

            <div
              onClick={() => setGender("other")}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                gender === "other" ? "text-pink-300" : "hover:text-pink-300"
              }`}
            >
              <FaGenderless
                className={`text-4xl text-pink-400 sparkly rounded-full ${
                  gender === "other"
                    ? "p-4 bg-pink-600 bg-opacity-30"
                    : "p-2"
                }`}
              />
              <span className="mt-1 text-sm">Other</span>
            </div>
          </div>
        </div>

        {/* Age & Preference */}
        <div className="flex items-center justify-between gap-4 w-full mt-6">
          <div className="flex items-center w-1/2">
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full text-white placeholder-pink-200 focus:outline-none border-none bg-inherit bg-pink-300 bg-opacity-20 px-4 py-2 rounded-full border-2 border-pink-400 shadow-inner"
              required
            />
          </div>

          <div className="w-1/2">
            <select
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              className="bg-pink-300 bg-opacity-20 px-4 py-2 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all text-pink-200 w-full"
              required
            >
              <option value="" disabled>
                Looking for...
              </option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Everyone">Everyone</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
        </div>

        {/* Bio */}
        <div className="w-full mt-6">
          <label className="block text-pink-300 mb-2 text-lg">One-line Bio</label>
          <textarea
            placeholder="Tell us something iconic about yourself"
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-[90%] p-4 rounded-xl border-1 border-pink-400 bg-transparent text-white placeholder-pink-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300 shadow-[0_0_5px_#ec4899] transition-all duration-300 resize-none font-serif"
          />
        </div>

        {/* Submit */}
        <button type="submit" className="mt-6 sparkly p-3 rounded-full w-[60%] lg:max-w-sm">
          Submit Profile
        </button>
      </form>
    </div>
  );
}
