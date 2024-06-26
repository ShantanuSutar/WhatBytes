"use client";
import { useState } from "react";
import Graph from "./_components/Graph";
import QuesAnalysis from "./_components/QuesAnalysis";
import Statistics from "./_components/Statistics";
import SyllabusWiseAnalysis from "./_components/SyllabusWiseAnalysis";
import Topic from "./_components/Topic";
import UpdateScoreModal from "./_components/UpdateScoreModal";

const SkillTest = () => {
  const [showModal, setShowModal] = useState(false);
  const [scores, setScores] = useState({
    rank: 1,
    percentile: 30,
    currentScore: 10,
  });

  return (
    <div className=" py-4 md:py-6 lg:py-8 px-5 md:px-10  lg:px-12  w-full relative">
      {/* Left */}
      <div className=" text-slate-600 font-semibold">Skill Test</div>
      <div className="flex justify-between mt-6 relative">
        <div>
          <Topic setShowModal={setShowModal} />
          <Statistics scores={scores} />
          <Graph scores={scores} />
        </div>
        {/* Right */}
        <div>
          <SyllabusWiseAnalysis />
          <QuesAnalysis />
        </div>
      </div>
      {showModal && (
        <div className=" absolute left-[15%] top-0 md:top-[15%] bg-white  md:left-[20%] border rounded-lg">
          <UpdateScoreModal
            scores={scores}
            setScores={setScores}
            setShowModal={setShowModal}
          />
        </div>
      )}
    </div>
  );
};

export default SkillTest;
