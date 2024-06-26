import Image from "next/image";

const Navbar = () => {
  return (
    <div className="a border py-4  sm:py-6  flex  items-center justify-between px-4 sm:px-8 md:px-12 ">
      {/* Logo */}
      <Image
        className=" scale-75 sm:scale-90 md:scale-100"
        src={
          "https://cdn.prod.website-files.com/65cb431fbaab685eab1f5470/65cb445e7204d21122a75be0_WHATBYTESLOGO.png"
        }
        width={180}
        height={80}
        alt="Logo"
      />
      {/* Profile */}
      <div className="a flex items-center gap-2 p-1 px-2 rounded-md border-2 border-slate-200 scale-90 sm:scale-100 hover:-translate-y-1 transition-all duration-200 cursor-pointer hover:border-slate-600 hover:bg-slate-100">
        <Image
          width={20}
          height={20}
          className="w-7 h-7 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Rounded avatar"
        />
        <span className=" sm:block hidden text-base font-bold">
          Shantanu Sutar
        </span>
      </div>
    </div>
  );
};

export default Navbar;
