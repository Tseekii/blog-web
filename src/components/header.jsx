import { MyContext } from "@/provider/provider";
import Link from "next/link";
import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const { setSearchValue } = useContext(MyContext);

  return (
    <div className="flex justify-between">
      <img
        src="./image/Logo.png"
        className="w-40 h-9 text-background: #141624;"
        alt=""
      />

      <div className="flex gap-20">
        <Link href={"/home"}>
          <p>Home</p>
        </Link>
        <Link href={"/blog"}>
          <p>Blog</p>
        </Link>
        <Link href={"/contact"}>
          <p>Contact</p>
        </Link>
      </div>
      <div className="relative">
        <input
          type="text"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="bg-slate-200 rounded-l"
          placeholder="Search"
        />

        <IoIosSearch className="absolute bottom-4 right-1" />
      </div>
    </div>
  );
};
export default Header;
