const SyllabusWisePercent = ({ topic }) => {
  return (
    <div className="a mt-8 flex gap-4 flex-col">
      <h1 className=" text-slate-600">{topic.name}</h1>
      <div className=" flex items-center gap-8 justify-between">
        <div className=" w-full relative">
          <div
            className={` absolute rounded-full  h-3 ${topic.primaryBgColor} `}
            style={{ width: `${topic.percentage}%` }}
          ></div>
          <div
            className={`   rounded-full w-full h-3 ${topic.secondaryBgColor}`}
          ></div>
        </div>
        <div className={`${topic.primaryTextColor} font-bold`}>
          {topic.percentage}%
        </div>
      </div>
    </div>
  );
};

export default SyllabusWisePercent;
