import React from "react";
import { ReactComponent as ReactIcon } from "./../../svgs/react.svg";
import { ReactComponent as AngularIcon } from "./../../svgs/angular.svg";
import { ReactComponent as JSIcon } from "./../../svgs/js.svg";
import { ReactComponent as NodeIcon } from "./../../svgs/node.svg";
import { ReactComponent as ReduxIcon } from "./../../svgs/redux.svg";
import { ReactComponent as SassIcon } from "./../../svgs/sass.svg";
import { ReactComponent as TailwindIcon } from "./../../svgs/tailwind.svg";
import { ReactComponent as MongoIcon } from "./../../svgs/mongo.svg";
import { ReactComponent as PS } from "./../../svgs/ps.svg";
import { ReactComponent as Figma } from "./../../svgs/figma.svg";
import { ReactComponent as XD } from "./../../svgs/xd.svg";

const icons = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sai-krishna-07b750234",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/tejakrishnap",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    }
  ]
};

const Home = () => {
  return (
    <div className="bg-white-light h-screen" id="home">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="flex items-center mx-auto max-w-5xl py-32 sm:py-48 lg:py-40">
          <div>
            <h1 className="text-4xl text-left font-poppins font-bold sm:text-[55px] leading-[66px] text-black">
              Javascript Fullstack Developer
            </h1>
            <p className="mt-6 text-left text-lg leading-7 text-gray font-mulish font-medium">
              Hi, I'm Sai Krishna. A passionate Front-end React and Back-end
              Node Developer with UI/UX experience based in Overland Park,
              Kansas.📍
            </p>
            <div className="flex space-x-6 mt-6">
              {icons.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-blue"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="hero-img"></div>
        </div>
        <div className="flex items-center mx-auto max-w-5xl">
          {" "}
          <p className="tech-stack font-mulish font-bold flex-shrink-0">
            Tech Stack
          </p>
          <div className="flex tech-icons">
            <ul className="flex">
              <li className="flex">
                <ReactIcon title="React" />
              </li>
              <li className="flex">
                <NodeIcon title="Node" />
              </li>
              <li className="flex">
                <MongoIcon title="Mongo" />
              </li>
              <li className="flex">
                <ReduxIcon title="Redux" />
              </li>
              <li className="flex">
                <AngularIcon title="Angular" />
              </li>
              <li className="flex">
                <JSIcon title="Javascript" />
              </li>
              <li className="flex">
                <SassIcon title="Sass" />
              </li>
              <li className="flex">
                <TailwindIcon title="Tailwind CSS" />
              </li>
              <li className="flex">
                <Figma title="Figma" />
              </li>
              <li className="flex">
                <XD title="Adobe XD" />
              </li>
              <li className="flex">
                <PS title="Photoshop" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
