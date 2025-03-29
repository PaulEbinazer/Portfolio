import React from "react";
import bmi from "../assets/portfolio/bmi.jpeg";
import currencyconvertor from "../assets/portfolio/currencyconvertor.jpeg";
import passwordgenerator from "../assets/portfolio/passwordgenerator.jpeg";
import todo from "../assets/portfolio/todo.jpeg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bmi,
      codehref:"https://github.com/PaulEbinazer/bmicalculator",
      demohref:"https://kebibmicalculat.netlify.app/"
    },
    {
      id: 2,
      src: currencyconvertor,
      codehref:"https://github.com/PaulEbinazer/currencyconverter",
      demohref:"https://kebicurrencyconvertor.netlify.app/"
      

    },
    {
      id: 3,
      src: passwordgenerator,
      codehref:"https://github.com/PaulEbinazer/passwordgenerator",
      demohref:"https://kebitodoapp.netlify.app/"
      
    },
    {
      id: 4,
      src: todo,
      codehref:"https://github.com/PaulEbinazer/Todo-app",
      demohref:"https://kebitodoapp.netlify.app/"
    },
    {
      id: 5,
      src: reactWeather,
      codehref:"https://github.com/PaulEbinazer/weatherapp.reactjs",
      demohref:"https://kebitodoapp.netlify.app/"
      
    },
    {
      id: 6,
      src: reactSmooth,
      codehref:"",
      demohref:"https://kebitodoapp.netlify.app/"
      
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
          "Showcasing my projects in frontend development, highlighting responsive designs and seamless user experiences."
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
                portfolios.map(({id,src,demohref,codehref})=>( <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <button className="w-1/2 py-3 m-4 duration-200 border border-transparent hover:scale-105 hover:border-blue-500">
  <a href={demohref} target="_blank" rel="noopener noreferrer">
    Demo
  </a>
</button>


              <button className="w-1/2 py-3 m-4 duration-200 border border-transparent hover:scale-105 hover:border-blue-500">
              <a href={codehref}
                target="_blank"
                rel="noopener noreferrer"
                >Code</a>
              </button>
            </div>
          </div>))
            }
         
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
