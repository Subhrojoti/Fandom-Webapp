import React, { useEffect, useState } from "react";
import { auth, db } from "../../components/fireBase/Firebase";
import { doc, getDoc } from "firebase/firestore";
import Spinner from "../../components/spinner/Spinner";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Img from "../../components/lazyLoadImage/Img";
import { useSelector } from "react-redux";

const Profile = () => {
  const [background, setBackground] = useState("");
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "User", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-xl text-white font-bold relative">
      <div className="absolute inset-0 backdrop-blur-lg">
        <img
          src={background}
          className="w-full h-full object-cover opacity-20"
          alt="Background"
        />
      </div>
      {userDetails ? (
        <>
          <div className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-96 flex flex-col items-center justify-center gap-5 rounded-lg shadow-lg p-6">
            <div className="bg-white p-3 rounded-full shadow-md">
              <CgProfile size={100} className="text-gray-800" />
            </div>
            <h1 className="text-white text-2xl font-semibold">
              Welcome {userDetails.firstName}
            </h1>
            <p className="text-gray-300 text-lg">
              Your Email: {userDetails.email}
            </p>
            <Link to="/">
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                Explore More
              </button>
            </Link>
          </div>
        </>
      ) : (
        <Spinner initial={true} />
      )}
    </div>
  );
};

export default Profile;
