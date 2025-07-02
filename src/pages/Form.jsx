import React, { useState } from "react";
import QuestionTransition from "../components/QuestionTransition"; // add this!
import { auth, db } from "../firebase"; // adjust the path if needed
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";


const questions = [
  "What’s something you deeply care about that most people don’t notice?",
  "Which moment in your life would you relive if you could?",
  "What do people misunderstand about you when they first meet you?",
  "What kind of person makes you feel safest?",
  "When do you feel the most loved?",
  "What's a green flag you always look for in someone?",
  "What’s your toxic trait in relationships—but like, in a cute way?",
  "If someone wanted to impress you with just a text, what should they say?",
  "What’s a weird hill you’re willing to die on?",
  "Finish this: ‘I’d fall for someone who…’"
];

export default function Form() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [showTransition, setShowTransition] = useState(false);

  const handleInput = (e) => {
    const updated = [...answers];
    updated[currentQ] = e.target.value;
    setAnswers(updated);
  };

  const handleBack = () => {
  if (currentQ > 0) {
    setCurrentQ(currentQ - 1);
  }
};


  const handleNext = async () => {
  if (currentQ === questions.length - 1) {
    const user = auth.currentUser;

    if (!user) {
      console.error("User not logged in.");
      return;
    }

    // Create question-answer mapping
    const answersObject = {};
    questions.forEach((q, i) => {
      answersObject[q] = answers[i];
    });

    // Save to Firebase
    try {
      await set(ref(db, `users/${user.uid}/answers`), answersObject);
      console.alert("Answers saved!");
      navigate("/swipe");
    } catch (err) {
      console.error("Error saving answers:", err);
    }

    return;
  }


    // Start transition animation
    setShowTransition(true);

    // Wait 2 seconds for the heart to animate before showing next question
    setTimeout(() => {
      setCurrentQ(currentQ + 1);
      setShowTransition(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="dancing text-5xl text-pink-400 mb-2 text-center opacity-90">
        Build Your Personality
      </h2>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-xl mt-10">
        {/* Transition Screen */}
        {showTransition ? (
          <QuestionTransition progress={currentQ + 1} />
        ) : (
          <>
            <h2 className=" text-xl text-pink-300 mb-6 text-center opacity-90 font-serif">
              {questions[currentQ]}
            </h2>

            <textarea
              value={answers[currentQ]}
              onChange={handleInput}
              rows={4}
              className="p-4 rounded-xl border-1 border-pink-400 bg-transparent text-white placeholder-pink-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300 shadow-[0_0_5px_#ec4899] transition-all duration-300 resize-none font-serif w-[80%]"
              placeholder="Spill the tea, bestie 💅"
            />

            <div className="flex justify-between items-center w-[80%] mx-auto mt-6">
  <button
    onClick={handleBack}
    disabled={currentQ === 0}
    className="sparkly px-4 py-2 rounded-full disabled:opacity-30"
  >
    ← Back
  </button>

  <button
    onClick={handleNext}
    className="sparkly px-4 py-2 rounded-full"
  >
    {currentQ === questions.length - 1 ? "Submit" : "Next →"}
  </button>
</div>

          </>
        )}
      </div>
    </div>
  );
}

