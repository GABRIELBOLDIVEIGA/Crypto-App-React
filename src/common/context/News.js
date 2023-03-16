import { createContext, useContext, useState, useEffect } from "react";

export const NewsContext = createContext();
NewsContext.displayName = "News";

export default function NewsProvider({ children }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/news/trending?skip=0&limit=20")
      .then((response) => response.json())
      .then((dados) => {
        setNews(dados.news);
        console.log(dados);
      });
  }, []);

  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  );
}

export function useNewsContext() {
  const { news } = useContext(NewsContext);

  return {
    news,
  };
}
