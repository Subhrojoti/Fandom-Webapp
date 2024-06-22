import React, { useEffect, useRef, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Genres from "../genres/Genres";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";

import "./style.scss";
// import { FaBookmark, FaRegBookmark } from "react-icons/fa";
// import { addBookmark, removeBookmark } from "../../store/homeSlice";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  // const [isBookmark, setIsBookmark] = useState(false);
  // const bookMarkList = useSelector((state) => state?.home?.bookmark);
  // const bookmarkRef = useRef(null);
  // const dispatch = useDispatch();

  // const handleBookmark = (item) => {
  //   if (!isBookmark) {
  //     dispatch(addBookmark(item));
  //   } else {
  //     dispatch(removeBookmark(item));
  //   }
  // };

  // const handleClick = (event, item) => {
  //   if (
  //     !bookmarkRef?.current &&
  //     !bookmarkRef?.current?.contains(event?.target)
  //   ) {
  //     navigate(`/${item.media_type || endpoint}/${item.id}`);
  //   }
  // };

  // useEffect(() => {
  //   setIsBookmark(bookMarkList?.some((item) => item?.id === data?.id));
  // }, [bookMarkList, data]);

  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={(event) => handleClick(event, item)}
                >
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                    <CircleRating rating={item?.vote_average?.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                    {/* <div
                      className="bookmarkTag"
                      onClick={() => handleBookmark(item)}
                      ref={bookmarkRef}
                    >
                      {isBookmark ? <FaBookmark /> : <FaRegBookmark />}
                    </div> */}
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
