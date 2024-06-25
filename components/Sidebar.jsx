import { LuBarChart2 } from "react-icons/lu";
import { FaRegFile } from "react-icons/fa";
import { TfiMedallAlt } from "react-icons/tfi";
import Link from "next/link";
import SidebarNavLink from "./SidebarNavLink";

const Sidebar = () => {
  const sidebarNavItems = [
    {
      icon: <LuBarChart2 size={22} className=" text-black " />,
      heading: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <TfiMedallAlt size={22} className=" text-black " />,
      heading: "Skill Test",
      href: "/skilltest",
    },
    {
      icon: <FaRegFile size={22} className=" text-black " />,
      heading: "Internship",
      href: "/internship",
    },
  ];

  return (
    <div className=" w-full md:w-[25%] lg:w-[20%]     md:border-r md:min-h-screen  md:pt-12 pt-6 flex flex-row md:flex-col gap-3 md:justify-normal justify-center">
      {sidebarNavItems.map((item, index) => {
        return (
          <SidebarNavLink
            key={index}
            href={item.href}
            icon={item.icon}
            heading={item.heading}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
