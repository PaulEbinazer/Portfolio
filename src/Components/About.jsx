import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> 
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          accusantium ipsam, veritatis dolorem fuga beatae autem, mollitia
          maxime eveniet suscipit officia ea recusandae quos inventore, eos
          dolore nobis similique sapiente.
        </p>
        <br />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          aliquid velit nostrum sed ut nisi, facere soluta asperiores impedit
          saepe culpa corporis sunt, quae ipsum.
        </p>
      </div>
    </div>
  );
};

export default About;
