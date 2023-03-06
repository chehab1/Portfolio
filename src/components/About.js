import React from "react";

const About = () => { 
  const aboutHeader = "Hi. I'm Chéhab Mohamed Yakoot, nice to meet you.";
  const description = "A computer engineer, focused on software development. Experience in building web apps that are nice looking, dynamic and responsive using various technologies and frameworks. I have good problem solving technics using data structures and algorithms. Good knowledge about OOP and design patterns. Familiar with building windows apps using various approaches ";
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                {aboutHeader}
              </p>
            </div>
            <div>
              <p>
                {" "}
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;