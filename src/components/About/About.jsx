import React from "react";

const About = () => {
  return (
    <div className="bg-white h-2/4 mx-auto max-w-screen-lg">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="flex gap-8 items-center mx-auto max-w-6xl py-32 sm:py-48 lg:py-48">
          <div className="basis-1/2">
            <img
              src="https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="application developer"
              className="about-img"
            />
          </div>
          <div className="basis-1/2">
            <h3 className="text-lg text-left font-poppins font-bold sm:text-lg text-blue pb-2 ">
              ABOUT ME
            </h3>
            <h4 className="text-2xl text-left font-poppins font-bold sm:text-[25px] leading-[35px] text-black">
              A dedicated Front-end Developer based in Overland Park, Kansas 📍
            </h4>
            <p className="mt-5 text-left text-lg leading-7 text-gray font-mulish font-medium">
              As a Front-End Developer, I possess an impressive arsenal of
              skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
            <div className="flex space-x-6 mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
