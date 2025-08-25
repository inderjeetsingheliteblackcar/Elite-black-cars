"use client";

import { useState } from "react";
import Bormblog from "@/components/blogform/Bormblog";

const Customblogs = () => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const correctPassword = "elitebcar!@#";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Wrong password ❌");
    }
  };

  if (!authenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-80 text-center"
        >
          <h2 className="text-xl font-bold mb-4">Enter Password</h2>
          <input
            type="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-lg mb-4"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="py-28 pt-40">
      <Bormblog />
    </div>
  );
};

export default Customblogs;
