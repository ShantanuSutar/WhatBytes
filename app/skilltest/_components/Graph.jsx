// import { LineChart } from "@mui/x-charts";
// "use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import { PiChartLineDuotone } from "react-icons/pi";

const Graph = ({ scores }) => {
  // const theme = localStorage.getItem("theme");
  const theme = "";
  const data = [
    { x: 0, y: 0 },
    { x: 10, y: 3 },
    { x: 20, y: 4 },
    { x: 30, y: 6 },
    { x: 40, y: 2 },
    { x: 50, y: 3 },
    { x: 60, y: 5 },
    { x: 70, y: 6 },
    { x: 80, y: 7 },
    { x: 90, y: 8 },
    { x: 100, y: 1 },
  ];

  // Calculate the total number of students
  const totalStudents = data.reduce((sum, point) => sum + point.y, 0);

  // Calculate the weighted sum of percentiles
  const weightedSum = data.reduce((sum, point) => sum + point.x * point.y, 0);

  // Calculate the average percentile
  const averagePercentile = Math.round(weightedSum / totalStudents);

  return (
    <div className="a mt-8 border rounded-lg w-full">
      <div className=" p-5">
        <h1 className="a font-bold">Comparison Graph</h1>
        <div className="  flex items-baseline gap-4 sm:gap-10 justify-between ">
          <p
            className={`a 
              ${theme === "light" ? "text-slate-700" : " text-slate-500"}
             text-[15px]`}
          >
            <strong>You scored {scores.percentile}% percentile</strong> which is
            lower than the <br className=" xl:flex hidden" /> average percentile{" "}
            {averagePercentile}% of all the engineers who took the assignment
          </p>
          <div className="a bg-slate-100 flex items-center justify-center rounded-full p-3 border">
            <PiChartLineDuotone className="a text-red-500" size={25} />
          </div>
        </div>
      </div>
      <div className=" max-[420px]:-my-16   sm:-my-0  sm:scale-100 xl:scale-90  mx-auto  sm:-ml-0 xl:-ml-12 2xl:-ml-0 2xl:scale-100 w-full flex items-center justify-center">
        <LineChart
          className=" "
          width={600}
          height={350}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 25 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis
          dataKey="x"
          label={{
            value: "Percentile",
            position: "center",
            offset: -10,
            dy: 25,
          }}
        /> */}
          <XAxis
            dataKey="x"
            type="number"
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            label={{
              value: "Percentile",
              position: "center",
              offset: -10,
              dy: 25,
            }}
          />
          <YAxis
            label={{
              value: "Number of Students",
              angle: -90,
              position: "center",
              dx: -10,
            }}
          />
          <Tooltip
            formatter={(value, name, props) => [
              `numberOfStudents: ${props.payload.y}`,
            ]}
          />
          {/* <Legend verticalAlign="top" height={36} /> */}
          <ReferenceLine
            x={scores.percentile}
            stroke="grey"
            label="Your Percentile"
          />

          <Line
            type="monotone"
            dataKey="y"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default Graph;
