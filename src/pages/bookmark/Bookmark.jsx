import React, { useEffect, useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Bookmark = () => {
  const [bookMarkList, setBookMarkList] = useState([]);
  const bookmarks = useSelector((state) => state?.home?.bookmark);
  useEffect(() => {
    setBookMarkList(bookmarks);
  }, [bookmarks]);

  // console.log(bookMarkList);

  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">Bookmarked Items</div>
        </div>
        <div className="content">
          {bookMarkList.length === 0 ? (
            <div className="flex flex-col h-screen w-full items-center gap-7 mt-6">
              <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-200 font-serif italic">
                <span className="relative inline-block">
                  No Items Added to Bookmark
                  <span className="absolute top-0 right--2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse max-sm:hidden">
                    📜
                  </span>
                </span>
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-yellow-50 text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out focus:outline-none">
                <Link to="/explore/movie">Explore Our App</Link>
              </button>
            </div>
          ) : (
            bookMarkList.map((item, k) => (
              <MovieCard
                key={k}
                data={item}
                mediaType={
                  item.first_air_date
                    ? "tv"
                    : item.release_date
                    ? "movie"
                    : "unknown"
                }
              />
            ))
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Bookmark;
