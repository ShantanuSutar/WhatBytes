import { BsTrophy } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";

const Statistics = ({ scores }) => {
  return (
    <div className=" border px-3 lg:px-10 xl:px-3 py-4 xl:mt-5 mt-8 rounded-lg">
      <h1 className="a font-bold">Quick Statistics</h1>
      <div className="a flex sm:flex-nowrap flex-wrap gap-5 sm:gap-0 p-4 w-full justify-between">
        <div className="a flex items-center  gap-3">
          <div className=" border p-3 bg-slate-100 text-yellow-400 rounded-full">
            <BsTrophy className="" size={20} />
          </div>
          <div className="">
            <div className="a font-bold">{scores.rank}</div>
            <div className="a text-xs font-semibold text-slate-400">
              YOUR RANK
            </div>
          </div>
        </div>
        <div className="a flex items-center sm:border-x sm:px-6 md:px-16 lg:px-16 xl:px-8   gap-3">
          <div className=" border p-3 bg-slate-100 text-slate-600 rounded-full">
            <MdOutlineCalendarMonth className="" size={20} />
          </div>
          <div>
            <div className="a font-bold">{scores.percentile}%</div>
            <div className="a text-xs font-semibold text-slate-400">
              PERCENTILE
            </div>
          </div>
        </div>
        <div className="a flex items-center gap-3">
          <div className=" border p-3 bg-slate-100 text-green-500 rounded-full">
            <IoCheckbox className="" size={20} />
          </div>
          <div>
            <div className="a font-bold"> {scores.currentScore} / 15</div>
            <div className="a text-xs font-semibold text-slate-400">
              CORRECT ANSWERS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
