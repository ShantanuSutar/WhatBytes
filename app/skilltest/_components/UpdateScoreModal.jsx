import { TiHtml5 } from "react-icons/ti";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";

const UpdateScoreModal = ({ scores, setShowModal, setScores }) => {
  const [error, setError] = useState({
    rank: false,
    percentile: false,
    currentScore: false,
  });

  const handleSave = (e) => {
    e.preventDefault();

    const rank = Number(e.target.elements.rank.value);
    const percentile = Number(e.target.elements.percentile.value);
    const currentScore = Number(e.target.elements.currentScore.value);

    let flag = 0;

    if (flag === 0 || flag === 1) {
      if (rank < 1) {
        setError((prev) => ({ ...prev, rank: true }));
        flag = 1;
      } else {
        setError((prev) => ({ ...prev, rank: false }));
      }
      if (percentile < 1 || percentile > 100) {
        setError((prev) => ({ ...prev, percentile: true }));
        flag = 1;
      } else {
        setError((prev) => ({ ...prev, percentile: false }));
      }
      if (currentScore < 0 || currentScore > 15) {
        setError((prev) => ({ ...prev, currentScore: true }));
        flag = 1;
      } else {
        setError((prev) => ({ ...prev, currentScore: false }));
      }
    }

    if (flag === 0) {
      setScores((prev) => ({ ...prev, rank, percentile, currentScore }));
      setShowModal(false);
    }
  };

  const handleCancel = () => {
    setError({
      rank: false,
      percentile: false,
      currentScore: false,
    });
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSave} className=" z-10  pt-6 flex flex-col gap-8 ">
      <div className="a flex px-8 items-center justify-between">
        <h1 className="a text-2xl font-bold">Update Score</h1>
        <TiHtml5 className=" text-orange-600" size={40} />
      </div>
      <div className=" flex items-center px-4 justify-between">
        <div className="a flex gap-2 items-center">
          <span className=" bg-blue-900 text-white size-6 flex items-center justify-center rounded-full">
            1
          </span>{" "}
          Update your <strong>Rank</strong>
        </div>
        <div>
          <input
            defaultValue={scores.rank}
            className="a border w-40 rounded-md text-black border-blue-400 h-9 px-2 font-bold"
            type="number"
            name="rank"
          />
          {error.rank && (
            <p className=" text-red-500 text-xs font-semibold mt-1">
              required | greater than 0
            </p>
          )}
        </div>
      </div>
      <div className=" flex items-center px-4 justify-between">
        <div className="a flex gap-2">
          <span className=" bg-blue-900 text-white size-6 flex items-center justify-center rounded-full">
            2
          </span>{" "}
          Update your <strong>Percentile</strong>
        </div>
        <div>
          <input
            defaultValue={scores.percentile}
            className="a border w-40 rounded-md text-black border-blue-400 h-9 px-2 font-bold"
            type="number"
            name="percentile"
          />
          {error.percentile && (
            <p className=" text-red-500 text-xs font-semibold mt-1">
              required | percentile 1 - 100
            </p>
          )}
        </div>
      </div>
      <div className=" flex items-center px-4 justify-between gap-10">
        <div className="a flex gap-2">
          <span className=" bg-blue-900 text-white size-6 flex items-center justify-center rounded-full">
            3
          </span>{" "}
          Update your <strong>Current Score (out of 15)</strong>
        </div>
        <div>
          <input
            defaultValue={scores.currentScore}
            className="a border w-40 rounded-md text-black border-blue-400 h-9 px-2 font-bold"
            type="number"
            name="currentScore"
          />
          {error.currentScore && (
            <p className=" text-red-500 text-xs font-semibold mt-1">
              required | score 0 - 15
            </p>
          )}
        </div>
      </div>
      <div className=" text-sm font-bold flex justify-end gap-6 px-4 pb-5">
        <button
          className="a  text-blue-800 border-blue-800 border-2 px-3 rounded-md py-3"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="a  bg-blue-900 outline outline-1 outline-black px-8 text-white rounded-md py-3 flex items-center gap-2"
          type="submit"
        >
          Save <FiArrowRight />
        </button>
      </div>
    </form>
  );
};

export default UpdateScoreModal;
