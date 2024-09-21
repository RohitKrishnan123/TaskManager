"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const githubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 1.5a10.5 10.5 0 00-3.308 20.473c.523.096.715-.227.715-.505v-1.766c-2.902.632-3.513-1.385-3.513-1.385-.477-1.212-1.164-1.537-1.164-1.537-.952-.65.072-.637.072-.637 1.053.073 1.607 1.083 1.607 1.083.935 1.6 2.454 1.138 3.053.87.096-.678.366-1.138.666-1.4-2.314-.262-4.745-1.157-4.745-5.147 0-1.138.41-2.069 1.083-2.797-.108-.263-.47-1.316.102-2.744 0 0 .885-.276 2.902 1.065A9.98 9.98 0 0112 6.197c.885.004 1.777.12 2.614.354 2.014-1.34 2.897-1.065 2.897-1.065.574 1.428.213 2.481.105 2.744.676.728 1.078 1.659 1.078 2.797 0 3.997-2.435 4.879-4.755 5.137.375.322.696.96.696 1.937v2.87c0 .276.192.606.721.503A10.5 10.5 0 0012 1.5z"
    />
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0112.255 3.6a9.716 9.716 0 00-9.753 9.75c0 5.38 4.373 9.753 9.753 9.753 5.38 0 9.753-4.373 9.753-9.753.001-.455-.03-.908-.059-1.348-.146-.317-.631-.489-.897-.462z"
    />
  </svg>
);

const profileIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zm-9 10.5a7.5 7.5 0 1115 0v.75H6.75v-.75z"
    />
  </svg>
);

function Header() {
  const { user } = useUserContext();
  const { openModalForAdd, activeTasks } = useTasks();

  const router = useRouter();

  const { name } = user;

  const userId = user._id;

  return (
    <header className="px-6 my-4 w-full flex items-center justify-between bg-[#E6F7FF]">
      <div>
        <h1 className="text-lg font-semibold text-[#007ACC]">
          <span role="img" aria-label="wave">
            👋
          </span>
          {userId ? `Welcome, ${name}!` : "Welcome to Task Manager"}
        </h1>
        <p className="text-sm text-[#004080]">
          {userId ? (
            <>
              You have{" "}
              <span className="font-bold text-[#0066CC]">
                {activeTasks.length}
              </span>
              &nbsp;active tasks
            </>
          ) : (
            "Please login or register to view your tasks"
          )}
        </p>
      </div>
      <div className="h-[50px] flex items-center gap-[10.4rem]">
        <button
          className="px-8 py-3 bg-[#007ACC] text-white rounded-[50px]
          hover:bg-[#005999] hover:text-white transition-all duration-200 ease-in-out"
          onClick={() => {
            if (userId) {
              openModalForAdd();
            } else {
              router.push("/login");
            }
          }}
        >
          {userId ? "Add a new Task" : "Login / Register"}
        </button>

        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/RohitKrishnan123/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-[#007ACC] rounded-full flex items-center justify-center text-lg border-2 border-[#B3D9FF]"
          >
            {githubIcon}
          </Link>
          <Link
            href="https://github.com/RohitKrishnan123/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-[#007ACC] rounded-full flex items-center justify-center text-lg border-2 border-[#B3D9FF]"
          >
            {moonIcon}
          </Link>
          <Link
            href="https://github.com/RohitKrishnan123/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-[#007ACC] rounded-full flex items-center justify-center text-lg border-2 border-[#B3D9FF]"
          >
            {profileIcon}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
