import React, { useState } from "react";
// import "./style.css";
import QAsos from "../../images/deal-01.jpg";
import QAsos2 from "../../images/deal-02.jpg";
import QAsos3 from "../../images/deal-03.jpg";
import CartStyle from "./CartStyle";

const data = [
  {
    img: QAsos,
    status: "Word",
  },
  {
    img: QAsos2,
    status: "Html",
  },
  {
    img: QAsos3,
    status: "Photo",
  },
];

function Qasos() {
  const [fillter, setFillter] = useState("All");
  return (
    <section id="port">
      <div className="bg-[#F8F8F8] py-[100px] " id="Prt">
        <div className="flex w-[85%] m-auto justify-between">
          <div>
            <div>
              <p className="text-[15px] text-[#ee626b] font-extrabold">
                | BEST DEAL
              </p>
            </div>
            <div>
              <p className="text-[40px] font-bold">
                Find Your Best Deal <br /> Right Now!{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-5 mt-[80px]">
            <button
              className={`${
                fillter === "Word"
                  ? "bg-[#EA5424] text-white h-[50px] px-[30px]  rounded-lg"
                  : "bg-black text-white h-[50px] px-[30px]  rounded-lg"
              } "Word"`}
              onClick={() => {
                setFillter("Word");
              }}
            >
              Appartment
            </button>
            <button
              className={`${
                fillter === "Html"
                  ? "bg-[#EA5424] text-white h-[50px] px-[30px]  rounded-lg"
                  : "bg-black text-white h-[50px] px-[30px] rounded-lg"
              } ""`}
              onClick={() => {
                setFillter("Html");
              }}
            >
              Villa House
            </button>
            <button
              className={`${
                fillter === "Photo"
                  ? "bg-[#EA5424] text-white h-[50px] px-[30px]  rounded-lg"
                  : "bg-black text-white  h-[50px] px-[30px]  rounded-lg"
              } ""`}
              onClick={() => {
                setFillter("Photo");
              }}
            >
              Penthouse
            </button>
          </div>
        </div>
        <div className="mt-[60px]" id="Prt">
          {data
            .filter((elem) => {
              if (fillter === "All") {
                return elem;
              } else {
                return elem.status === fillter;
              }
            })
            .map((item) => (
              <CartStyle key={item.id} img={item.img} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Qasos;
