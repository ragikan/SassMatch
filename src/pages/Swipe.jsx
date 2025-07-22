import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useParams } from 'react-router-dom';
import calculateCompatibility from '../components/CalculateCompatibility';
import Report from '../components/Report';

export default function Swipe() {
  const { uid } = useParams();
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const db = getDatabase();

  useEffect(() => {
    if (!uid) return;

    const usersRef = ref(db, 'users/');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const allUsers = Object.entries(data).map(([id, info]) => ({
          id,
          ...info,
        }));

        const you = allUsers.find((u) => u.id === uid);
        const others = allUsers.filter((u) => u.id !== uid);

        if (you) setLoggedInUser(you);
        setUsers(others);
      }
    });
  }, [uid]);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const currentUser = users[currentIndex];

  const matchScore =
    loggedInUser && currentUser
      ? calculateCompatibility(loggedInUser, currentUser)
      : { AisBType: 0, BisAType: 0 };

    const { BisAType, AisBType } = matchScore;



    // You already have: loggedInUser, currentUser
    let theyAreYourType = [];
let youAreTheirType = [];

if (
  loggedInUser?.answers?.self &&
  loggedInUser?.answers?.partner &&
  currentUser?.answers?.self &&
  currentUser?.answers?.partner
) {
  const loggedInSelf = Object.values(loggedInUser.answers.self);
  const loggedInPartner = Object.values(loggedInUser.answers.partner);
  const currentSelf = Object.values(currentUser.answers.self);
  const currentPartner = Object.values(currentUser.answers.partner);

  // Sort by id just to make sure everything lines up
  loggedInSelf.sort((a, b) => a.id - b.id);
  loggedInPartner.sort((a, b) => a.id - b.id);
  currentSelf.sort((a, b) => a.id - b.id);
  currentPartner.sort((a, b) => a.id - b.id);

  // How much THEY are YOUR type
  theyAreYourType = loggedInPartner.map((ans, idx) => ({
    id: ans.id,
    value: ans.value ?? null,
    matchValue: currentSelf[idx]?.value ?? null, 
    difference: Math.abs((ans.value ?? 0) - (currentSelf[idx]?.value ?? 0))
  }));

  // How much YOU are THEIR type
  youAreTheirType = currentPartner.map((ans, idx) => ({
    id: ans.id,
    value: ans.value ?? null,
    difference: Math.abs((ans.value ?? 0) - (loggedInSelf[idx]?.value ?? 0))
  }));
}

console.log("They are your type:", theyAreYourType);
console.log("You are their type:", youAreTheirType);



  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      {loggedInUser === null ? (
        <div className="text-pink-200 text-lg">Loading your profile... 🧘‍♀️</div>
      ) : currentUser ? (
        <div className="w-full max-w-md text-center">
          {/* Profile Picture */}
          <div className="mx-auto mb-6 lg:w-1/2">
            <img
              src={`/src/assets/avatars/avatar${currentUser.avatarId}.jpeg`}
              alt={`Avatar ${currentUser.avatarId}`}
              className="rounded-2xl object-cover w-full h-auto border-2 border-pink-400 shadow-md"
            />
          </div>

          {/* User Info */}
          <h2 className="text-3xl font-bold text-pink-400 mb-2 text-left">
            {currentUser.name}
          </h2>
          <p className="text-pink-300 text-sm mb-4 text-left">{currentUser.bio}</p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleNext}
              className="sparkly px-4 py-2 rounded-full"
            >
              Nope 💔
            </button>
            <button
              onClick={handleNext}
              className="sparkly px-4 py-2 rounded-full"
            >
              Match 💖
            </button>
          </div>

          {/* Compatibility Score */}
          <div className="text-pink-300 text-sm mt-6 font-semibold">
            You are <span className="text-white">{matchScore.AisBType}%</span> their type 💖 <br />
            They are <span className="text-white">{matchScore.BisAType}%</span> your type 😍
          </div>

          <Report
         theyAreYourType={theyAreYourType}
         youAreTheirType={youAreTheirType}
         BisAType={BisAType}
        />
        </div>
      ) : (
        <div className="text-pink-200 text-xl">No more users to swipe 😢</div>
      )}
    </div>
  );
}