import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Card from "@/components/Card";
import { useContext, useEffect, useState } from "react";
// import { MyContext } from "@/provider/search-provide";
// import MyProvider from "@/provider/provider";
import { MyContext } from "@/provider/provider";
import Loader from "@/components/Loader";
const inter = Inter({ subsets: ["latin"] });

export default function Homepage() {
  // const [articles, setArticles] = useState([]);
  const { searchValue, articles } = useContext(MyContext);

  // const getArticleData = async () => {
  //   const response = await fetch(
  //     "https://dev.to/api/articles?page=1&per_page=9"
  //   );
  //   const data = await response.json();
  //   setArticles(data);
  //   // console.log("data", data)
  // };

  // useEffect(() => {
  //   getArticleData();
  // }, []);

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
          <h2 className="text-3xl mt-6">
            Grid system for better Design User Interface
          </h2>
          <h5 className="mt-8">August 20, 2022</h5>
        </div>
      </div>
      <h2>Value: {searchValue}</h2>
      {/* blog card section  */}
      <div className="grid grid-cols-3 gap-3">
        {findArticles.map((article) => {
          return (
            <Card title={article.title} social_image={article.social_image} />
          );
        })}
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
