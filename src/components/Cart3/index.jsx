import { CgChevronDoubleRight } from "react-icons/cg";
import React from "react";
import Img from "../../images/property-02.jpg";
import CartStyle3 from "./CartStyle3";

function Cart3() {
  const data = [
    {
      title: "18 New Street Miami, OR 97219",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
      price: "$2.264.000",
    },
    {
      title: "18 New Street Miami, OR 97219",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
      price: "$2.264.000",
    },
    {
      title: "18 New Street Miami, OR 97219",
      price: "$2.264.000",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
    },
    {
      title: "18 New Street Miami, OR 97219",
      price: "$2.264.000",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
    },
    {
      title: "18 New Street Miami, OR 97219",
      price: "$2.264.000",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
    },
    {
      title: "18 New Street Miami, OR 97219",
      price: "$2.264.000",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
    },
    {
      title: "18 New Street Miami, OR 97219",
      price: "$2.264.000",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
    },
    {
      title: "18 New Street Miami, OR 97219",
      price: "$2.264.000",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
    },
    {
      title: "18 New Street Miami, OR 97219",
      price: "$2.264.000",
      desc: "I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.",
      img: Img,
    },
  ];
  return (
    <div>
      <div>
        <div className="flex gap-4 justify-center py-[100px]">
          <button
            style={{ transition: "all .2s" }}
            className="bg-[#EA5424] text-white h-[50px] px-[30px]  rounded-md font-semibold"
          >
            Show All
          </button>
          <button
            style={{ transition: "all .2s" }}
            className="bg-black hover:text-[#EA5424] text-white h-[50px] px-[30px] rounded-md font-semibold"
          >
            Apartment
          </button>
          <button
            style={{ transition: "all .2s" }}
            className="bg-black text-white hover:text-[#EA5424] h-[50px] px-[30px] rounded-md font-semibold"
          >
            Villa House
          </button>
          <button
            style={{ transition: "all .2s" }}
            className="bg-black text-white hover:text-[#EA5424] h-[50px] px-[30px] rounded-md font-semibold"
          >
            Penthouse
          </button>
        </div>
        <div className="grid grid-cols-3 w-[85%] m-auto gap-8">
          {data.map((elem, ind) => (
            <CartStyle3
              key={ind + 1}
              title={elem.title}
              img={elem.img}
              desc={elem.desc}
              price={elem.price}
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center gap-[20px] mt-[70px]">
            <button
              style={{ transition: "all .3s" }}
              className="w-[45px] h-[45px]  rounded-[360px] flex justify-center items-center bg-black hover:bg-[#F35525] text-white font-semibold text-[18px]"
            >
              1
            </button>
            <button
              style={{ transition: "all .3s" }}
              className="w-[45px] h-[45px]  rounded-[360px] flex justify-center items-center bg-[#F35525] hover:bg-[#F35525] text-white font-semibold text-[18px]"
            >
              2
            </button>
            <button
              style={{ transition: "all .3s" }}
              className="w-[45px] h-[45px]  rounded-[360px] flex justify-center items-center bg-black hover:bg-[#F35525] text-white font-semibold text-[18px]"
            >
              3
            </button>
            <button
              style={{ transition: "all .3s" }}
              className="w-[45px] h-[45px]  rounded-[360px] flex justify-center items-center bg-black hover:bg-[#F35525] text-white font-semibold text-[25px]"
            >
              <CgChevronDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart3;
