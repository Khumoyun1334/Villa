import { BsFillPlayFill } from "react-icons/bs";
import React from "react";

function Get() {
  return (
    <div>
      <div className="BAF">
        <div>
          <p className="text-center text-[40px] font-bold pt-[100px] text-white">
            Get Closer View & <br /> Different Feeling
          </p>
        </div>
      </div>
      <div className="BAFF w-[70%] m-auto rounded-3xl flex justify-center pt-[150px]">
        <a
          style={{ outline: "15px solid rgba(254, 85, 37, 0.5)" }}
          className="border h-[60px] rounded-[360px]  flex justify-center mt-[70px] items-center text-[32px] w-[60px] text-[#f35525] bg-white"
          href="https://www.youtube.com/"
        >
          <BsFillPlayFill />
        </a>
      </div>
    </div>
  );
}

export default Get;
