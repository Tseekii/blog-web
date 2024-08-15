import { createContext, useEffect, useState } from "react";

export const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [trendings, setTrendings] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getArticleData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dev.to/api/articles?page=1&per_page=9`
      );
      const data = await response.json();
      ``;
      setArticles(data);
      setIsLoading(false);
    } catch (error) {
      console.log("er", error);
      setIsLoading(false);
    }
  };

  const getTrendingData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles?top=4&per_page=4`
      );
      const data = await response.json();

      setTrendings(data);
    } catch (error) {
      console.log("er", error);
    }
  };

  useEffect(() => {
    getArticleData();
  }, []);

  useEffect(() => {
    getTrendingData();
  }, []);

  return (
    <MyContext.Provider
      value={{ searchValue, setSearchValue, articles, trendings }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
