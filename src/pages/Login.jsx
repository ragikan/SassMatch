// src/pages/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // for redirect after login

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Logged in:", user);
      alert("Login successful!");
       navigate(`/swipe/${user.uid}`); //redirect to form page (create this next!)
    } catch (error) {
      alert("Login failed: " + error.message);
      console.error("Login error:", error);
    }
  };


  const handleResetPassword = async () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox. 📩");
    } catch (error) {
      alert("Error sending reset email: " + error.message);
      console.error("Reset error:", error);
    }
  };



  return (
  <div className="flex flex-col items-center justify-start h-full w-full bg-gray-900 text-white">
    
    <h1 className="dancing text-7xl font-bold text-pink-500 mb-30 mt-20 lg:mt-6 lg:mb-5">
      SassMatch
    </h1>

    <form
      onSubmit={handleLogin}
      className="bg-gray-800 p-8 rounded-3xl shadow-md lg:w-full max-w-sm w-[80%]"
    >
      <h2 className="dancing text-3xl font-bold mb-6 text-pink-400">
        Welcome Back 💘
      </h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[90%] p-3 mb-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-pink-300 outline-none border-2 border-pink-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 transition-all duration-300"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-[90%] p-3 mb-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-pink-300 outline-none border-2 border-pink-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 transition-all duration-300"
        required
      />

      <div className="w-[90%] text-right mb-4">
        <button
          type="button"
          onClick={handleResetPassword}
          className="text-sm text-pink-400 hover:underline bg-inherit border-none"
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        className="py-3 rounded-3xl w-[60%] mt-3 sparkly"
      >
        Log In
      </button>

      <p className="mt-4 text-sm text-center">
        New here?{" "}
        <a href="/signup" className="text-pink-400 underline hover:text-pink-300">
          Sign up instead
        </a>
      </p>
    </form>
  </div>
);
}