import React from "react";
import Img from "../../images/property-02.jpg";
import CartStyle from "./CartStyle";

function Cart2() {
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
  ];
  return (
    <div>
      <div className="py-[80px]">
        <div className="flex justify-center">
          <p className="text-[15px] text-[#ee626b] font-extrabold">
            | PROPERTIES
          </p>
        </div>
        <div>
          <p className="text-[40px] font-bold text-center">
            We Provide The Best <br /> Property You Like
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 w-[85%] m-auto gap-8">
          {data.map((elem, ind) => (
            <CartStyle
              key={ind + 1}
              title={elem.title}
              img={elem.img}
              desc={elem.desc}
              price={elem.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart2;
