import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";

const Bookmark = () => {
  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">Bookmarked</div>
        </div>
        {/* {movies.map((item, k) => (
          <>
            <MovieCard key={k} data={item} mediaType={item.mediaType} />
          </>
        ))} */}
      </ContentWrapper>
    </div>
  );
};

export default Bookmark;
