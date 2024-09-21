import React from "react";
import Profile from "../Profile/Profile";
import RadialChart from "../RadialChart/RadialChart";
import { useUserContext } from "@/context/userContext";

function Sidebar() {
  const { logoutUser } = useUserContext();

  return (
    <div className="w-[20rem] mt-[5rem] h-[calc(100%-5rem)] fixed right-0 top-0 bg-[#f9f9f9] flex flex-col">
      {/* Profile section */}
      <div className="flex-grow-0">
        <Profile />
      </div>

      {/* RadialChart section with equal growth */}
      <div className="mt-4 mx-6 flex-grow">
        <RadialChart />
      </div>

      {/* Sign Out button fixed at bottom */}
      <div className="mt-auto mb-6 mx-6">
        <button
          className="py-4 px-8 bg-[#EB4E31] text-white rounded-[50px] hover:bg-[#3aafae] transition duration-200 ease-in-out w-full"
          onClick={logoutUser}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
