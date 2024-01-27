import React from "react";
import Prop from "../../images/single-property.jpg";
import Image2 from "../../images/info-icon-02.png";
import Image3 from "../../images/info-icon-03.png";
import Image4 from "../../images/info-icon-04.png";
import Image5 from "../../images/featured.jpg";

function PropDet() {
  return (
    <div>
      <div className="flex w-[85%] gap-[60px] m-auto mt-[100px]">
        <div className="w-[70%]">
          <img className="w-full h-[500px]" src={Prop} alt="" />
        </div>
        <div
          style={{
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
            backgroundColor: "white ",
          }}
          className=" w-[28%] shadoww ml-6 px-6 pt-10 rounded-lg border"
        >
          <div className="flex gap-6 w-full border-b-[1px] pb-6">
            <img className="w-[20%]" src={Image2} alt="" />
            <div>
              <p className="text-[22px] font-semibold"> 250 m2</p>
              <p className="text-[17px] text-[#aaa]"> Total Flat Space</p>
            </div>
          </div>
          <div className=" pt-9 flex gap-6 w-full border-b-[1px] pb-6">
            <img className="w-[20%]" src={Image3} alt="" />
            <div>
              <p className="text-[22px] font-semibold"> Contract</p>
              <p className="text-[17px] text-[#aaa]"> Contract Ready</p>
            </div>
          </div>
          <div className=" pt-9 flex gap-6 w-full border-b-[1px] pb-6">
            <img className="w-[20%]" src={Image4} alt="" />
            <div>
              <p className="text-[22px] font-semibold"> Payment</p>
              <p className="text-[17px] text-[#aaa]"> Payment Process</p>
            </div>
          </div>
          <div className=" pt-9 flex gap-6 w-full  pb-6">
            <img className="w-[20%]" src={Image4} alt="" />
            <div>
              <p className="text-[22px] font-semibold"> Safety</p>
              <p className="text-[17px] text-[#aaa]"> 24/7 Under Control</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropDet;
