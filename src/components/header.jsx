import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between justify-center ">
      <img
        src="./image/Logo.png"
        className="w-40 h-9 text-background: #141624;"
        alt=""
      />

      <div className="flex gap-20">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="relative">
        <input
          type="text"
          className="bg-slate-200 rounded-l"
          placeholder="Search"
        />

        <IoIosSearch className="absolute bottom-4 right-1" />
      </div>
    </div>
  );
};
export default Header;
