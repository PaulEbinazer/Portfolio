import React from "react";

const contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to bg-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the Form Below to get in Touch with Me</p>
        </div>
        <div className="flex justify-center items-center ">
          <form action="https://getform.io/f/adrnmqxa" method="POST" className="flex flex-col w-full md:w-1/2 ">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2  bg-transparent border-2 rounded-md text-white  focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter Your email"
              className="p-2  my-4 bg-transparent border-2 rounded-md text-white  focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              rows="10"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500  px-6 py-3 my-8 mx-auto flex items-center  rounded-md hover:scale-110 duration-300">
              Lets Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
