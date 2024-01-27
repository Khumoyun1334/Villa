import React from "react";
import { BsFillCalendarFill } from "react-icons/bs";
function CartStyle({ img }) {
  return (
    <div className="">
      <div class="flex  w-[85%] m-auto gap-[50px]">
        <div
          style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)" }}
          className="border p-6 w-[30%] rounded-2xl grid gap-4 h-[380px]"
        >
          <div className="flex justify-between">
            <p className="text-[17px] text-gray-400">Total Flat Space</p>
            <p className="font-bold text-[21px]">185 m2</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-[17px] text-gray-400">Total Flat Space</p>
            <p className="font-bold text-[21px]">185 m2</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-[17px] text-gray-400">Total Flat Space</p>
            <p className="font-bold text-[21px]">185 m2</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-[17px] text-gray-400">Total Flat Space</p>
            <p className="font-bold text-[21px]">185 m2</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-[17px] text-gray-400">Total Flat Space</p>
            <p className="font-bold text-[21px]">185 m2</p>
          </div>
        </div>
        <div className=" w-[50%]">
          <img className="h-[400px]" src={img} alt="" />
        </div>
        <div className=" p-2 w-[35%]">
          <div>
            <p className="font-bold text-[18px]">Extra Info About Property</p>
          </div>
          <div>
            <p className="mt-7 w-[330px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
              eiusmod tempor pack incididunt ut labore et dolore magna aliqua
              quised ipsum suspendisse
            </p>
            <p className="mt-8 w-[310px]">
              When you need free CSS templates, you can simply type TemplateMo
              in any search engine website. In addition, you can type TemplateMo
              Portfolio, TemplateMo One Page Layouts, etc.
            </p>
          </div>
          <div className="flex gap-4  border h-[45px] mt-[44px] w-[190px] items-center bg-[#1E1E1E] rounded-[100px]">
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

export default CartStyle;
