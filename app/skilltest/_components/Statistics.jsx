import { BsTrophy } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";

const Statistics = ({ scores }) => {
  return (
    <div className=" border p-3 mt-5 rounded-lg">
      <h1 className="a font-bold">Quick Statistics</h1>
      <div className="a flex p-4 w-full justify-between">
        <div className="a flex items-center border-r pr-4 gap-3">
          <div className=" border p-3 bg-slate-100 text-yellow-400 rounded-full">
            <BsTrophy className="" size={20} />
          </div>
          <div className="">
            <div className="a font-bold">{scores.rank}</div>
            <div className="a text-sm text-slate-400">YOUR RANK</div>
          </div>
        </div>
        <div className="a flex items-center border-r pr-4 gap-3">
          <div className=" border p-3 bg-slate-100 text-slate-600 rounded-full">
            <MdOutlineCalendarMonth className="" size={20} />
          </div>
          <div>
            <div className="a font-bold">{scores.percentile}%</div>
            <div className="a text-sm text-slate-400">PERCENTILE</div>
          </div>
        </div>
        <div className="a flex items-center border-r pr-4 gap-3">
          <div className=" border p-3 bg-slate-100 text-green-500 rounded-full">
            <IoCheckbox className="" size={20} />
          </div>
          <div>
            <div className="a font-bold"> {scores.currentScore} / 15</div>
            <div className="a text-sm text-slate-400">CORRECT ANSWERS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
