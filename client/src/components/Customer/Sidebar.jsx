import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaLifeRing,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";




  const handleLogout = async () => {
    const res = await api.get("/auth/logout");
    setUser("");
    navigate("/");
  };

const Sidebar = ({ active, setActive }) => {
  return (
    <>
      <div className="w-100  min-h-[87vh] p-5 flex flex-col justify-between">
        <div>
          <div className="border-b-2 pb-3 h-fit">
            <span className="text-2xl font-bold">Customer's Dashboard</span>
          </div>

          <div className="py-8 px-5">
            <ul className="grid gap-2">
              <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-amber-600 hover:text-white ${
                  active === "overview" && "bg-amber-600 text-white"
                }`}
                onClick={()=>setActive("overview")}
              >
                <FaTachometerAlt /> Overview
              </li>
              <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-amber-600 hover:text-white ${
                  active === "profile" && "bg-amber-600 text-white"
                }`}
                onClick={()=>setActive("profile")}
              >
                <FaUser /> Profile
              </li>
              <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-amber-600 hover:text-white ${
                  active === "bookings" && "bg-amber-600 text-white"
                }`}
                 onClick={()=>setActive("bookings")}
              >
                <FaCalendarCheck /> Bookings
              </li>
              <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-amber-600 hover:text-white ${
                  active === "support" && "bg-amber-600 text-white"
                }`}
                 onClick={()=>setActive("support")}
              >
                <FaLifeRing /> Support
              </li>
              <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-amber-600 hover:text-white ${
                  active === "feedback" && "bg-amber-600 text-white"
                }`}
                 onClick={()=>setActive("feedback")}
              >
                <FaCommentDots /> Feedback
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="text-xl text-red-500 font-bold w-full h-full border border-red-500 py-3 px-2 rounded-lg flex gap-2 items-center justify-center hover:bg-red-500 hover:text-white hover:scale-105"
            onClick={handleLogout}>
            Logout
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;