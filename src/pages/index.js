import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Card from "@/components/Card";
import { useContext, useEffect, useState } from "react";
// import { MyContext } from "@/provider/search-provide";
// import MyProvider from "@/provider/provider";
import { MyContext } from "@/provider/provider";
import Loader from "@/components/Loader";
import TrendCard from "@/components/TrendCard";
const inter = Inter({ subsets: ["latin"] });

export default function Homepage() {
  const { searchValue, articles, trendings } = useContext(MyContext);

  const findArticles = articles.filter((article) =>
    article?.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log("articles", articles);
  return (
    <main>
      <div className=" relative max-w-[1200px] m-auto">
        <div className="">
          <img src="./image/image.png" alt="" className="" />
        </div>
        <div className="w-[598px] h-[252px] bg-white rounded-xl absolute bottom-3 left-2">
          <button className="text-white bg-indigo-500 rounded-xl mt-6">
            Technology
          </button>
          <h2 className="text-3xl mt-5">
            Grid system for better Design User Interface
          </h2>
          <h5 className="mt-8">August 20, 2022</h5>
        </div>
      </div>
      {/* Trending Cards */}
      <div className="mt-8">
        <h1 className=" text-center">Trending</h1>
        <div className="flex justify-center gap-7 mt-5">
          {trendings.map((trend) => (
            <TrendCard title={trend.title} image={trend.cover_image} />
          ))}
        </div>
      </div>

      {/* Trending Cards */}
      <h2 className="text-center mt-10">Value: {searchValue}</h2>
      {/* blog card section  */}
      <div className="flex justify-center gap-x-3">
        <div className="grid grid-cols-3 gap-12 mt-5">
          {findArticles.map((article) => {
            return (
              <Card title={article.title} social_image={article.social_image} />
            );
          })}
        </div>
      </div>

      {/* <div className="relative">
        <div className="absolute">
          <img
            src="./image/card11.png"
            alt=""
            className="w-[290px] h-[290px]"
          />
          <button className="text-white bg-indigo-500 rounded-xl mt-6">
            Technology
          </button>
          <h2 className="text-2xl mt-6">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
        </div>
      </div> */}
    </main>
  );
}
