// App.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../store/NewsSlice";
import { RootState } from "../store/store";
import love from "../assets/love.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import card from "../assets/card.png";

const NewsPage: React.FC = () => {
  // const dispatch = useDispatch();

  const dispatch = useDispatch<any>();
  const news = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (news.status === "loading") {
    return (
      <div className="flex justify-center align-middle ">
        <div className="mx-auto text-3xl font-bold text-green-900 animate-bounce">
          loading ....
        </div>
      </div>
    );
  }

  if (news.status === "failed") {
    return <div>Error: {news.error}</div>;
  }

  return (
    <div>
      <div className="w-full mt-5 md:flex md:flex-wrap  px-3 md:px-[5%]  ">
        {news.articles.map((article) => (
          <div
            key={article.id}
            className="mt-5 shadow-lg md:w-1/3 md:px-5 pb-4 "
          >
            <div>
              <img src={card} alt="" />
            </div>
            <div className="p-3">
              <p className="text-lg font-semibold  mb-2">
                {article.headline.main}
              </p>
              <p>{article.abstract} .....</p>
              <a
                className="mt-2 text-blue-500 block mx-auto overflow-hidden"
                href={article.web_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.web_url}
              </a>
              <div className=" md:flex justify-between ">
                <p
                  className="font-semibold"
                  style={{
                    maxHeight: "3em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {" "}
                  {article.byline.original}{" "}
                </p>
                <p> {article.pub_date} </p>
              </div>
            </div>
            <div className="flex border-t-2 mt-3 pt-2  justify-center items-center gap-5">
              <img src={love} alt="icon" />
              <img src={share} alt="icon" />
              <img src={save} alt="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
