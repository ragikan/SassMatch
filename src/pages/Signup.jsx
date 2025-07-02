import React, { useState } from "react"; //required to use jsx and build react components
import { auth, db } from "../firebase"; // db = Realtime Database now
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database"; // ✅ new imports
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




export default function Signup() {
  const [email, setEmail] = useState("");         
  const [password, setPassword] = useState("");  
  const navigate = useNavigate(); 

  const handleSignup = async (e) => {
    e.preventDefault(); 

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Save user to Realtime Database
      await set(ref(db, "users/" + user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: new Date().toISOString(),
        personalityAnswers: [], // placeholder for later
      });

      alert("Signup successful and user saved to database!");
      navigate("/ProfileCard");
    } catch (error) {
      alert("Signup failed: " + error.message);
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-full w-full bg-gray-900
     text-white">


      <h1 className="dancing text-7xl font-bold text-pink-500 mb-30 mt-20 lg:mt-6 lg:mb-5">SassMatch</h1>


      <form onSubmit={handleSignup} className="bg-gray-800 p-8 rounded-3xl shadow-md lg:w-full max-w-sm width-[80%]">
        <h2 className="dancing text-3xl font-bold mb-6 text-pink-400">Sign Up 💘</h2>
        
        <input
         type="email"
         placeholder="Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className="w-[90%] p-3 mb-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-pink-300 outline-none border-2 border-pink-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 transition-all duration-300"
/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[90%] p-3 mb-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-pink-300 outline-none border-2 border-pink-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 transition-all duration-300"
        />

        
        <button
  type="submit"
  className="py-3 rounded-3xl w-[60%] mt-3 sparkly"
>
  Sign Up
</button>




        <p className="mt-4 text-sm text-center">
          Already registered?{" "}
          <Link to="/login" className="text-pink-400 underline hover:text-pink-300">
          Log in here
        </Link>
       </p>
      </form>

    </div>
  );
}


