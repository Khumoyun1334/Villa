import React from "react";
import Ga from "../../images/email-icon.png";
import TE from "../../images/phone-icon.png";

function ContactForm() {
  return (
    <div>
      <div>
        <div className="w-[85%] flex m-auto gap-[60px] py-[100px]">
          <div className=" w-[60%]">
            <div>
              <p className="text-[15px] text-[#ee626b] font-extrabold">
                | CONTACT US
              </p>
            </div>
            <div>
              <p className="text-[40px] mt-2 font-bold">
                Get In Touch <br /> With Our Agents
              </p>
            </div>
            <div className="mt-[40px]">
              <p className="leading-8 text-[15px] text-[#4a4a4a] font-medium">
                When you really need to download free CSS templates, please
                remember our website TemplateMo. Also, tell your friends about
                our website. Thank you for visiting. There is a variety of
                Bootstrap HTML CSS templates on our website. If you need more
                information, please contact us.
              </p>
            </div>
            <div className="w-[60%] mt-12">
              <div
                style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)" }}
                className="flex gap-6  px-[30px]  rounded-2xl p-5 items-center"
              >
                <div>
                  <img src={TE} alt="" />
                </div>
                <div>
                  <p className="text-[20px] font-bold">010-020-0340</p>
                  <p className="text-gray-400">Phone Number</p>
                </div>
              </div>
              <div
                style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)" }}
                className="flex gap-6  px-[30px] mt-8 rounded-2xl p-5 items-center"
              >
                <div>
                  <img src={Ga} alt="" />
                </div>
                <div>
                  <p className="text-[20px] font-bold">010-020-0340</p>
                  <p className="text-gray-400">Phone Number</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
              backgroundColor: "white ",
            }}
            className=" w-[60%] p-8 rounded-xl"
          >
            <div>
              <div>
                <p>Full Name</p>
                <input
                  className="bg-[#F6F6F6]  w-full p-3 rounded-3xl px-5 mt-4"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mt-8">
                <p>Full Name</p>
                <input
                  className="bg-[#F6F6F6]  w-full p-3 rounded-3xl px-5 mt-4"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mt-8">
                <p>Full Name</p>
                <input
                  className="bg-[#F6F6F6]  w-full p-3 rounded-3xl px-5 mt-4"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mt-8">
                <p>Full Name</p>
                <textarea
                  className="bg-[#F6F6F6] w-full mt-4 rounded-3xl  "
                  name="postContent"
                  rows={6}
                  s
                />
              </div>
              <button className="p-3 mt-7 bg-black text-white px-7 border rounded-[80px]">
                Send Messege
              </button>
            </div>
          </div>
        </div>

        <div className="w-[85%] m-auto">
          <div id="map">
            <iframe
              className="rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
              width="100%"
              height="550px"
              frameborder="0"
              style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15);" }}
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
