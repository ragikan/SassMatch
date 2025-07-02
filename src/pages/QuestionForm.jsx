import React, { useState } from 'react';
import { questionSet } from '../components/QuestionSet';
import QuestionTransition from '../components/QuestionTransition';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom'; // ✅ Import for navigation

export default function QuestionForm() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(
    questionSet.map(() => ({ self: null, partner: null }))
  );
  const [showTransition, setShowTransition] = useState(false);

  const navigate = useNavigate(); // ✅ Hook to navigate on submit

  const handleClick = (type, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQ][type] = index;
    setAnswers(updatedAnswers);
  };

  const handleNext = async () => {
    if (currentQ < questionSet.length - 1) {
      setShowTransition(true);
      setTimeout(() => {
        setCurrentQ(currentQ + 1);
        setShowTransition(false);
      }, 1000);
    } else {
      // ✅ Show transition and submit to Realtime DB
      setShowTransition(true);

      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const db = getDatabase();

        const formattedSelf = answers.map((entry, index) => ({
          id: questionSet[index].id,
          value: questionSet[index].optionsSelf[entry.self]?.value ?? null
        }));

        const formattedPartner = answers.map((entry, index) => ({
          id: questionSet[index].id,
          value: questionSet[index].optionsPartner[entry.partner]?.value ?? null
        }));

        try {
          await set(ref(db, 'users/' + user.uid + '/answers'), {
            self: formattedSelf,
            partner: formattedPartner
          });

          console.log('✅ Saved to Realtime Database');

          // ✅ Navigate to /swipe after 2s transition
          setTimeout(() => {
            navigate(`/swipe/${user.uid}`);
          }, 2000);
        } catch (error) {
          console.error('❌ Error saving to Realtime DB:', error);
        }
      }
    }
  };

  const handleBack = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const question = questionSet[currentQ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="dancing text-5xl text-pink-400 mb-2 text-center opacity-90">
        Build Your Personality
      </h2>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-5xl mt-10">
        {showTransition ? (
          <div className="w-full flex items-center justify-center">
            <QuestionTransition progress={currentQ + 1} />
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row lg:gap-4">
            {/* Self Question Block */}
            <div className="lg:w-1/2 w-full border-b lg:border-b-0 lg:border-r border-pink-300 flex flex-col items-center justify-center mb-6 lg:mb-0">
              <h2 className="text-xl text-pink-300 mb-6 text-center font-serif">
                {question.questionSelf}
              </h2>
              <div className="flex flex-col gap-4 w-full">
                {question.optionsSelf.map((opt, index) => (
                  <div
                    key={opt.label}
                    onClick={() => handleClick('self', index)}
                    className={`flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      answers[currentQ].self === index
                        ? 'bg-pink-500 text-white shadow-lg'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold border border-white">
                      {opt.label}
                    </div>
                    <div className="text-sm font-serif">{opt.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Question Block */}
            <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
              <h2 className="text-xl text-pink-300 mb-6 text-center font-serif">
                {question.questionPartner}
              </h2>
              <div className="flex flex-col gap-4 w-full">
                {question.optionsPartner.map((opt, index) => (
                  <div
                    key={opt.label}
                    onClick={() => handleClick('partner', index)}
                    className={`flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      answers[currentQ].partner === index
                        ? 'bg-pink-500 text-white shadow-lg'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold border border-white">
                      {opt.label}
                    </div>
                    <div className="text-sm font-serif">{opt.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      {!showTransition && (
        <div className="flex justify-between items-center w-[80%] mx-auto mt-6">
          <button
            onClick={handleBack}
            disabled={currentQ === 0 || showTransition}
            className="sparkly px-4 py-2 rounded-full disabled:opacity-30"
          >
            ← Back
          </button>

          <button
            onClick={handleNext}
            disabled={showTransition}
            className="sparkly px-4 py-2 rounded-full"
          >
            {currentQ === questionSet.length - 1 ? 'Submit' : 'Next →'}
          </button>
        </div>
      )}
    </div>
  );
}
