import React from "react";
import {
  ArrowsUpDownIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { auth } from "../../firebaseConfig";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";
import Link from "next/link";

export const Auth = () => {
  const user = auth.currentUser;
  const { authUser, isLogin, formData, handleChange, toggleMode } =
    useFirebaseAuth();

  return (
    <>
      <form
        onSubmit={authUser}
        className="mt-8 flex justify-center items-center flex-col"
      >
        <label>Email:</label>
        <input
          className="my-3 px-3 py-1 border border-gray-300"
          placeholder="email ?"
          type="text"
          name="email"
          onChange={(e) => handleChange(e)}
          value={formData.email}
        />

        <label>Password:</label>
        <input
          className="my-3 px-3 py-1 border border-gray-300"
          placeholder="password ?"
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          value={formData.password}
        />
        <button
          type="submit"
          disabled={!formData.email || !formData.password}
          className="disabled:opacity-40 mt-5 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded focus:outline-none"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <ArrowsUpDownIcon
        onClick={toggleMode}
        className="my-5 h-5 w-5 text-blue-500 cursor-pointer"
      />

      {user && (
        <Link href="/tasks">
          <div className="flex items-center cursor-pointer my-3">
            <ChevronDoubleRightIcon className="h-5 w-5 mx-1 text-blue-500" />
            <span>to tasks page</span>
          </div>
        </Link>
      )}
    </>
  );
};
