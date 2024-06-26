import { TiHtml5 } from "react-icons/ti";

const Topic = ({ setShowModal }) => {
  return (
    <div className=" flex  items-center gap-5 border px-2 py-6 rounded-lg">
      <TiHtml5 className=" text-orange-600" size={60} />
      <div className="a flex flex-col gap-1">
        <p className=" font-bold">Hyper Text Markup Language</p>
        <p className=" text-slate-800 text-sm">
          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </p>
      </div>
      <button
        className="  bg-blue-900 text-white px-7 py-3 rounded-md border-black  shadow-md text-sm font-semibold hover:bg-blue-800 outline outline-slate-800 outline-3"
        onClick={() => setShowModal(true)}
      >
        Update
      </button>
    </div>
  );
};

export default Topic;
