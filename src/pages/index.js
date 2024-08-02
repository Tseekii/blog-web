import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header></Header>
      <div className="relative max-w-[1200px] m-auto">
        <div>
          <img src="./image/image.png" alt="" className="" />
        </div>
        <div></div>
      </div>
    </main>
  );
}
