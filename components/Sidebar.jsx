"use client";
import { LuBarChart2 } from "react-icons/lu";
import { FaRegFile } from "react-icons/fa";
import { TfiMedallAlt } from "react-icons/tfi";
import SidebarNavLink from "./SidebarNavLink";
import { usePathname } from "next/navigation";

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

const Sidebar = () => {
  const pathName = usePathname();
  // console.log(pathName.split("/")[1] === sidebarNavItems[1].href.split("/")[1]);
  return (
    <div className=" w-full lg:w-[25%] xl:w-[20%]     lg:border-r lg:min-h-screen  lg:pt-12 pt-6 flex flex-row lg:flex-col gap-3 lg:justify-normal justify-center">
      {sidebarNavItems.map((item, index) => {
        return (
          <SidebarNavLink
            key={index}
            href={item.href}
            icon={item.icon}
            heading={item.heading}
            active={pathName.split("/")[1] === item.href.split("/")[1]}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
