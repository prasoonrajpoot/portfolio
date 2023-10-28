import React from "react";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

function LeftPart() {
  return (
    <div className=" flex flex-col space-y-10 p-10 min-w-[45%] justify-center">
      <div className="text-7xl items-center flex justify-center">Hi 👋</div>
      <div className="text-center">Let's connect,</div>
      <div className="text-center">
        Have an Idea, an Opportunity or a Project?
      </div>
      <div className="text-center"> Feel free to reach out to me</div>
      <a target="_blank" href="mailto: prasoonrajpoot@gmail.com">
        <div className="flex items-center justify-center space-x-4 text-xl">
          <AiOutlineMail />
          <p>prasoonrajpoot03</p>
        </div>
      </a>

      <a target="_blank" href="tel:9571093648">
        <div className="flex items-center justify-center  space-x-4 text-xl ">
          <BsTelephone />
          <p>9571093648</p>
        </div>
      </a>

      <a target="_blank" href="https://www.linkedin.com/in/prasoonrajpoot/">
        <div className="flex items-center justify-center  space-x-4 text-xl">
          <AiOutlineLinkedin />
          <p>prasoonrajpoot</p>
        </div>
      </a>
    </div>
  );
}

function RightPart() {
  return (
    <div className=" flex flex-col  px-10 items-center  mt-10 mb-10 pb-10">
      <form action="" className="space-y-10 flex-col justify-center  items-center ">
        <input
          type="text"
          placeholder="John Snow"
          required={true}
          className="bg-stone-950 border-white border-0 border-b-4 text-xl  left-2"
        />
        <br />
        <input
          className="bg-stone-950 border-white border-0 border-b-4 text-xl  "
          type="email"
          name=""
          id=""
          placeholder="bastard@winterfell.com"
        />
        <br />
        <textarea
        className=" bg-stone-950 border-white border-0 border-b-4 text-xl  "
          cols="30"
          rows="5"
          placeholder="Send Your Raven Here"
        ></textarea>
        <br />
        <button className=" border-solid border-2 border-white text-xl p-4">Send Raven</button>
      </form>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="mt-10 lg:flex justify-around ">
      <LeftPart />
      <RightPart />
    </div>
  );
}

export default Contact;
