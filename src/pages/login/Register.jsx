import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../components/fireBase/Firebase";
import { setDoc, doc } from "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "User", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      console.log("User register Successfully");
      toast.success("User Registered Successfully", {
        position: "top-center",
      });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-800 text-white">
      <form
        onSubmit={handleRegister}
        className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h3 className="text-3xl mb-6 text-center">Sign Up</h3>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="firstName">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            className="form-control w-full px-3 py-2 text-gray-900 rounded outline-none"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="lastName">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            className="form-control w-full px-3 py-2 text-gray-900 rounded outline-none"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="form-control w-full px-3 py-2 text-gray-900 rounded outline-none"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </div>

        <p className="text-center">
          Already registered?{" "}
          <Link to="/login" className="text-blue-400 hover:text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
