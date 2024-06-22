import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { addBookmark, removeBookmark } from "../../store/homeSlice";
import { auth } from "../fireBase/Firebase";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const [isBookmark, setIsBookmark] = useState(false);
  const bookMarkList = useSelector((state) => state?.home?.bookmark);
  const bookmarkRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;

  const [isUserLogin, setUserLogin] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserLogin(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleBookmark = () => {
    if (isUserLogin) {
      if (isBookmark) {
        dispatch(removeBookmark(data));
      } else {
        dispatch(addBookmark(data));
      }
      setIsBookmark(!isBookmark);
    } else {
      navigate("/login");
    }
  };

  const handleClick = (event) => {
    if (
      !bookmarkRef?.current ||
      !bookmarkRef?.current?.contains(event?.target)
    ) {
      navigate(`/${data.media_type || mediaType}/${data.id}`);
    }
  };

  useEffect(() => {
    setIsBookmark(bookMarkList?.some((item) => item?.id === data?.id));
  }, [bookMarkList, data]);

  return (
    <div className="movieCard" onClick={(event) => handleClick(event)}>
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
        {!fromSearch && (
          <React.Fragment>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </React.Fragment>
        )}
        <div
          className="bookmarkTag"
          onClick={() => handleBookmark()}
          ref={bookmarkRef}
        >
          {isBookmark ? <FaBookmark /> : <FaRegBookmark />}
        </div>
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
