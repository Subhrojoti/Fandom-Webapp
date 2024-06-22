//Importing redux content
import { useState, useEffect } from "react";
import { fetchDataFromapi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGeners } from "./store/homeSlice";

//Importing Routing content
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importing all component and pages
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile/Profile";
import { auth } from "./components/fireBase/Firebase";
import Bookmark from "./pages/bookmark/Bookmark";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  //Checking wheather the user is loggedin or not
  const [isUserLogin, setUserLogin] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserLogin(!!user);
    });

    return () => unsubscribe();
  }, []);

  // console.log(isUserLogin);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromapi("/configuration").then((res) => {
      // console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGeners = {};
    endPoints.forEach((url) => {
      promises.push(fetchDataFromapi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    // console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGeners[item.id] = item));
    });

    dispatch(getGeners(allGeners));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={isUserLogin ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/bookmark"
          element={isUserLogin ? <Bookmark /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
