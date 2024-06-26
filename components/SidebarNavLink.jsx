import Link from "next/link";

const SidebarNavLink = ({ icon, heading, href, active }) => {
  return (
    <Link
      className={`  p-4 px-6 mr-4 rounded-full md:rounded-r-full flex items-center gap-4  hover:text-blue-700 hover:bg-slate-100 ${
        active ? " text-blue-500 bg-slate-100" : "text-slate-700"
      }`}
      href={href}
    >
      {/* icon */}
      <div className="">{icon}</div>
      {/* desc */}
      <span className="mt-1 font-bold sm:block hidden ">{heading}</span>
    </Link>
  );
};

export default SidebarNavLink;
