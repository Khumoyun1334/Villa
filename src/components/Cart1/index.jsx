import React from "react";
import Img1 from "../../images/featured.jpg";
import Img2 from "../../images/featured-icon.png";
import Im1 from "../../images/info-icon-01.png";
import Im2 from "../../images/info-icon-02.png";
import Im3 from "../../images/info-icon-03.png";
import Im4 from "../../images/info-icon-04.png";
import CustomizedAccordions from "../Accordion";
import FlushExample from "../Accordion";

function Cart1() {
  return (
    <div className="w-[70%] m-auto">
      <div className="flex gap-[30px]">
        <div className=" ">
          <div>
            <img src={Img1} alt="" />
          </div>
        </div>
        <div className=" border">
          <div>
            <p className="text-[15px] text-[#ee626b] font-bold">| FEATURED</p>
          </div>
          <div>
            <p className="text-[40px] font-bold WEE2">
              Best Appartment <br /> & Sea View
            </p>
          </div>
          <div></div>
        </div>
        <div className="border">
          <div>
            <FlushExample />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart1;
