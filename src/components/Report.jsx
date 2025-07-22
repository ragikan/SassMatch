import React from 'react';
import { useLocation } from 'react-router-dom';
import { matchBreakdown } from './MatchBreakdown'; // wherever your breakdown file is

export default function Report({ theyAreYourType, youAreTheirType, BisAType}) {
  const sortedTheyAreYourType = [...theyAreYourType].sort((a, b) => a.difference - b.difference);
  

  let extremeTheyAre = [];

if (BisAType >= 80) {
  extremeTheyAre = sortedTheyAreYourType.slice(0, 6);
} else if (BisAType >= 60) {
  extremeTheyAre = sortedTheyAreYourType.slice(1, 7);
} else if (BisAType >= 40) {
  extremeTheyAre = sortedTheyAreYourType.slice(2, 8);
} else if (BisAType >= 20) {
  extremeTheyAre = sortedTheyAreYourType.slice(3, 9);
} else {
  extremeTheyAre = sortedTheyAreYourType.slice(4, 10);
}

  

  const flattenedBreakdown = matchBreakdown.flat();

const getSentence = ({ id, value, difference, matchValue }) => {
  const found = flattenedBreakdown.find(
    (line) =>
      line.id === id &&
      line.value === value &&
      line.matchValue === matchValue &&
      line.difference === difference
  );
  return found?.sentence || "This match is too chaotic to decode 😵‍💫";
};




  return (
    <div className="mt-6 p-6 bg-gray-800 rounded-xl text-white shadow-md max-w-3xl mx-auto">
      <h2 className="text-pink-300 text-2xl font-bold mb-4">💘 SassMatch Compatibility Report</h2>

      <div className="mb-8">
  <h3 className="text-lg font-semibold text-pink-200 mb-3">
    How much *they* are your type 👀
  </h3>
  <p className="text-sm text-white bg-gray-700 p-4 rounded-lg leading-relaxed">
    {extremeTheyAre.map((entry) => getSentence(entry)).join('\n')}
  </p>
</div>





    </div>
  );
}