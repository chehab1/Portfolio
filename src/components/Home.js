import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import dp from '../assets/dp.jpg';
import { Link } from "react-scroll"; 

export default function Home() {
  const bioHeader = "Computer engineer";
  const bio = "Hey, my name is Chéhab. I am a current student at the arab academy for science and technology (AAST) expected graduation is 2024. My study field is computer engineering. I also graduateed from collège Sait-Marc with excellent grades (94%). I am an arabic native speaker and also studied English and French at school. ";
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          {bioHeader}
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
         {bio}
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={dp}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};