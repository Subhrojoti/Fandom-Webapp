import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../components/fireBase/Firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import SignInwithGoogle from "./signInWIthGoogle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      toast.success("User Logged Successfully", {
        position: "top-center",
      });
      navigate("/profile"); // Navigate to profile page
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-gray-800 text-white">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-sm"
        >
          <h3 className="text-3xl mb-6 text-center">Login</h3>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="form-control w-full px-3 py-2 text-gray-900 rounded outline-none"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control w-full px-3 py-2 text-gray-900 rounded outline-none"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
          <p className="text-center">
            New user?{" "}
            <Link to="/register" className="text-blue-400 hover:text-blue-600">
              Register Here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
Login;
