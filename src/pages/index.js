import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header></Header>
      <div className=" relative max-w-[1200px] m-auto">
        <div className="">
          <img src="./image/image.png" alt="" className="" />
        </div>
        <div className="w-[598px] h-[252px] bg-white rounded-xl absolute bottom-3 left-2">
          <button className="text-white bg-indigo-500 rounded-xl mt-6">
            Technology
          </button>
          <h2 className="text-3xl mt-6">
            Grid system for better Design User Interface
          </h2>
          <h5 className="mt-8">August 20, 2022</h5>
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </main>
  );
}
