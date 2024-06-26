import SyllabusWisePercent from "./SyllabusWisePercent";

const SyllabusWiseAnalysis = () => {
  const syllabus = [
    {
      name: "HTML Tools, Forms, History",
      percentage: 80,
      primaryBgColor: "bg-blue-500",
      primaryTextColor: "text-blue-500",
      secondaryBgColor: "bg-blue-100",
    },
    {
      name: "Tags & References in HTML",
      percentage: 60,
      primaryBgColor: "bg-orange-500",
      primaryTextColor: "text-orange-500",
      secondaryBgColor: "orange-100",
    },
    {
      name: "Tables & References in HTML",
      percentage: 24,
      primaryBgColor: "bg-red-500",
      primaryTextColor: "text-red-500",
      secondaryBgColor: "bg-red-100",
    },
    {
      name: "Tables & CSS Basics",
      percentage: 96,
      primaryBgColor: "bg-green-500",
      primaryTextColor: "text-green-500",
      secondaryBgColor: "bg-green-100",
    },
  ];

  return (
    <div className=" border w-full p-7 rounded-lg pb-10">
      <h1 className="a font-bold">Syllabus Wise Analysis</h1>
      {syllabus.map((topic, index) => {
        return <SyllabusWisePercent key={index} topic={topic} />;
      })}
    </div>
  );
};

export default SyllabusWiseAnalysis;
