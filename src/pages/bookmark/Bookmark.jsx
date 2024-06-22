import React, { useEffect, useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import { useSelector } from "react-redux";

const Bookmark = () => {
  const [bookMarkList, setBookMarkList] = useState([]);
  const bookmarks = useSelector((state) => state?.home?.bookmark);
  useEffect(() => {
    setBookMarkList(bookmarks);
  }, [bookmarks]);

  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">Bookmarked</div>
        </div>
        {bookMarkList?.map((item, k) => (
          <MovieCard key={k} data={item} mediaType={item.mediaType} />
        ))}
      </ContentWrapper>
    </div>
  );
};

export default Bookmark;
