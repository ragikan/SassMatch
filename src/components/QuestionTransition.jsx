import React from "react";


export default function QuestionTransition({ progress }) {
  const fillPercent = (progress / 10) * 100;

  return (
  <div className="flex flex-col items-center justify-center h-64 transition-all duration-700 ease-in-out">
    {/* Heart Icon in front */}
    <div className="relative w-32 h-32">
      
      {/* Background circle filling up */}
      <div className="absolute inset-0 rounded-full bg-pink-500 bg-opacity-20 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full bg-pink-400 shimmer transition-all"
          style={{
            height: `${fillPercent}%`,
            transitionDuration: "6s"
          }}
        />
      </div>

      
    </div>

    <p className="mt-4 text-sm text-pink-200">{progress}/10 Questions Answered</p>
  </div>
);
}
