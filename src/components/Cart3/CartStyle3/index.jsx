import React from "react";

function CartStyle3({ img, price, title }) {
  return (
    <div>
      <div>
        <div className="bg-[#FAFAFA] p-8 rounded-xl">
          <div>
            <img className="rounded-xl" src={img} alt="" />
          </div>
          <div className="mt-5 flex justify-between items-center">
            <button className="p-1 border px-3 bg-[#FBD9CF] rounded-lg font-semibold">
              Luxury Villa
            </button>
            <p className="text-[22px] text-[#F35525] font-bold">{price}</p>
          </div>
          <div className="mt-5">
            <p className="text-[19px] font-bold">{title}</p>
          </div>
          <div className="flex gap-7 mt-6">
            <div className="flex gap-3 text-[16px]">
              <span>Bedrooms:</span>
              <span className="font-bold">8</span>
            </div>
            <div className="flex gap-3 text-[16px]">
              <span>Bathrooms:</span>
              <span className="font-bold">8</span>
            </div>
          </div>
          <div className="flex gap-6 mt-2">
            <div className="flex gap-3 text-[16px]">
              <span>Area:</span>
              <span className="font-bold">545m2</span>
            </div>
            <div className="flex gap-3 text-[16px]">
              <span>Floor:</span>
              <span className="font-bold">3</span>
            </div>
            <div className="flex gap-3 text-[16px]">
              <span>Parking:</span>
              <span className="font-bold">6 spots</span>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="flex justify-center mt-7">
            <button className="p-2 bg-black text-white px-7 border rounded-[80px]">
              Schedule a visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartStyle3;
