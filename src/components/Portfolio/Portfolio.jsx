import React from "react";
import laborWorx from "./../../images/lworx.gif";
import tmo from "./../../images/tmo.gif";
import sprint from "./../../images/sprint.gif";

const Portfolio = () => {
  return (
    <div className="bg-white-light" id="portfolio">
      <div className="relative isolate px-6 pt-6 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-14">
          <h3 className="text-lg text-left font-poppins font-bold sm:text-lg text-blue pb-2 pt-2">
            PORTFOLIO
          </h3>
          <h4 className="text-2xl text-left font-poppins font-bold sm:text-[25px] leading-[35px] text-black">
            Each project is a unique piece of development 🧩
          </h4>
          <p className="mt-5 text-left text-lg leading-7 text-gray font-mulish font-medium">
            As a seasoned Full Stack JavaScript Developer, I bring a wealth of
            experience gained through my tenure at prestigious Fortune 500
            companies. With a robust skill set encompassing cutting-edge
            technologies, I have successfully navigated the dynamic landscape of
            modern web development. My journey in the industry has been defined
            by proficiency in a range of tools, including React, Angular, and
            Node.js. Leveraging these technologies, I have consistently
            delivered innovative and impactful solutions that enhance user
            experiences and drive business growth. Beyond coding prowess, my
            keen eye for UI/UX design has been a key factor in shaping intuitive
            and visually appealing applications. I take pride in translating
            complex concepts into elegant and user-friendly interfaces, bridging
            the gap between technology and human interaction. My track record at
            Fortune 500 companies attests to my ability to thrive in
            high-pressure environments and deliver results that align with
            strategic business goals. I am committed to pushing boundaries,
            staying abreast of industry trends, and consistently refining my
            craft to drive excellence in every project I undertake.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="flex space-x-6 ">
            <div className="projects">
              <div className="project">
                <div className="project-image">
                  <img src={laborWorx} alt="laborworx" />
                </div>
                <div className="project-text">
                  <h3 className="font-poppins font-bold text-lg pb-2 text-left">
                    LaborWorx (STAFFING SOLUTION APPLICATION) &#128119;
                  </h3>
                  <p className="font-poppins font-medium text-[17px] text-gray-light text-left">
                    At the heart of a cutting-edge staffing application, my role
                    as a key contributor was defined by my expertise in React,
                    AWS, GraphQL, and Material UI. As part of a dynamic team, I
                    harnessed these technologies to shape an application that
                    revolutionized the staffing landscape. Leveraging React with
                    Material UI, I meticulously designed and developed intuitive
                    user interfaces that ensured an unparalleled user
                    experience. Employing AWS, I orchestrated a robust backend
                    infrastructure that optimized performance and scalability.
                    The power of GraphQL empowered me to streamline data queries
                    and responses, elevating the efficiency of the application.
                  </p>
                  <div className="stack">
                    <p>React</p>
                    <p>AWS</p>
                    <p>Scss</p>
                    <p>Angular</p>
                    <p>GraphQL</p>
                    <p>MUI</p>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="project-image">
                  <img src={tmo} alt="laborworx" />
                </div>
                <div className="project-text">
                  <h3 className="font-poppins font-bold text-lg pb-2 text-left">
                    T-MOBILE USA (E-Commerce) &#128241;
                  </h3>
                  <p className="font-poppins font-medium text-[17px] text-gray-light text-left">
                    As a valuable member of T-Mobile's Frontend team, my
                    contributions have been pivotal in shaping cutting-edge
                    digital experiences. By harnessing Angular, React, and NgRx,
                    I crafted dynamic and responsive user interfaces that
                    elevate user engagement and satisfaction. My proficiency in
                    Node.js and Hapi.js API allowed me to build robust backend
                    solutions, facilitating seamless communication between
                    frontend and server. Moreover, my expertise in Adobe
                    Experience Manager (AEM) enabled me to seamlessly integrate
                    content and design elements, ensuring consistent branding
                    and user experiences across platforms. This cohesive
                    approach, driven by the fusion of diverse technologies,
                    resonates with T-Mobile's commitment to innovation and
                    user-centric design. My dedication to technology and
                    collaboration has proven instrumental in delivering
                    solutions that align with T-Mobile's vision, enhancing the
                    digital landscape for both the brand and its users
                  </p>
                  <div className="stack">
                    <p>Angular</p>
                    <p>AWS</p>
                    <p>Scss</p>
                    <p>React</p>
                    <p>Rest</p>
                    <p>NgRx</p>
                    <p>AEM</p>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="project-image">
                  <img src={sprint} alt="laborworx" />
                </div>
                <div className="project-text">
                  <h3 className="font-poppins font-bold text-lg pb-2 text-left">
                    SPRINT MOBILE (E-Commerce) &#128241;{" "}
                  </h3>
                  <p className="font-poppins font-medium text-[17px] text-gray-light text-left">
                    During my tenure with the Sprint Corporation team, I made
                    substantial contributions by harnessing Angular, React, and
                    AEM to drive digital excellence. My proficiency in Angular
                    allowed me to create robust and dynamic web interfaces,
                    ensuring smooth user interactions and elevated user
                    experiences. In parallel, I leveraged React to build
                    efficient and modular components that enhanced application
                    responsiveness and maintainability. A standout aspect of my
                    role was my instrumental role in creating brand-specific
                    style guide. I utilized my design sensibilities and
                    technical skills to craft comprehensive style guide that
                    encapsulated the essence of the brand while maintaining
                    consistency across various applications. This ensured a
                    unified and cohesive user experience that resonated with the
                    brand's identity.
                  </p>
                  <div className="stack">
                    <p>Angular</p>
                    <p>AWS</p>
                    <p>Scss</p>
                    <p>React</p>
                    <p>Rest</p>
                    <p>AEM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
