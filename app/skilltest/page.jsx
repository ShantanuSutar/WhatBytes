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
    <>
      <div
        className={` py-4 md:py-6 lg:py-8 px-2 sm:px-5 md:px-8  lg:px-10 xl:px-12  w-full relative ${
          showModal ? " blur-md" : ""
        }`}
      >
        {/* Left */}
        <div className=" text-slate-600 font-semibold">Skill Test</div>
        <div className=" w-full flex xl:flex-row flex-col justify-between mt-6 relative">
          <div className=" w-full xl:w-[53%]">
            <Topic setShowModal={setShowModal} />
            <Statistics scores={scores} />
            <Graph scores={scores} />
          </div>
          {/* Right */}
          <div className=" w-full xl:w-[44%]">
            <SyllabusWiseAnalysis />
            <QuesAnalysis scores={scores} />
          </div>
        </div>
      </div>
      {showModal && (
        <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-white  border rounded-lg">
          <UpdateScoreModal
            scores={scores}
            setScores={setScores}
            setShowModal={setShowModal}
          />
        </div>
      )}
    </>
  );
};

export default SkillTest;
