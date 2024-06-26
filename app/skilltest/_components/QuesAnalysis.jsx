import { GoGoal } from "react-icons/go";

const QuesAnalysis = ({ scores }) => {
  const percentage = Math.round((scores.currentScore / 15) * 100);
  return (
    <div className=" w-full items-center justify-center border py-9 xl:mt-5 mt-8 px-7 rounded-lg">
      <div className="a flex items-center justify-between">
        <h1 className=" font-bold">Question Analysis</h1>
        <p className="a text-blue-700 font-bold">{scores.currentScore}/15</p>
      </div>
      <div className=" text-[15px] text-slate-600 mt-5">
        <strong>
          You scored {scores.currentScore} question correct out of 15.
        </strong>{" "}
        However it still needs some improvements.
      </div>
      <div className=" flex items-center justify-center mt-10">
        <div
          className="radial-progress transition-all duration-300 text-blue-500 z-10 bg-blue-100 relative"
          style={{
            "--value": percentage,
            "--size": "10rem",
            "--thickness": "1.5rem",
          }}
          role="progressbar"
        >
          <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border rounded-full size-[70%] z-20"></div>
          <GoGoal size={30} className=" z-40  text-red-700" />
        </div>
      </div>
    </div>
  );
};

export default QuesAnalysis;
