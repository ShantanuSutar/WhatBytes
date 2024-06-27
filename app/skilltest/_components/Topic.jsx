// "use client";

import { TiHtml5 } from "react-icons/ti";

const Topic = ({ setShowModal }) => {
  // const theme = localStorage.getItem("theme");
  const theme = "";

  return (
    <div className=" flex  items-center gap-5 lg:gap-12 xl:gap-3 border px-2  lg:px-10 xl:px-2  py-6 rounded-lg flex-wrap sm:flex-nowrap justify-center sm:justify-normal text-center  sm:text-left ">
      <TiHtml5 className=" text-orange-600" size={60} />
      <div className="a flex flex-col gap-1">
        <p className=" text-base font-bold">Hyper Text Markup Language</p>
        <p
          className={` ${
            theme === "light" ? "text-slate-800" : " text-slate-500"
          }  text-sm`}
        >
          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </p>
      </div>
      <button
        className="  bg-blue-900 text-white px-4 sm:px-7 py-2  sm:py-3 rounded-md border-black  shadow-md text-xs sm:text-sm font-semibold hover:bg-blue-800 outline outline-slate-800 outline-3"
        onClick={() => setShowModal(true)}
      >
        Update
      </button>
    </div>
  );
};

export default Topic;
