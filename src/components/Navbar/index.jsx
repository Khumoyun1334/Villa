import { BsFillCalendarFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY > 200;
      setShowScrollTop(isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex justify-between w-[85%] m-auto ">
        <div className="flex gap-[60px] py-2">
          <div className="flex gap-4 items-center">
            <MdEmail size={"24px"} color="#f35525" />
            <p className="text-[15px]   font-semibold text-gray-400">
              info@company.com
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaMap size={"24px"} color="#f35525" />
            <p className="text-[15px] font-semibold text-gray-400">
              Sunny Isles Beach, FL 33160
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-[30px] flex items-center justify-center text-white h-[30px] bg-gray-300 rounded-full">
            <BsFacebook size={"15px"} />
          </div>
          <div className="w-[30px] flex items-center justify-center text-white h-[30px] bg-gray-300 rounded-full">
            <AiOutlineTwitter size={"15px"} />
          </div>
          <div className="w-[30px] flex items-center justify-center text-white h-[30px] bg-gray-300 rounded-full">
            <AiFillLinkedin size={"15px"} />
          </div>
          <div className="w-[30px] flex items-center justify-center text-white h-[30px] bg-gray-300 rounded-full">
            <BsInstagram size={"15px"} />
          </div>
        </div>
      </div>
      <hr />
      <div
        className={`${
          showScrollTop
            ? "flex fixed w-full items-center top-0 text-black justify-between px-[120px] z-[1000] bg-white  py-6"
            : "w-[85%] flex justify-between m-auto py-6"
        }`}
      >
        <div>
          <p className="uppercase text-[30px] font-bold text-black">Villa</p>
        </div>
        <div className="flex gap-[60px] items-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#f35525] WEE" : "WEE"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/properties"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#f35525] WEE" : "WEE"
            }
          >
            Properties
          </NavLink>
          <NavLink
            to="/propertydetails"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#f35525] WEE" : "WEE"
            }
          >
            Property Details
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#f35525] WEE" : "WEE"
            }
          >
            Contact Us
          </NavLink>
          <div className="flex gap-4 border h-[45px] w-[190px] items-center bg-[#1E1E1E] rounded-[100px]">
            <button className="bg-[#F35525] w-[43px] items-center justify-center flex text-white h-[43px]  rounded-[90px]">
              <BsFillCalendarFill />
            </button>
            <p className="text-white">Schedule a visit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
