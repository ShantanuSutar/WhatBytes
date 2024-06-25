import Link from "next/link";

const SidebarNavLink = ({ icon, heading, href }) => {
  return (
    <Link
      className="group  p-4 px-6 mr-4 rounded-full md:rounded-r-full flex items-center gap-4 text-slate-700 hover:text-blue-500 hover:bg-slate-100"
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
