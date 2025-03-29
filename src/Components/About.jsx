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
          "I'm a Frontend Developer passionate about building responsive and
          interactive web applications. I enjoy crafting seamless user
          experiences with modern technologies like HTML, CSS, JavaScript, and
          React. My focus is on writing clean, efficient code and optimizing
          performance. I love solving problems and continuously learning new
          tools to enhance my skills. My goal is to create visually appealing
          and user-friendly digital experiences."
        </p>
        <br />
        <p className="text-xl">
          "Creative Frontend Developer focused on building visually appealing
          and highly functional web interfaces. Passionate about delivering
          smooth and engaging user experiences."
        </p>
      </div>
    </div>
  );
};

export default About;
